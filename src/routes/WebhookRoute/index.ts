import WebhookRoutes from "./WebhookRoute";

const WebhookRoute = (app) => {
    app.use("/webhook", WebhookRoutes);
}

export default WebhookRoute;