import { useAuth } from "@clerk/react";
import React from "react";
import { Navigate, Outlet } from "react-router";

export default function ProtectedLayout() {
  const { isLoaded, isSignedIn } = useAuth();

  if (!isLoaded) return null;

  if (!isSignedIn) return <Navigate to="/" replace />;

  return <Outlet />;
}
