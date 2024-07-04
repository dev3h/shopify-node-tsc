## Link tài liệu

- [shopify res api](https://shopify.dev/docs/api/admin-rest)
- [shopify admin](https://admin.shopify.com/)

## watch ts file

- [link](https://stackoverflow.com/questions/37979489/how-to-watch-and-reload-ts-node-when-typescript-files-change)

## shopifyApi config

- [link](https://github.com/Shopify/shopify-app-js/blob/main/packages/apps/shopify-api/docs/reference/shopifyApi.md)

## set up shopify api

- [link video](https://www.youtube.com/watch?v=2NzI8bwhIdU)

## Note

- Lưu ý phần `session` khi sử dụng shopify api cấu hình custom

```js
const session = shopify.session.customAppSession(process.env.SHOPIFY_STORE_URL);
```

- Phần accessToken thì cấu hình trong shopifyApi

```js
adminApiAccessToken: process.env.SHOPIFY_ACCESS_TOKEN,
isEmbeddedApp: false,
isCustomStoreApp: true,
```

- Cái package `shopify-api-node` thì setup nó nhanh hơn, với gọi cũng đơn giản hơn
