
'use client'
import React, { useState } from "react";
import Logo from "@/components/Shared/Logo";
import Input from "@/components/Shared/Input";
import {useForm} from "react-hook-form"
import Link from "next/link";
import {useDispatch} from "react-redux"
import authService from "@/lib/appwrite/auth";
import { login } from "@/store/userSlice";



interface SignUpFromData{
    name: string;
    email: string;
    password: string;
    username: string;
    repeatPassword: string
    terms: string;
}
function SignUp() {
    const {register, watch, handleSubmit , formState: {errors}} = useForm<SignUpFromData>()
    //const router = useRouter();
    const dispatch = useDispatch();
    const [error, setError] = useState("");
    const password = watch("password", "");


    const create = async(data: SignUpFromData) => {
        setError("")
        try{
            const cleanData = {
                ...data,
                password: data.password.trim(),
                repeatPassword: data.repeatPassword.trim(),
            }
            const userData = await authService.createAccount(cleanData)
            if(userData){
                const userData = await authService.getCurrentUser()
                if(userData){
                    dispatch(login(userData))
                    
                }
            }
        }catch(error: any){
            setError(error.message)
        }
    }
    return (
        <div className="flex items-center justify-center">
            <div className={"mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10"}>
                <div className="flex justify-center mb-2">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight">
                    Sign up to create account
                </h2>
                <form onSubmit={handleSubmit(create)} className="mt-4">
                    <div className="space-y-5">
                        <Input 
                            label="Full Name"
                            placeholder="Name_"
                            {...register("name", {
                                required: true,
                            })}
                        />
                        <Input 
                            label="Email"
                            placeholder="Email address_"
                            {...register("email", {
                                required: true,
                                validate: {
                                    matchPattern: (value) => 
                                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value) || "Invalid email format"
                                }
                            })}

                        />
                        <Input
                            label="Username"
                            placeholder="Username_"
                            {...register("username", {
                                required: true,
                            })}
                        />
                        <Input 
                            label="Password"
                            placeholder="***********"
                            {...register("password", {
                                required: true,
                            })}
                        />
                        <Input
                            label="Repeat Password"
                            placeholder="**********"
                            {...register("repeatPassword", {
                                required: "Please repeat your password ",
                                validate: value => value === password || "Passwords do not match"
                            })}
                        />
                        <div>
                            <input
                                type="checkbox"
                                {...register("terms", {
                                    required: "You must accept the terms",
                                    validate: value => value || "YOu must accept the terms"
                                    
                                })}
                                className="form-checkbox text-blue-600"
                            />
                            <span className="text-sm text-gray-600 ml-2">I agree to the Terms and Conditions</span>
                        </div>
                        <div className="flex justify-between">
                            <button type="submit" className="text-gray-200 font-semibold text-medium py-2 px-13 cursor-pointer rounded-full bg-purple-600 transition duration-300 hover:bg-purple-400">SignUp</button>
                            <Link href="/login" className="text-black py-2 px-12 hover:bg-gray-500 hover:text-white font-semibold transition duration-300 bg-gray-200 cursor-pointer rounded-full">
                                SignIn
                            </Link>
                        </div>
                        {error && <p className="text-red-500 text-sm duration-500">{error}</p>}
                        {errors.repeatPassword && (<span className="text-red-500 text-sm duration-500">{errors.repeatPassword.message}</span>)}
                        {errors.terms && (<span className="text-red-500 text-sm duration-500">{errors.terms.message}</span>)}
                        {errors.email && (<span className="text-red-500 text-sm duration-500" >{errors.email.message}</span>)}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp;