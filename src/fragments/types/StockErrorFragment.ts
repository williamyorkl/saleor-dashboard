/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { StockErrorCode } from "./../../types/globalTypes";

// ====================================================
// GraphQL fragment: StockErrorFragment
// ====================================================

export interface StockErrorFragment {
  __typename: "StockError";
  code: StockErrorCode;
  field: string | null;
  message: string | null;
}
