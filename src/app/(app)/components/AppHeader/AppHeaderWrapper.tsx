'use client';
import { usePathname } from 'next/navigation';
import { AppHeader } from './AppHeader';

export const AppHeaderWrapper = () => {
	const pathname = usePathname();

	const getType = () => {
		switch (pathname) {
			case '/dashboard':
				return 'dashboard';
			case '/categories':
				return 'categories';
			case '/profile':
				return 'profile';
			case '/transactions':
				return 'transactions';
			case '/analysis':
				return 'analysis';
			default:
				return null;
		}
	};

	return <AppHeader type={getType()} />;
};
