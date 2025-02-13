import { GiftCardError } from "@saleor/fragments/types/GiftCardError";
import { GiftCardErrorCode } from "@saleor/types/globalTypes";
import commonErrorMessages, {
  getCommonFormFieldErrorMessage
} from "@saleor/utils/errors/common";
import { defineMessages, IntlShape } from "react-intl";

export const giftCardUpdateDetailsCardMessages = defineMessages({
  title: {
    defaultMessage: "Details",
    description: "title"
  }
});

const giftCardErrorMessages = defineMessages({
  notFound: {
    defaultMessage: "Couldn't find gift card",
    description: "gift card not found message"
  }
});

export function getGiftCardErrorMessage(
  error: Omit<GiftCardError, "__typename" | "message"> | undefined,
  intl: IntlShape
): string {
  if (error) {
    switch (error.code) {
      case GiftCardErrorCode.NOT_FOUND:
        return intl.formatMessage(giftCardErrorMessages.notFound);
      case GiftCardErrorCode.INVALID:
        return intl.formatMessage(commonErrorMessages.invalid);
    }
  }

  return getCommonFormFieldErrorMessage(error, intl);
}
