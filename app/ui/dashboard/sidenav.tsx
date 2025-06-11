import Link from 'next/link';
import Image from 'next/image';
import NavLinks from '@/app/ui/dashboard/nav-links';
import { PowerIcon } from '@heroicons/react/24/outline';
import { signOut } from '@/auth';

export default function SideNav() {
  return (
    <div className="w-64 bg-gray-700 text-white min-h-screen flex flex-col">
      {/* Logo Section */}
      <Link href="/">
        <div className="p-4 flex items-center">
          <Image 
            src="/images/navlogo.png" 
            alt="Logo" 
            width={80} 
            height={30} 
          />
          <span className="ml-2 text-xl font-semibold">Admin</span>
        </div>
      </Link>
      
      {/* Navigation Links */}
      <nav className="mt-6 flex-grow">
        <NavLinks />
      </nav>

      {/* Sign Out Button */}
      <div className="p-4">
        <form
        action={async () => {
            'use server';
            await signOut({ redirectTo: '/' });
          }}
        >
          <button className="flex w-full items-center justify-start gap-3 py-4 px-6 text-sm font-medium hover:bg-gray-600 rounded transition-colors">
            <PowerIcon className="w-5 h-5" />
            <span>Sign Out</span>
          </button>
        </form>
      </div>
    </div>
  );
}