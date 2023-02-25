import React from 'react'

function Login() {
  return (
    <div className='Login'>
        <div className='flex flex-col justify-center h-screen '>
            <div className="loginbox bg-gray-200 rounded-lg flex flex-col w-3/4 m-auto p-14 gap-2">
                <h1 className="text-center mb-4 text-xl">Login</h1>
                <label htmlFor="username">Phone-Number:</label>
                <input className='m-auto' name="username" type="text" />

                <label htmlFor="password">Password:</label>
                <input className='m-auto' name="password" type="password"/>
            </div>
        </div>
    </div>
  )
}

export default Login