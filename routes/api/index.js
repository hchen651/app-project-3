const router = require("express").Router();
const cardRoutes = require("./cards");

router.use("/cards", cardRoutes);

module.exports = router;
