import express from "express";
import {
  signup,
  login,
  logout,
  forgotPassword,
  verifyResetCode,
  resetPassword,
  checkAuth,
  contact,
} from "../controllers/auth.controller.js";
import { protect } from "../middleware/protect.js";

const router = express.Router();

// Auth routes
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

// Protected route to check authentication status
router.get("/check",protect, checkAuth);
router.get("/profile",protect, checkAuth);

// Password reset routes
router.post("/forgot-password", forgotPassword);//this s the email user will send to reset password
router.post("/verify-reset-code", verifyResetCode);// this the code user will send to reset password
//router.post("/new-password", resetPassword);// this the new password user will send
router.post("/reset-password/:code", resetPassword);
router.post("/contact", contact);

export default router;