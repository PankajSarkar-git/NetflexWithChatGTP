"use client";

import LoginSignin from "@/components/loginSingIn page/LoginSignin";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full bg-gradient-to-br from-black">
      <Navbar />
      <div className="flex justify-center items-center">
        <div className="relative w-full h-[110vh]">
          <Image
            src="https://assets.nflxext.com/ffe/siteui/vlv3/21a8ba09-4a61-44f8-8e2e-70e949c00c6f/6678e2ea-85e8-4db2-b440-c36547313109/IN-en-20240722-POP_SIGNUP_TWO_WEEKS-perspective_WEB_3457a8b1-284d-4bb5-979e-2a2e9bb342b3_large.jpg"
            alt="Background image"
            fill
            className="object-cover"
            priority
          />
        </div>
        <LoginSignin />
      </div>
    </div>
  );
}
