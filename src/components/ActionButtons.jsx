"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

import { toggleInterestButton } from "src/actions";
import { useAuth } from "src/hooks/useAuth";

const ActionButtons = ({ eventId, interestedIds, fromDetails }) => {
  const { auth } = useAuth();
  const interest = interestedIds.find(id => id === auth?.id);
  const [isInterested, setIsInterested] = React.useState(interest);
  const [isPending, startTransition] = React.useTransition();
  const router = useRouter(); 

  const handleToggleInterest = async () => {
    if (auth) {
      toggleInterestButton(eventId, auth?.id);
      setIsInterested(!isInterested);
    } else {
      router.push("/login");
    }

  }

  const handleGoing = () => {
    if (auth) {
      router.push("/payment");
    } else {
      router.push("/login");
    }
  }
  return (
    <div className={`w-full flex gap-4 mt-4 ${fromDetails && "flex-1"}`}>
      <button
        onClick={() => {
          startTransition(() => {
            handleToggleInterest()
          })
        }}
        className={`w-full ${isInterested && " bg-indigo-600 hover:bg-indigo-800"}`}>
        {isPending ? "Wait..." : "Interested"}
      </button>
      <button
        onClick={handleGoing}
        href="/payment"
        className=" text-center w-full bg-[#464849] py-2 px-2 rounded-md border border-[#5F5F5F]/50 shadow-sm cursor-pointer hover:bg-[#3C3D3D] transition-colors active:translate-y-1"
      >
        Going
      </button>
    </div>
  );
};

export default ActionButtons;