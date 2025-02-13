import Decorator from "@saleor/storybook/Decorator";
import { WebhookErrorCode } from "@saleor/types/globalTypes";
import { storiesOf } from "@storybook/react";
import React from "react";

import { webhook } from "../../fixtures";
import WebhookDetailsPage, {
  WebhookDetailsPageProps
} from "./WebhookDetailsPage";

const props: WebhookDetailsPageProps = {
  appName: "app",
  disabled: false,
  errors: [],
  onBack: () => undefined,
  onSubmit: () => undefined,
  saveButtonBarState: "default",
  webhook
};
storiesOf("Views / Apps / Webhooks / Webhook details", module)
  .addDecorator(Decorator)
  .add("default", () => <WebhookDetailsPage {...props} />)
  .add("undefined", () => <WebhookDetailsPage {...props} webhook={undefined} />)
  .add("unnamed", () => (
    <WebhookDetailsPage {...props} webhook={{ ...webhook, name: null }} />
  ))
  .add("loading", () => (
    <WebhookDetailsPage {...props} webhook={undefined} disabled={true} />
  ))
  .add("form errors", () => (
    <WebhookDetailsPage
      {...props}
      errors={["name", "targetUrl", "secretKey", null].map(field => ({
        __typename: "WebhookError",
        code: WebhookErrorCode.INVALID,
        field,
        message: "Webhook invalid"
      }))}
    />
  ));
