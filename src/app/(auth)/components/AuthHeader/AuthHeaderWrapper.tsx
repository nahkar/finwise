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
			case '/terms-of-use':
				return 'Terms Of Use';
			case '/privacy-policy':
				return 'Privacy Policy';
			case '/forgot-password-confirm':
				return 'Security pin';
			case '/new-password':
				return 'New password';
			default:
				return '';
		}
	};

	return <AuthHeader title={getTitle()} />;
};
