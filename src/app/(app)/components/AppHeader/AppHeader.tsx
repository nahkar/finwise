import { AnalysisHeader } from './AnalysisHeader';
import { CategoriesHeader } from './CategoriesHeader';
import { DashboardHeader } from './DashboardHeader';
import { ProfileHeader } from './ProfileHeader';
import { TransactionsHeader } from './TransactionsHeader';
import { Type } from './types';

type Props = {
	type: Type;
};
export const AppHeader = ({ type }: Props) => {
	const header = {
		dashboard: <DashboardHeader />,
		categories: <CategoriesHeader />,
		profile: <ProfileHeader />,
		transactions: <TransactionsHeader />,
		analysis: <AnalysisHeader />,
	};

	if (!type) return null;
	return (
		<div className="fixed top-0 flex min-h-60 w-full items-center justify-center bg-customGreen pb-10 text-center">
			{header[type]}
		</div>
	);
};
