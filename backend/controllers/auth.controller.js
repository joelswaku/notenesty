import { User } from "../models/user.model.js";
import transporter from "../utils/mailer.js"; // ✅ ADD THIS LINE
import bcryptjs from "bcryptjs";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";

import { sendWelcomeEmail, sendPasswordResetCodeEmail,sendPasswordResetConfirmationEmail, sendContactFormEmail, sendContactAutoReply } from "../utils/emails.js";

// ===== SIGNUP =====
export const signup = async (req, res) => {
  const { email, password, name } = req.body;
    //console.log("Received signup:", req.body);

  try {
    if (!email || !password || !name) {
      throw new Error("All fields are required");
    }

    const userAlreadyExists = await User.findOne({ email });
    if (userAlreadyExists) {
      return res.status(400).json({ success: false, message: "User already exists" });
    }

    const hashedPassword = await bcryptjs.hash(password, 10);

    const user = new User({
      email,
      password: hashedPassword,
      name,
    });

    // Send welcome email
      // Then send welcome email
      // Send welcome email, but don't fail signup if email fails
 
    // Save user after sending email
    await user.save();
        // Send welcome email, but don't fail signup if email fails
    try {
      await sendWelcomeEmail(email, name);
      console.log("Welcome email sent!");
    } catch (emailErr) {
      console.error("Failed to send welcome email:", emailErr.message);
      // Optional: log or notify internally
    }

    console.log("Email sent successfully");
    // Generate auth token and set cookie
    generateTokenAndSetCookie(res, user._id);

    

    res.status(201).json({
      success: true,
      message: "User created successfully. Welcome email sent.",
      user: {
        ...user._doc,
        password: undefined,
        _id: user._id,
      },
    });
 
  } catch (error) {
    console.error("Signup error:", error.message);
    res.status(400).json({ success: false, message: error.message });
  }
};

// ===== LOGIN =====
export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ success: false, message: "Invalid credentials" });
    }

    const isPasswordValid = await bcryptjs.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ success: false, message: "Invalid credentials" });
    }

    generateTokenAndSetCookie(res, user._id);

    user.lastLogin = new Date();
    await user.save();

    res.status(200).json({
      success: true,
      message: "Logged in successfully",
      user: {
        ...user._doc,
        password: undefined,
      },
    });
  } catch (error) {
    console.log("Error in login ", error);
    res.status(400).json({ success: false, message: error.message });
  }
};

// ===== LOGOUT =====
export const logout = async (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ success: true, message: "Logged out successfully" });
};

// ===== RESET PASSWORD =====
//generate code
const generateResetCode = () => {
  return Math.floor(100000 + Math.random() * 900000).toString(); // 6 digit
};

// ===== FORGOT PASSWORD =====
export const forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // Generate code
    const code = generateResetCode();
    const expires = Date.now() + 15 * 60 * 1000; // 15 mins

    user.resetCode = code;
    user.resetCodeExpiresAt = new Date(expires);
    await user.save();

    // Send email
    try {
      await sendPasswordResetCodeEmail(user.email, code);
      console.log("Verification code sent!");
    } catch (emailErr) {
      console.error("Failed to send verification email:", emailErr.message);
    }

    res.status(200).json({ message: "Verification code sent successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};


// ===== verify code =====
export const verifyResetCode = async (req, res) => {
  const { email, code } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || !user.resetCode || !user.resetCodeExpiresAt) {
      return res.status(400).json({ message: "Invalid or expired code" });
    }

    if (user.resetCode !== code) {
      return res.status(400).json({ message: "Invalid code" });
    }

    if (user.resetCodeExpiresAt < Date.now()) {
      return res.status(400).json({ message: "Code expired" });
    }

    res.status(200).json({ message: "Code verified" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
// ===== RESET PASSWORD =====
export const resetPassword = async (req, res) => {
  const { code } = req.params;
  const { password } = req.body;

  console.log("Incoming code:", code);

  try {
    // Find user with valid code that hasn't expired
    const user = await User.findOne({
      resetCode: code,
      resetCodeExpiresAt: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({ message: "Invalid or expired reset token" });
    }

    // Reset password
    const hashedPassword = await bcryptjs.hash(password, 10);
    user.password = hashedPassword;
    user.resetCode = null;
    user.resetCodeExpiresAt = null;
    await user.save();

    // Send confirmation email
    try {
      await sendPasswordResetConfirmationEmail(user.email, user.name);
      console.log("Password reset confirmation sent!");
    } catch (emailErr) {
      console.error("Failed to send confirmation email:", emailErr.message);
    }

    res.status(200).json({ message: "Password reset successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};



// ===== CHECK AUTH =====
export const checkAuth = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ success: false, message: "Not authenticated" });
    }

    res.status(200).json({ success: true, user: req.user });
  } catch (error) {
    console.log("Error in checkAuth ", error);
    res.status(400).json({ success: false, message: error.message });
  }
};

export const profile = async (req , res ) =>{
  try {
    res.status(200).json({ success: true, user: req.user });
  } catch (error) {
    console.log("Error in checkAuth ", error);
    res.status(400).json({ success: false, message: error.message });
  }
};


export const contact = async (req, res) => {
  try {
    const { email, name, message } = req.body;

    if (!email || !name || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Send message to your inbox
    // Send confirmation email
    try {
      await sendContactFormEmail(email, name, message);
      console.log("thanks email sent!");
    } catch (emailErr) {
      console.error("Failed to send thanks email:", emailErr.message);
    }
   
     try {
      await sendContactAutoReply(email, name, message);
      console.log("not reply sent!");
    } catch (emailErr) {
      console.error("Failed to send not reply:", emailErr.message);
    }
    
  

    res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error in contact:", error);
    res.status(500).json({ message: error.message });
  }
};

