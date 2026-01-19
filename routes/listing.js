const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");

const Listing = require("../models/listing.js");
const { isloggedIn, isOwner, validateListing } = require("../middleware.js");
const listingController = require("../controllers/listings.js");

//Index route and create route
router
  .route("/")
  .get(wrapAsync(listingController.index))
  .post(
    isloggedIn,
    validateListing,
    wrapAsync(listingController.createListing),
  );

//New route
router.get("/new", isloggedIn, listingController.renderNewForm);

// show, update and delete route
router
  .route("/:id")
  .get(wrapAsync(listingController.showListing))
  .put(
    isloggedIn,
    isOwner,
    validateListing,
    wrapAsync(listingController.updateListing),
  )
  .delete(isloggedIn, isOwner, wrapAsync(listingController.destroyListing));

//edit route
router.get(
  "/:id/edit",
  isloggedIn,
  isOwner,
  wrapAsync(listingController.renderEditForm),
);

module.exports = router;
