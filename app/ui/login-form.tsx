'use client';

import { fredoka } from '@/app/ui/fonts';
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
  EyeIcon,
  EyeSlashIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from './button';
import { useActionState } from 'react';
import { authenticate } from '@/app/lib/actions';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/dashboard';
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  );

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="w-full max-w-md">
      <div className="text-center mb-8">
        <h2 className={`${fredoka.className} text-4xl font-bold mt-6 mb-8 text-left`}>
          Sign In
        </h2>
      </div>
      
      <form action={formAction}>
        {errorMessage && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
            {errorMessage}
          </div>
        )}
        
        <div className="mb-6">
          <label htmlFor="email" className="block text-lg text-gray-700 mb-2">
            Email
          </label>
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-3 bg-gray-200 border-none rounded pl-12"
              placeholder="Enter your email address"
              required
            />
            <AtSymbolIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
          </div>
        </div>
        
        <div className="mb-4">
          <label htmlFor="password" className="block text-lg text-gray-700 mb-2">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className="w-full px-4 py-3 bg-gray-200 border-none rounded pl-12 pr-12"
              placeholder="Enter password"
              required
              minLength={6}
            />
            <KeyIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
            <button 
              type="button" 
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? (
                <EyeSlashIcon className="h-5 w-5" />
              ) : (
                <EyeIcon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
        
        <input type="hidden" name="redirectTo" value={callbackUrl} />
        
        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition duration-300 mt-6 mb-6 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isPending}
        >
          {isPending ? 'Signing in...' : 'Start'}
          <ArrowRightIcon className="inline ml-2 h-5 w-5" />
        </button>
        
        {errorMessage && (
          <div className="flex items-center justify-center space-x-1 text-red-500 text-sm">
            <ExclamationCircleIcon className="h-5 w-5" />
            <p>{errorMessage}</p>
          </div>
        )}
      </form>
    </div>
  );
}