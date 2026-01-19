const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const {
  validateReview,
  isloggedIn,
  isReviewAuther,
} = require("../middleware.js");

const reviewController = require("../controllers/reviews.js");

//post route
router.post(
  "/",
  isloggedIn,
  validateReview,
  wrapAsync(reviewController.createReview),
);

//delete route
router.delete(
  "/:reviewId",
  isloggedIn,
  isReviewAuther,
  wrapAsync(reviewController.destroyReview),
);

module.exports = router;
