import { create } from 'zustand';
import { toast } from 'react-hot-toast';
import axios from '../lib/axios';
//import api from "../lib/axios";
import { useRateLimitStore } from './useRateLimitStore';

export const useUserStore = create((set) => ({
  user: null,
  isLoggedIn: false,
  loading: false,
  authUser: false,
   checkingAuth: true, // ✅ add this

    // NEW
  setAuthUser: (authUser) => set({ authUser }),


  setUser: (user) => set({ user, isLoggedIn: !!user }),

  // ...rest of your existing actions

  signup: async ({ name, email, password }) => {
    set({ loading: true });

    if (!name || !email || !password) {
      toast.error("Please fill in all fields");
      set({ loading: false });
      return false;
    }

    try {
      const res = await axios.post("/auth/signup", { name, email, password });
      set({ user: res.data.user, loading: false });
      toast.success("Signup successful! Please log in.");
      return true;
    } catch (error) {
      set({ loading: false });
      toast.error(error.response?.data?.message || "An error occurred");
      return false;
    }
  },

  login: async (email, password) => {
    set({ loading: true });

    try {
      const res = await axios.post("/auth/login", { email, password });
     

      set({ user: res.data.user,  loading: false , isLoggedIn: true });
      toast.success("Logged in successfully!");
      return true;
    } catch (error) {
      set({ loading: false });
      toast.error(error.response?.data?.message || "Login failed");
      return false;
    }
  },

 logout: async () => {
  try {
    await axios.post("/auth/logout"); // 👈 calls backend to clear the cookie
  } catch (err) {
    console.error("Logout error:", err.message);
  }

  set({ user: null, isLoggedIn: false });
  toast.success("Logged out successfully!");
},

 checkAuth: async (silent = false) => {
    const { setRateLimited } = useRateLimitStore.getState();
    set({ loading: true, checkingAuth: true }); // ✅ set checking

    try {
      const res = await axios.get("/auth/check");
      set({
        user: res.data.user,
        isLoggedIn: true,
        authUser: true,
        loading: false,
        checkingAuth: false, // ✅ done
      });
      return true;
    } catch (error) {
      if (error.response?.status === 429) {
        setRateLimited(true);
        set({ loading: false, checkingAuth: false });
        return false;
      }

      set({
        user: null,
        isLoggedIn: false,
        authUser: false,
        loading: false,
        checkingAuth: false, // ✅ done
      });

      if (!silent) {
        toast.error(error.response?.data?.message || "Auth check failed");
      }
      return false;
    }
  },

profile: async () => {
  try {
    const res = await axios.get("/auth/profile");
    set({ user: res.data.user });
    return true;
  } catch (error) {
    toast.error(error.response?.data?.message || "Profile fetch failed");
    return false;
  }
},
forgetPassword: async (email) => {
   try {
    if (!email || !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$/.test(email)) {
      toast.error("Please provide your email");
      return false;
    }
    await axios.post("/auth/forgot-password", { email });
    toast.success("Reset code sent to your email!");
    return true;
  } catch (error) {
    toast.error(error.response?.data?.message || "Password reset failed");
    return false;
  }
},

verifyResetCode: async (email, code) => {
  try {
    await axios.post("/auth/verify-reset-code", { email, code });
    toast.success("Code verified!");
    return true;
  } catch (error) {
    toast.error(error.response?.data?.message || "Invalid or expired code");
    return false;
  }
},

resetPassword: async (code, password) => {
  try {
    if (!code || !password) {
      toast.error("Please provide both code and password");
      return false;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return false;
    }


    await axios.post(`/auth/reset-password/${code}`, { password }); // ✅ fixed key
    toast.success("Password reset successfully!");
    return true;
  } catch (error) {
    toast.error(
      error.response?.data?.message ||
        "Failed to reset password. Please verify your email or try again"
    );
    return false;
  }
},
contactForm: async (name, email, message) => { 
  try {
    if (!name || !email || !message) {
      toast.error("Please fill in all fields");
      return false;
    }
    await axios.post("/auth/contact", { name, email, message });
    toast.success("Message sent successfully!");
    return true;
   } catch (error) {
  console.error("Contact form error:", error);
  toast.error(error.response?.data?.message || "Failed to send message");
  return false;
}
},



}));