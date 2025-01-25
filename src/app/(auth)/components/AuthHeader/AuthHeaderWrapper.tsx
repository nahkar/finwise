'use client';
import { usePathname } from 'next/navigation';
import { AuthHeader } from './AuthHeader';

export const AuthHeaderWrapper = () => {
	const pathname = usePathname();

	const getTitle = () => {
		switch (pathname) {
			case '/signin':
				return 'Welcome';
			case '/signup':
				return 'Create Account';
			case '/forgot-password':
				return 'Forgot Password';
			default:
				return '';
		}
	};

	return <AuthHeader title={getTitle()} />;
};
