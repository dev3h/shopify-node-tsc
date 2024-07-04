import "@shopify/shopify-api/adapters/node";
import { shopifyApi, LATEST_API_VERSION } from "@shopify/shopify-api";

export const shopify = shopifyApi({
  apiKey: process.env.SHOPIFY_API_KEY,
  apiSecretKey: process.env.SHOPIFY_API_SECRET,
  //   scopes: ["read_products", "write_products"],
  hostName: process.env.SHOPIFY_STORE_URL,
  adminApiAccessToken: process.env.SHOPIFY_ACCESS_TOKEN,
  apiVersion: LATEST_API_VERSION,
  isEmbeddedApp: false,
  isCustomStoreApp: true,
});

export const session = shopify.session.customAppSession(process.env.SHOPIFY_STORE_URL);
