'use client';
import clsx from 'clsx';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {ComponentProps} from 'react';

export default function NavLink({href, className, ...rest}: ComponentProps<typeof Link>) {
  const pathname = usePathname();
  const isActive = pathname === href;
  

  return (
    <Link
      aria-current={isActive ? 'page' : undefined}
      className={clsx(
        ` ${className}`,
        isActive
          ? 'text-[#FFFFFF] px-2 bg-linear-to-r from-[#5272FF] to-[#0D224A] '
          : `text-[#8CA3CD]`
      )}
      href={href}
      {...rest}
    />
  );
}