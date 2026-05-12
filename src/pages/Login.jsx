import { useState } from 'react'

import Navbar from '../components/Navbar'

const Login = () => {

  const [isLogin, setIsLogin] =
    useState(true)

  return (

    <div className="min-h-screen bg-gray-100 dark:bg-black transition">

      <Navbar />

      <div className="flex items-center justify-center px-4 py-16">

        <div className="bg-white dark:bg-zinc-900 w-full max-w-md rounded-3xl shadow-2xl p-8">

          <h1 className="text-4xl font-bold text-center mb-8 text-black dark:text-white">

            {isLogin
              ? 'Welcome Back'
              : 'Create Account'}

          </h1>

          <form className="space-y-5">

            {!isLogin && (

              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white rounded-xl px-5 py-3 outline-none focus:border-black"
              />

            )}

            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white rounded-xl px-5 py-3 outline-none focus:border-black"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white rounded-xl px-5 py-3 outline-none focus:border-black"
            />

            <button className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition">

              {isLogin
                ? 'Login'
                : 'Register'}

            </button>

          </form>

          <div className="text-center mt-6">

            <button

              onClick={() =>
                setIsLogin(!isLogin)
              }

              className="text-blue-600 hover:underline"
            >

              {isLogin
                ? 'Create new account'
                : 'Already have account? Login'}

            </button>

          </div>

        </div>

      </div>

    </div>

  )
}

export default Login