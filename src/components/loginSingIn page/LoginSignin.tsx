"use client"; // Required for client-side components in Next.js
import React, { useRef, useState } from "react";
import { checkValidData } from "@/utils/validate";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "@/utils/firebaseConfig";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { addUser } from "@/store/userSlice";
import { userAvatar } from "@/utils/constnat";
const LoginSignin: React.FC = () => {
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>("");
  // const router = useRouter();
  const emailRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Logging in with", {
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
    });

    const validResult = checkValidData(
      emailRef.current?.value || "",
      passwordRef.current?.value || ""
    );
    // setErrorMessage(validResult);
    // console.log(validResult, "validResult");

    if (validResult !== null) return;

    if (!isSignInForm) {
      console.log("start signUp");
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          emailRef.current?.value || "",
          passwordRef.current?.value || ""
        );
        const user = userCredential.user;
        console.log(user, "user Signed up");

        await updateProfile(auth.currentUser!, {
          displayName: nameRef.current?.value || "",
          photoURL: userAvatar,
        });

        const { uid, email, displayName, photoURL } = auth.currentUser!;
        dispatch(
          addUser({
            uid,
            email,
            displayName,
            photoURL,
          })
        );
        // router.push("/browse");
      } catch (error: any) {
        setErrorMessage(`${error.message}: ${error.code}`);
      }
    } else {
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          emailRef.current?.value || "",
          passwordRef.current?.value || ""
        );
        const user: any = userCredential.user;
        // dispatch(
        //   addUser({
        //     uid: user.uid,
        //     email: user.reloadUserInfo.email,
        //     displayName: user.reloadUserInfo.displayName,
        //     photoURL: user.reloadUserInfo.photoUrl,
        //   })
        // );
        console.log(user, "user Signed in");
        // router.push("/browse");
      } catch (error: any) {
        setErrorMessage(`${error.message}: ${error.code}`);
      }
    }
  };

  const toggleSignupHandler = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="absolute bg-black bg-opacity-70 text-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-3xl font-bold mb-6">
        Sign {isSignInForm ? "In" : "Up"}
      </h2>
      <form onSubmit={handleLogin}>
        {!isSignInForm && (
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              ref={nameRef}
              type="text"
              id="name"
              className="w-full p-3 border border-gray-700 rounded-lg bg-gray-800 text-white focus:outline-none focus:border-gray-600"
              placeholder="User Name"
            />
          </div>
        )}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email or mobile number
          </label>
          <input
            ref={emailRef}
            type="email"
            id="email"
            className="w-full p-3 border border-gray-700 rounded-lg bg-gray-800 text-white focus:outline-none focus:border-gray-600"
            placeholder="Email or mobile number"
            autoComplete="username"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium mb-2">
            Password
          </label>
          <input
            ref={passwordRef}
            type="password"
            id="password"
            className="w-full p-3 border border-gray-700 rounded-lg bg-gray-800 text-white focus:outline-none focus:border-gray-600"
            placeholder="Password1234@#$"
            autoComplete="current-password"
          />
        </div>
        <h2 className="text-red-600 font-semibold text-xl pb-2">
          {errorMessage}
        </h2>
        <div className="mb-4 flex items-center">
          <input type="checkbox" id="rememberMe" className="mr-2" />
          <label htmlFor="rememberMe" className="text-sm">
            Remember me
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg"
        >
          Sign {isSignInForm ? "In" : "Up"}
        </button>
      </form>
      <div className="flex justify-between items-center mt-6 text-sm">
        <p className="cursor-pointer text-blue-500">Forgot password?</p>
        <p
          className="cursor-pointer text-blue-500"
          onClick={toggleSignupHandler}
        >
          {isSignInForm ? "Sign up now." : "Sign In now"}
        </p>
      </div>
      <div className="mt-6 text-center text-xs text-gray-500">
        This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
        <p className="cursor-pointer text-blue-500">Learn more</p>.
      </div>
    </div>
  );
};

export default LoginSignin;
