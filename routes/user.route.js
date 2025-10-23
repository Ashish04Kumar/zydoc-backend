import express from "express";
import {
  bookAppointment,
  cancelAppointment,
  getProfile,
  listAppointment,
  loginUser,
  paymentRazorpay,
  resgisterUser,
  updateProfile,
  verifyRazorpay,
} from "../controllers/user.controller.js";
import authUser from "../middlewares/auth-user.js";
import upload from "../middlewares/multer.js";
const userRouter = express.Router();

userRouter.post("/register", resgisterUser);
userRouter.post("/login", loginUser);
userRouter.get("/get-profile", authUser, getProfile);
userRouter.post(
  "/update-profile",
  upload.single("image"),
  authUser,
  updateProfile
);
userRouter.post("/book-appointment", authUser, bookAppointment);
userRouter.get("/appointments", authUser, listAppointment);
userRouter.post("/cancel-appointment", authUser, cancelAppointment);
userRouter.post("/payment-razorpay", authUser, paymentRazorpay);
userRouter.post("/verifyRazorpay", authUser, verifyRazorpay);

export default userRouter;
