import { gql } from "@apollo/client";
import {
  saleDetailsFragment,
  saleFragment,
  voucherDetailsFragment,
  voucherFragment
} from "@saleor/fragments/discounts";
import {
  discountErrorFragment,
  saleBulkDeleteError,
  voucherBulkDeleteError
} from "@saleor/fragments/errors";
import makeMutation from "@saleor/hooks/makeMutation";

import { TypedMutation } from "../mutations";
import {
  SaleBulkDelete,
  SaleBulkDeleteVariables
} from "./types/SaleBulkDelete";
import {
  SaleCataloguesAdd,
  SaleCataloguesAddVariables
} from "./types/SaleCataloguesAdd";
import {
  SaleCataloguesRemove,
  SaleCataloguesRemoveVariables
} from "./types/SaleCataloguesRemove";
import {
  SaleChannelListingUpdate,
  SaleChannelListingUpdateVariables
} from "./types/SaleChannelListingUpdate";
import { SaleCreate, SaleCreateVariables } from "./types/SaleCreate";
import { SaleDelete, SaleDeleteVariables } from "./types/SaleDelete";
import { SaleUpdate, SaleUpdateVariables } from "./types/SaleUpdate";
import {
  VoucherBulkDelete,
  VoucherBulkDeleteVariables
} from "./types/VoucherBulkDelete";
import {
  VoucherCataloguesAdd,
  VoucherCataloguesAddVariables
} from "./types/VoucherCataloguesAdd";
import {
  VoucherCataloguesRemove,
  VoucherCataloguesRemoveVariables
} from "./types/VoucherCataloguesRemove";
import {
  VoucherChannelListingUpdate,
  VoucherChannelListingUpdateVariables
} from "./types/VoucherChannelListingUpdate";
import { VoucherCreate, VoucherCreateVariables } from "./types/VoucherCreate";
import { VoucherDelete, VoucherDeleteVariables } from "./types/VoucherDelete";
import { VoucherUpdate, VoucherUpdateVariables } from "./types/VoucherUpdate";

const saleUpdate = gql`
  ${discountErrorFragment}
  ${saleFragment}
  mutation SaleUpdate(
    $input: SaleInput!
    $id: ID!
    $channelInput: SaleChannelListingInput!
  ) {
    saleUpdate(id: $id, input: $input) {
      errors {
        ...DiscountErrorFragment
      }
    }
    saleChannelListingUpdate(id: $id, input: $channelInput) {
      errors {
        ...DiscountErrorFragment
      }
      sale {
        ...SaleFragment
      }
    }
  }
`;
export const TypedSaleUpdate = TypedMutation<SaleUpdate, SaleUpdateVariables>(
  saleUpdate
);

const saleCataloguesAdd = gql`
  ${discountErrorFragment}
  ${saleDetailsFragment}
  mutation SaleCataloguesAdd(
    $input: CatalogueInput!
    $id: ID!
    $after: String
    $before: String
    $first: Int
    $last: Int
  ) {
    saleCataloguesAdd(id: $id, input: $input) {
      errors {
        ...DiscountErrorFragment
      }
      sale {
        ...SaleDetailsFragment
      }
    }
  }
`;
export const TypedSaleCataloguesAdd = TypedMutation<
  SaleCataloguesAdd,
  SaleCataloguesAddVariables
>(saleCataloguesAdd);

const saleCataloguesRemove = gql`
  ${discountErrorFragment}
  ${saleDetailsFragment}
  mutation SaleCataloguesRemove(
    $input: CatalogueInput!
    $id: ID!
    $after: String
    $before: String
    $first: Int
    $last: Int
  ) {
    saleCataloguesRemove(id: $id, input: $input) {
      errors {
        ...DiscountErrorFragment
      }
      sale {
        ...SaleDetailsFragment
      }
    }
  }
`;
export const TypedSaleCataloguesRemove = TypedMutation<
  SaleCataloguesRemove,
  SaleCataloguesRemoveVariables
>(saleCataloguesRemove);

const saleCreate = gql`
  ${discountErrorFragment}
  ${saleFragment}
  mutation SaleCreate($input: SaleInput!) {
    saleCreate(input: $input) {
      errors {
        ...DiscountErrorFragment
      }
      sale {
        ...SaleFragment
      }
    }
  }
`;
export const TypedSaleCreate = TypedMutation<SaleCreate, SaleCreateVariables>(
  saleCreate
);

const saleDelete = gql`
  ${discountErrorFragment}
  mutation SaleDelete($id: ID!) {
    saleDelete(id: $id) {
      errors {
        ...DiscountErrorFragment
      }
    }
  }
`;
export const TypedSaleDelete = TypedMutation<SaleDelete, SaleDeleteVariables>(
  saleDelete
);

const saleBulkDelete = gql`
  ${saleBulkDeleteError}
  mutation SaleBulkDelete($ids: [ID]!) {
    saleBulkDelete(ids: $ids) {
      errors {
        ...SaleBulkDeleteError
      }
    }
  }
`;
export const TypedSaleBulkDelete = TypedMutation<
  SaleBulkDelete,
  SaleBulkDeleteVariables
>(saleBulkDelete);

const saleChannelListingUpdate = gql`
  ${discountErrorFragment}
  ${saleFragment}
  mutation SaleChannelListingUpdate(
    $id: ID!
    $input: SaleChannelListingInput!
  ) {
    saleChannelListingUpdate(id: $id, input: $input) {
      errors {
        ...DiscountErrorFragment
      }
      sale {
        ...SaleFragment
      }
    }
  }
`;
export const useSaleChannelListingUpdate = makeMutation<
  SaleChannelListingUpdate,
  SaleChannelListingUpdateVariables
>(saleChannelListingUpdate);

const voucherChannelListingUpdate = gql`
  ${discountErrorFragment}
  ${voucherFragment}
  mutation VoucherChannelListingUpdate(
    $id: ID!
    $input: VoucherChannelListingInput!
  ) {
    voucherChannelListingUpdate(id: $id, input: $input) {
      errors {
        ...DiscountErrorFragment
      }
      voucher {
        ...VoucherFragment
      }
    }
  }
`;
export const useVoucherChannelListingUpdate = makeMutation<
  VoucherChannelListingUpdate,
  VoucherChannelListingUpdateVariables
>(voucherChannelListingUpdate);

const voucherUpdate = gql`
  ${discountErrorFragment}
  ${voucherFragment}
  mutation VoucherUpdate($input: VoucherInput!, $id: ID!) {
    voucherUpdate(id: $id, input: $input) {
      errors {
        ...DiscountErrorFragment
      }
      voucher {
        ...VoucherFragment
      }
    }
  }
`;
export const TypedVoucherUpdate = TypedMutation<
  VoucherUpdate,
  VoucherUpdateVariables
>(voucherUpdate);

const voucherCataloguesAdd = gql`
  ${discountErrorFragment}
  ${voucherDetailsFragment}
  mutation VoucherCataloguesAdd(
    $input: CatalogueInput!
    $id: ID!
    $after: String
    $before: String
    $first: Int
    $last: Int
  ) {
    voucherCataloguesAdd(id: $id, input: $input) {
      errors {
        ...DiscountErrorFragment
      }
      voucher {
        ...VoucherDetailsFragment
      }
    }
  }
`;
export const TypedVoucherCataloguesAdd = TypedMutation<
  VoucherCataloguesAdd,
  VoucherCataloguesAddVariables
>(voucherCataloguesAdd);

const voucherCataloguesRemove = gql`
  ${discountErrorFragment}
  ${voucherDetailsFragment}
  mutation VoucherCataloguesRemove(
    $input: CatalogueInput!
    $id: ID!
    $after: String
    $before: String
    $first: Int
    $last: Int
  ) {
    voucherCataloguesRemove(id: $id, input: $input) {
      errors {
        ...DiscountErrorFragment
      }
      voucher {
        ...VoucherDetailsFragment
      }
    }
  }
`;
export const TypedVoucherCataloguesRemove = TypedMutation<
  VoucherCataloguesRemove,
  VoucherCataloguesRemoveVariables
>(voucherCataloguesRemove);

const voucherCreate = gql`
  ${discountErrorFragment}
  ${voucherFragment}
  mutation VoucherCreate($input: VoucherInput!) {
    voucherCreate(input: $input) {
      errors {
        ...DiscountErrorFragment
      }
      voucher {
        ...VoucherFragment
      }
    }
  }
`;
export const TypedVoucherCreate = TypedMutation<
  VoucherCreate,
  VoucherCreateVariables
>(voucherCreate);

const voucherDelete = gql`
  ${discountErrorFragment}
  mutation VoucherDelete($id: ID!) {
    voucherDelete(id: $id) {
      errors {
        ...DiscountErrorFragment
      }
    }
  }
`;
export const TypedVoucherDelete = TypedMutation<
  VoucherDelete,
  VoucherDeleteVariables
>(voucherDelete);

const voucherBulkDelete = gql`
  ${voucherBulkDeleteError}
  mutation VoucherBulkDelete($ids: [ID]!) {
    voucherBulkDelete(ids: $ids) {
      errors {
        ...VoucherBulkDeleteError
      }
    }
  }
`;
export const TypedVoucherBulkDelete = TypedMutation<
  VoucherBulkDelete,
  VoucherBulkDeleteVariables
>(voucherBulkDelete);
