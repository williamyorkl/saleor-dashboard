import {
  ApolloError,
  MutationFunction,
  MutationResult,
  MutationUpdaterFn
} from "@apollo/client";
import { Mutation } from "@apollo/client/react/components";
import { DocumentNode } from "graphql";
import React from "react";
import { useIntl } from "react-intl";

import { handleNestedMutationErrors, showAllErrors, useUser } from "./auth";
import { isJwtError } from "./auth/errors";
import useNotifier from "./hooks/useNotifier";
import { commonMessages } from "./intl";
import { getMutationStatus } from "./misc";
import { MutationResultAdditionalProps } from "./types";
import { GqlErrors, hasError } from "./utils/api";

export interface TypedMutationInnerProps<TData, TVariables> {
  children: (
    mutateFn: MutationFunction<TData, TVariables>,
    result: MutationResult<TData> & MutationResultAdditionalProps
  ) => React.ReactNode;
  onCompleted?: (data: TData) => void;
  onError?: (error: ApolloError) => void;
  variables?: TVariables;
}

// For some reason Mutation returns () => Element instead of () => ReactNode
export function TypedMutation<TData, TVariables>(
  mutation: DocumentNode,
  update?: MutationUpdaterFn<TData>
) {
  return (props: TypedMutationInnerProps<TData, TVariables>) => {
    const notify = useNotifier();
    const intl = useIntl();
    const user = useUser();
    const { children, onCompleted, onError, variables } = props;

    return (
      <Mutation
        mutation={mutation}
        onCompleted={data => {
          handleNestedMutationErrors({
            data,
            intl,
            notify
          });

          onCompleted(data);
        }}
        errorPolicy="all"
        onError={(err: ApolloError) => {
          if (hasError(err, GqlErrors.ReadOnlyException)) {
            notify({
              status: "error",
              text: intl.formatMessage(commonMessages.readOnly)
            });
          } else if (err.graphQLErrors.some(isJwtError)) {
            user.logout();
            notify({
              status: "error",
              text: intl.formatMessage(commonMessages.sessionExpired)
            });
          } else {
            showAllErrors({ notify, error: err });
          }

          if (onError) {
            onError(err);
          }
        }}
        variables={variables}
        update={update}
      >
        {(mutateFn, result) => (
          <>
            {children(mutateFn, {
              ...result,
              status: getMutationStatus(result)
            })}
          </>
        )}
      </Mutation>
    );
  };
}
