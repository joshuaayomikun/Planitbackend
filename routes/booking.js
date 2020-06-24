const express = require("express");
const { check } = require("express-validator");
const router = express.Router();
const {
 booking, acceptBooking, getAllBookings, getCartCountByUserId, addToCart, getCartContentByUserId
} = require("../controllers/booking");
const {
  verifyAdmin,
  verifyUser,
  verifyVendor,
} = require("../middlewares/verifyuser");


/**
 * @method - POST
 * @param - /bookVendor
 * @description - Book a Vendor
 */

router.post(
  "/bookVendor/:serviceId", verifyUser,
  [
    check("name", "name is required").not().isEmpty(),
    check("email", "email is required").not().isEmpty(),
    check("phone", "phone is required").not().isEmpty(),
    check("address", "address is required").not().isEmpty(),
    check("dateNeeded", "dateNeeded is required").not().isEmpty(),
  ],
  booking
);

router.post(
  "/addToCart",
  [
    check("serviceId", "name is required").not().isEmpty(),
    check("userId", "email is required").not().isEmpty()
  ],
  addToCart
);

/**
 * @method - GET
 * @param - /GetBookedService
 * @description - Accept a booking
 */

router.get(
  "/getCartCountByUserId/:vendorid", getCartCountByUserId
);

router.get(
  "/getCartContentByUserId/:vendorid", verifyUser, getCartContentByUserId
);



router.get(
  "/acceptBooking", verifyUser, acceptBooking
);

/**
 * @method - GET
 * @param - /GetAllBookedService(Admin)
 * @description - Get/see all bookings
 */

router.get(
  "/getAllBookings", verifyUser, verifyAdmin, getAllBookings
);

module.exports = router;