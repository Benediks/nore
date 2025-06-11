import Image from 'next/image';
import Link from 'next/link';
import LoginForm from '@/app/ui/login-form';
import { Suspense } from 'react';
 
export default function LoginPage() {
  return (
    <main className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <Image src="/images/logo0.png" alt="Ce4L Logo" width={80} height={30} />
          </Link>
        </div>
        
        <Suspense>
          <LoginForm />
        </Suspense>
        
        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-300"></div>
          <div className="px-4 text-gray-500">OR</div>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>
        
        <Link href="/authentication/register" className="block w-full text-center bg-gray-200 text-gray-600 py-3 rounded hover:bg-gray-300 transition duration-300">
          Register
        </Link>
        
        <div className="text-center mt-12">
          <p className="text-sm text-gray-500">CE4L © 2025</p>
        </div>
      </div>
    </main>
  );
}