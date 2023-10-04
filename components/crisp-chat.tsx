"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("bc724773-98e5-4bfb-be4e-42197a32f361");
  }, []);

  return null;
};
export default CrispChat;
