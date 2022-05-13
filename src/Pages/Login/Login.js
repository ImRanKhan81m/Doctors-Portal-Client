import React from 'react';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";


    if (loading || gLoading) {
        return <Loading />
    }
    
    let signInError;
    if (error || gError) {
        signInError = <p className='text-red-500 py-3'>{error?.message || gError?.message}</p>
    }

    if (user || gUser) {
        // console.log(user || gUser);
        navigate(from, { replace: true });
    }

    const onSubmit = data => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password)
    }



    return (
        <div className='mid-content flex justify-center items-center lg:px-8 md:px-8 sm:px-7 px-4 lg:pt-24 md:pt-20 sm:pt-16 pt-10'>
            <div className="border card lg:w-3/6 md:w-4/6 sm:w-full w-full bg-base-100 shadow-xl">
                <div className="card-body text-center">
                    <h2 className="text-center text-2xl font-bold">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered focus:outline-none"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered focus:outline-none"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>
                        {signInError}
                        <input className='btn w-full text-white ' type="submit" value="LOGIN" />
                    </form>
                    <p className='py-3 '>New to Doctors Portal? <Link to="/signup" ><span className=' text-secondary link'>Create New Account</span></Link></p>
                    <div className='divider '>OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className='btn btn-outline'>CONTINUE WITH GOOGLE</button>
                </div>
            </div>
        </div>
    );
};

export default Login; 