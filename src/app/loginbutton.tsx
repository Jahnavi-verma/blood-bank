"use client";
import React from "react";
import { FiLogIn } from "@react-icons/all-files/fi/FiLogIn";

type Props = {
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
};

export default function LoginButton({ onClick, className = "", ariaLabel = "Login" }: Props) {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      className={
        "relative flex items-center gap-3 px-4 py-2 rounded-full backdrop-blur-sm bg-white/8 border border-white/10 text-white text-sm shadow-[0_6px_18px_rgba(0,0,0,0.35)] transition-transform transform hover:scale-105 active:scale-98 focus:outline-none focus:ring-2 focus:ring-white/30 " +
        className
      }
    >
      <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white/8 border border-white/8">
        <FiLogIn size={16} />
      </span>
      <span className="whitespace-nowrap font-medium">Login</span>

      {/* Hover tooltip-like label for icon-only variants (keeps accessible) */}
      <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 rounded-md bg-gray-900/85 text-xs px-2 py-1 opacity-0 transition-opacity duration-150 hover:opacity-100">
        Login
      </span>
    </button>
  );
}

