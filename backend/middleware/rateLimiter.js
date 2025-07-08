// middleware/rateLimiter.js
import { rateLimit } from "express-rate-limit";

export const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 19, // e.g. max 8 requests per user/IP in 10 mins
  keyGenerator: (req, res) => req.user?._id?.toString() || req.ip,
  message: {
    success: false,
    message: "Too many requests, please try again later.",
  },
  standardHeaders: true,
  legacyHeaders: false,
});
