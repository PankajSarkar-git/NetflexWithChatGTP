"use client";

import { addUser, removeUser } from "@/store/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "./firebaseConfig";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

const Custom = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false); // New client-side check

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return; // Ensure router only loads after mounting

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid,
            email,
            displayName,
            photoURL,
          })
        );
        router.push("/browse");
      } else {
        dispatch(removeUser());
        router.push("/");
      }
    });

    return () => unsubscribe();
  }, [isMounted, dispatch, router]);

  return <div>{children}</div>;
};

export default Custom;
