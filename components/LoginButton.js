"use client";

import { auth, provider } from "../lib/firebase";
import { signInWithPopup } from "firebase/auth";

export default function LoginButton() {

  const loginGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      alert("Xin chào: " + result.user.displayName);
    } catch (error) {
      console.log(error);
      alert("Đăng nhập lỗi");
    }
  };

  return (
    <button onClick={loginGoogle}>
      Đăng nhập Google
    </button>
  );
}
