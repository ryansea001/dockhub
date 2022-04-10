import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import {useAuthState} from "react-firebase-hooks/auth"
import { auth, logInWithEmailAndPassword } from "../src/firebase";

function login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
        if(loading) {
            return;
        }
        // if(user) {
        //     router.push('/dashboard');
        // }      
    }, [user, loading]);

  return (
    <div className="flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen pt:mt-0 dark:bg-gray-900">
    <a href="/" className="flex items-center justify-center mb-8 text-2xl font-semibold lg:mb-10 dark:text-white">
        <img src="/images/logo.svg" className="mr-4 h-11" alt="FlowBite Logo" />
        <div className='font-serif text-3xl'>
            <span>点</span>  
            <span>仓</span>
        </div>
    </a>
    {/* -- Card -- */}
    <div className="items-center justify-center w-full bg-white rounded-lg shadow lg:flex md:mt-0 lg:max-w-screen-lg 2xl:max:max-w-screen-lg xl:p-0 dark:bg-gray-800">
        <div className="hidden w-2/3 lg:flex">
            <img className="rounded-l-lg" src="/images/auth/login.jpg" alt="login image" />
        </div>
        <div className="w-full p-6 space-y-8 sm:p-8 lg:p-16 lg:py-0">
            <h2 className="text-2xl font-bold text-gray-900 lg:text-3xl dark:text-white">
                登陆点仓平台
            </h2>
            <form className="mt-8 space-y-6" action="#">
                <div>
                    <label for="email" className="block mb-2 text-md font-medium text-gray-700 dark:text-white">邮箱</label>
                    <input type="email" name="email" id="email" 
                    value={email} 
                    onChange={(e) => {setEmail(e.target.value)}}
                    placeholder="name@company.com" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    required />
                </div>
                <div>
                    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">密码</label>
                    <input type="password" name="password" id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder="••••••••" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    required />
                </div>
                <div className="flex items-start">
                    <div className="flex items-center h-5">
                        <input id="remember" aria-describedby="remember" name="remember" type="checkbox" className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" required />
                    </div>
                    <div className="ml-3 text-sm">
                    <label for="remember" className="font-medium text-gray-900 dark:text-white">记住我</label>
                    </div>
                    <a href="#" className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">找回密码</a>
                </div>
                <button type="submit" 
                onClick={() => logInWithEmailAndPassword(email, password)}
                className="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">登陆</button>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    还没注册？ <a className="text-blue-700 hover:underline dark:text-blue-500">创建新用户</a>
                </div>
            </form>
        </div>
    </div>
</div>
  )
}

export default login