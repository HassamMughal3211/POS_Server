const express = require("express");
const { getItem, addItem, updateItem } = require("../controllers/itemController");
const router = express.Router();

router.get("/getItem", getItem);
router.post("/addItem", addItem);
router.post("/updateItem", updateItem);

module.exports = router;