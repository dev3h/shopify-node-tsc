import ProductRoute from "./ProductRoute";
import WebhookRoute from "./WebhookRoute";

const initRoutes = (app) => {
  ProductRoute(app);
  WebhookRoute(app);
};

export default initRoutes;
