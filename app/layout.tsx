import Navbar from '@/components/cus-ui/Navbar';
import './styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from '@/redux/provider';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Clean architecture with Next.js',
	description: 'Small project of clean architecture with Next.js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='fr'>
			<body className={`${inter.className} container`}>
				<Navbar />
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
