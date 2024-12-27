// Turns this component into a client-side component
'use client';

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
// usePathname() is a webhook that records the URL the client is on
// This requires the compnent it is placed within to be a client-side component
import { usePathname } from 'next/navigation';
// Used to conditionally style elements
import clsx from 'clsx';
import { clearScreenDown } from 'readline';


// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {/* Maps through each link in the links object */}
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          // Next.js Link component
          // Allows for switching between pages without re-loading
          // When Link components appear, code for the page linked to is 
          // automatically pre-fetched in the background.
          <Link
            key={link.name}
            href={link.href}
            className= {clsx(
              "flex h-[48px] grow items-center justify-center gap-2","rounded-md bg-gray-50 p-3 text-sm font-medium",
              "hover:bg-sky-100 hover:text-blue-600 md:flex-none",
              "md:justify-start md:p-2 md:px-3",
              /* Adds a blue background and text for the link that is currently active */
              {'bg-sky-100 text-blue-600': pathname === link.href}
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
