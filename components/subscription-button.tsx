"use client";

import axios from "axios";
import { useState } from "react";
import Button from "./button";
import { BsLightningChargeFill } from "react-icons/bs";
import toast from "react-hot-toast";

const SubscriptionButton = ({ isPro }: { isPro: boolean }) => {
  const [loading, setLoading] = useState(false);

  const onClick = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/stripe");

      window.location.href = response.data.url;
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      color="bg-gradient-to-r from-violet-700 to-red-500 text-white"
      onClick={onClick}
    >
      {isPro ? "Manage Subscription" : "Upgrade to Premium"}
      {!isPro && <BsLightningChargeFill className="ml-2" />}
    </Button>
  );
};
export default SubscriptionButton;
