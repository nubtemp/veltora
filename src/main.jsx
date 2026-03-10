import React from "react";
import ReactDOM from "react-dom/client";
import { ClerkProvider } from "@clerk/clerk-react";
import App from "./App.jsx";

// ── REPLACE THIS with your Clerk Publishable Key ─────────────────────────────
// 1. Go to clerk.com → Create application → copy "Publishable key"
// 2. Paste it below (starts with pk_test_ or pk_live_)
const CLERK_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!CLERK_KEY) {
  throw new Error("Missing VITE_CLERK_PUBLISHABLE_KEY in .env file");
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={CLERK_KEY} afterSignInUrl="/" afterSignUpUrl="/">
      <App />
    </ClerkProvider>
  </React.StrictMode>
);