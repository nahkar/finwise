import { League_Spartan as LeagueSpartan } from 'next/font/google';

import './globals.css';
import { ReactNode } from 'react';

const leagueSpartan = LeagueSpartan({
	variable: '--font-league-spartan',
	subsets: ['latin'],
});

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body className={`${leagueSpartan.className}  antialiased`}>{children}</body>
		</html>
	);
}
