import { DataType } from "@shopify/shopify-api";
import { shopify, session } from "../shopify";

export const getProducts = async (req) => {
  const limit = req?.query?.limit || 10;
  const search = req?.query?.search;
  const client = new shopify.clients.Rest({ session });
  const product = await client.get({
    path: `products`,
    query: {
      limit,
      // search like %
      title: search
    },
  });
  return product;
};

export const createProduct = async (product: any) => {
    const client = new shopify.clients.Rest({ session });
    const newProduct = await client.post({
      path: `products`,
      data: {
        product
      },
      type: DataType.JSON,
    });
    return newProduct;
}

export const getProductByID = async (id: string) => {
    const client = new shopify.clients.Rest({ session });
    const product = await client.get({
      path: `products/${id}`,
    });
    return product;
}

export const updateProduct = async (id: string, product: any) => {
    const client = new shopify.clients.Rest({ session });
    const updatedProduct = await client.put({
      path: `products/${id}`,
      data: {
        product
      },
      type: DataType.JSON,
    });
    return updatedProduct;
}

export const deleteProduct = async (id: string) => {
    const client = new shopify.clients.Rest({ session });
    const product = await client.delete({
      path: `products/${id}`,
    });
    return product;
}
