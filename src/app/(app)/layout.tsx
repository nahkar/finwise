import { ReactNode } from 'react';
import { AppHeader } from './components/AppHeader';

const AppLayout = async ({ children }: { children: ReactNode }) => {
	return (
		<div className="h-screen">
			<AppHeader />
			<div className="relative top-[200px] h-[calc(100vh-200px)] rounded-[45px] bg-white px-9 pt-10">
				{children}
			</div>
		</div>
	);
};

export default AppLayout;
