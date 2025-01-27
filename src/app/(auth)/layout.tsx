import { ReactNode } from 'react';
import { AuthHeader } from './components/AuthHeader';

const AuthLayout = async ({ children }: { children: ReactNode }) => {
	return (
		<div className="h-screen">
			<AuthHeader />
			<div className="relative top-[120px] h-[calc(100vh-120px)] rounded-[45px] bg-white px-9 pt-10">
				{children}
			</div>
		</div>
	);
};

export default AuthLayout;
