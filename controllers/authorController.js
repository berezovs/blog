const Author = require("../models/AuthorModel");
const asyncHandler = require("express-async-handler");

exports.author_list = asyncHandler(async (req, res, next) => {
  res.json({ message: "not implemented yet" });
});

exports.author_details = asyncHandler(async (req, res, next) => {
  res.json({ message: "not implemented yet" });
});

exports.author_create_new = asyncHandler(async (req, res, next) => {
  console.log("Author: ", req.body);
  res.json({ message: req.body });
});

exports.author_update_details = asyncHandler(async (req, res, next) => {
  res.json({ message: "not implemented yet" });
});

exports.author_articles = asyncHandler(async (req, res, next) => {
  res.json({ message: "not implemented yet" });
});

exports.author_delete = asyncHandler(async (req, res, next) => {
  res.json({ message: "not implemented yet" });
});
