import ProductRoutes from "./ProductRoute";

const ProductRoute = (app) => {
    app.use("/product", ProductRoutes);
}

export default ProductRoute;