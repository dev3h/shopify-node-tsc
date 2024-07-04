import express from "express";
import {
  createProduct,
  deleteProduct,
  getProductByID,
  getProducts,
  updateProduct,
} from "../../services/productServices/productServices";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const data = await getProducts(req);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).json({ error: error.message, data: error?.response });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const data = await getProductByID(req?.params?.id);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).json({ error: error.message, data: error?.response });
  }
});

router.post("/", async (req, res) => {
  const product = req.body;
  try {
    const newProduct = await createProduct(product);
    return res.json(newProduct);
  } catch (error) {
    return res.status(400).json({ error: error.message, data: error?.response });
  }
});

router.put("/:id", async (req, res) => {
  const product = req.body;
  try {
    const updatedProduct = await updateProduct(req?.params?.id, product);
    return res.json(updatedProduct);
  } catch (error) {
    return res.status(400).json({ error: error.message, data: error?.response });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const data = await deleteProduct(req?.params?.id);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).json({ error: error.message, data: error?.response });
  }
});



export default router;
