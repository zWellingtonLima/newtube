"use client";

import { UserButton, SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { UserCircleIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

export const AuthButton = () => {
  // TODO: Add different auth states

  return (
    <>
      <SignedIn>
        <UserButton />
        {/* Add menu items for Studio User profile*/}
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal">
          <Button
            variant={"outline"}
            className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-500 border-blue-500/20 rounded-full shadow-none"
          >
            <UserCircleIcon />
            Sign in
          </Button>
        </SignInButton>
      </SignedOut>
    </>
  );
};
