'use client';
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
  // { name: 'Customers', 
  //   href: '/dashboard/customers', 
  //   icon: UserGroupIcon 
  // },
  { name: 'Products', 
    href: '/dashboard/products', 
    icon: DocumentDuplicateIcon 
  },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        const isActive = pathname === link.href;
        
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`block py-4 px-6 hover:bg-gray-600 transition-colors ${
              isActive ? 'bg-gray-800 border-l-4 border-blue-500' : ''
            }`}
          >
            <div className="flex items-center gap-3">
              <LinkIcon className="w-5 h-5" />
              <span className="text-sm font-medium">{link.name}</span>
            </div>
          </Link>
        );
      })}
    </>
  );
}