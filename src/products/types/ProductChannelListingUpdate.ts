/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ProductChannelListingUpdateInput, ProductErrorCode } from "./../../types/globalTypes";

// ====================================================
// GraphQL mutation operation: ProductChannelListingUpdate
// ====================================================

export interface ProductChannelListingUpdate_productChannelListingUpdate_product_channelListings_channel {
  __typename: "Channel";
  id: string;
  name: string;
  currencyCode: string;
}

export interface ProductChannelListingUpdate_productChannelListingUpdate_product_channelListings {
  __typename: "ProductChannelListing";
  isPublished: boolean;
  publicationDate: any | null;
  isAvailableForPurchase: boolean | null;
  availableForPurchase: any | null;
  visibleInListings: boolean;
  channel: ProductChannelListingUpdate_productChannelListingUpdate_product_channelListings_channel;
}

export interface ProductChannelListingUpdate_productChannelListingUpdate_product_variants_channelListings_channel {
  __typename: "Channel";
  id: string;
  name: string;
  currencyCode: string;
}

export interface ProductChannelListingUpdate_productChannelListingUpdate_product_variants_channelListings_price {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface ProductChannelListingUpdate_productChannelListingUpdate_product_variants_channelListings_costPrice {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface ProductChannelListingUpdate_productChannelListingUpdate_product_variants_channelListings_preorderThreshold {
  __typename: "PreorderThreshold";
  quantity: number | null;
  soldUnits: number;
}

export interface ProductChannelListingUpdate_productChannelListingUpdate_product_variants_channelListings {
  __typename: "ProductVariantChannelListing";
  channel: ProductChannelListingUpdate_productChannelListingUpdate_product_variants_channelListings_channel;
  price: ProductChannelListingUpdate_productChannelListingUpdate_product_variants_channelListings_price | null;
  costPrice: ProductChannelListingUpdate_productChannelListingUpdate_product_variants_channelListings_costPrice | null;
  preorderThreshold: ProductChannelListingUpdate_productChannelListingUpdate_product_variants_channelListings_preorderThreshold | null;
}

export interface ProductChannelListingUpdate_productChannelListingUpdate_product_variants {
  __typename: "ProductVariant";
  id: string;
  channelListings: ProductChannelListingUpdate_productChannelListingUpdate_product_variants_channelListings[] | null;
}

export interface ProductChannelListingUpdate_productChannelListingUpdate_product {
  __typename: "Product";
  id: string;
  channelListings: ProductChannelListingUpdate_productChannelListingUpdate_product_channelListings[] | null;
  variants: (ProductChannelListingUpdate_productChannelListingUpdate_product_variants | null)[] | null;
}

export interface ProductChannelListingUpdate_productChannelListingUpdate_errors {
  __typename: "ProductChannelListingError";
  code: ProductErrorCode;
  field: string | null;
  message: string | null;
  channels: string[] | null;
}

export interface ProductChannelListingUpdate_productChannelListingUpdate {
  __typename: "ProductChannelListingUpdate";
  product: ProductChannelListingUpdate_productChannelListingUpdate_product | null;
  errors: ProductChannelListingUpdate_productChannelListingUpdate_errors[];
}

export interface ProductChannelListingUpdate {
  productChannelListingUpdate: ProductChannelListingUpdate_productChannelListingUpdate | null;
}

export interface ProductChannelListingUpdateVariables {
  id: string;
  input: ProductChannelListingUpdateInput;
}
