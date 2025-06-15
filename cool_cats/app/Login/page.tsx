
'use client'
import React, { useState } from "react";
import Logo from "@/components/Shared/Logo";
import Link from "next/link";
import Input from "@/components/Shared/Input";
import {useForm} from 'react-hook-form'
import { useDispatch } from "react-redux";
import authService from "@/lib/appwrite/auth";
import { login as authLogin} from "@/store/userSlice";

export default function Login() {
    const [error , setError] = useState("");
    const {register, handleSubmit} = useForm();
    const dispatch = useDispatch();

    const login = async(data: any) => {
        try{
            const session = await authService.login(data)
            if(session){
                const userData = await authService.getCurrentUser()
                if(userData){
                    console.log("User Data:", userData)
                    console.log("user is logged in successfully")
                    dispatch(authLogin(data))
                }
            }

        }catch(error: any){
            console.log(error)
            setError(error.message)
        }
    }
    return (
        <div className="flex items-center justify-center w-full">
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold">
                    Sign In to your account
                </h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link href="/signup" className="font-medium text-primary duration-300 hover:underline transition-all text-blue-700 hover:text-gray-500 ml-1 ">
                        Sign Up
                    </Link>
                </p>
                {error && <p className="text-sm text-red-600 mt-8 text-center">{error}</p>}
                <form onSubmit={handleSubmit(login)} className="mt-4">
                    <div className="space-y-5">
                        <div className="relative mb-4">
                            <span className="absolute mt-7 inset-y-0 left-0 pl-3 flex items-center text-gray-500">📧</span>
                            <Input
                                className="pl-10"
                                label="Email"
                                placeholder="Email_"
                                type="email"
                                {...register("email", {
                                    required: true,
                                })}
                            />
                        </div>
                        <div className="relative mb-4">
                            <span className="absolute mt-7 inset-y-0 left-0 pl-3 flex items-center text-gray500">🔒</span>
                            <Input
                                className="pl-10"
                                label="Password"
                                placeholder="**********"
                                type="password"
                                {...register("password", {
                                    required: true,
                                })}
                            />
                        </div>
                        <button type="submit" className="text-white bg-black/80 font-semibold rounded-xl cursor-pointer w-full py-3 mt-4 hover:bg-black transitionr">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}