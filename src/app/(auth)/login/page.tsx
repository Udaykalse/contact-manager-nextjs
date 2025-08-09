//This is a server component by default
import LoginForm from '@/app/_components/LoginForm';
import Link from 'next/link';
import React from 'react';

const logInPage = () => {
    return (
        <div className='max-w-max-w-md mx-auto mt-10 p-8 bg-white shadow-md rounded-lg'>
            <h1 className='text-2xl font-bold mb-6 text-center'>Login</h1>
            <LoginForm/>
            <p className='mt-4 text-gray-600 text-center'>Dont have an account? 
                <Link href='/register' className='text-blue-600 hover:underline'>Register here</Link>
            </p>
        </div>
    );
};

export default logInPage; 