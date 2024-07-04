import express from "express";

const router = express.Router();

router.post("/inventory", async (req, res) => {
  try {
    console.log("Webhook received");
    console.log(req.body);
    res.status(200).send("Webhook received");
  } catch (error) {
    return res.status(400).json({ error: error.message, data: error?.response });
  }
});



export default router;
