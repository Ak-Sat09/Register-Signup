import express from "express";
import {
  changePassword,
  forgetPassword,
  login, 
  register,
  resetPassword,
  
} from "../controllers/userController.js";
import {  isAuthenticated } from "../middlewares/auth.js";
import singleUpload from "../middlewares/multer.js";

const router = express.Router();

// To register a new user
router.route("/register").post(singleUpload, register);

// Login
router.route("/login").post(login);
 
// ChangePassword
router.route("/changepassword").put(isAuthenticated, changePassword);
 
// ForgetPassword
router.route("/forgetpassword").post(forgetPassword);
// ResetPassword
router.route("/resetpassword/:token").put(resetPassword);
 
export default router;
