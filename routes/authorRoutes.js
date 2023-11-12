const express = require("express");
const router = express.Router();

const authorController = require("../controllers/authorController");

router.get("/:id", authorController.author_details);
router.get("/:id/articles", authorController.author_articles);
router.post("/new", authorController.author_create_new);
router.delete("/:id", authorController.author_delete);
router.post("/:id", authorController.author_update_details);

module.exports = router;
