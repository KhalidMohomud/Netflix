import { signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../lib/Firebase';


const Login = () => {
    
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const Navigate =  useNavigate();
    const onSubmit = async (data) => {

         try{
            const {email , password} =  data;
            const SigninUser =  await signInWithEmailAndPassword(
                auth , email , password );
           console.log(SigninUser);  
             alert("sucessfully for Login");
             Navigate('/Browse');

         } catch(error){
            console.log(error);
            alert("error",error);
         }

    };
    return (
    <div className="relative flex h-screen w-screen flex-col md:items-center md:justify-center">
            <img src="./images/misc/home.jpeg" alt="" className="absolute h-screen w-full object-cover -z-10 !hidden opacity-60 sm:!inline" />

            <img src="./images/logo/mainlogo.svg" alt=""
                className="absolute top-0 left-2 w-[100px] md:w-[150px] object-contain"
            />

            <form
            onSubmit={handleSubmit(onSubmit)} className="relative mt-24 space-y-8 rounded bg-black/70 py-10 px-6 md:mt-0 md:max-w-md md:px-14" >
                <h1 className="text-white text-4xl font-semibold my-6">Sign In</h1>
                <label className="inline-block w-full">
                    <input
                    {...register("email", {required : true})} type="email" placeholder="email" className="form-control"  />
                    {errors.email && <p className="pt-2 text-sm text-orange-500">Please enter valid email</p>}
                </label>
                <label className="inline-block w-full">
                    <input
                    {...register("password" , {required : true})} type="password" placeholder="password" className="form-control"  />
                    
                    {errors.password  && <p className="pt-2 text-sm text-orange-500">Please enter valid password</p>}
                </label>
                <button className="btn">Sign in</button>
                <div className="flex flex-row space-x-2 my-4">
                    <p className="text-[#8d8d8d] text-lg">New to netflix ?</p> <Link className="hover:underline" to="/Signuppage" >Sign up now</Link>
                </div>

            </form>

        </div>
  )
}

export default Login