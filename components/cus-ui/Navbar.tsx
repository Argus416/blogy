'use client';

import * as React from 'react';

import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
	const links = [
		{
			title: 'Home',
			href: '/',
		},
		{
			title: 'New',
			href: '/post/new',
		},
	];
	return (
		<div className='flex justify-between items-center mb-4 pt-1'>
			<Link href='/'>
				<Image
					src={'/next.svg'}
					alt='logo'
					width={80}
					height={80}
				/>
			</Link>
			<NavigationMenu>
				<NavigationMenuList>
					{links.map((link) => (
						<NavigationMenuItem key={link.href}>
							<NavigationMenuLink
								href={link.href}
								className={navigationMenuTriggerStyle()}
							>
								{link.title}
							</NavigationMenuLink>
						</NavigationMenuItem>
					))}
				</NavigationMenuList>
			</NavigationMenu>
		</div>
	);
}

const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(
	({ className, title, children, ...props }, ref) => {
		return (
			<li>
				<NavigationMenuLink asChild>
					<a
						ref={ref}
						className={cn(
							'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
							className
						)}
						{...props}
					>
						<div className='text-sm font-medium leading-none'>{title}</div>
						<p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
							{children}
						</p>
					</a>
				</NavigationMenuLink>
			</li>
		);
	}
);
ListItem.displayName = 'ListItem';
