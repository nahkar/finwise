type Props = {
	title: string;
};
export const AuthHeader = ({ title }: Props) => {
	return (
		<div className="fixed top-0 flex min-h-40 w-full items-center justify-center bg-customGreen pb-10 text-center">
			<div>
				<h1 className="text-3xl">{title}</h1>
			</div>
		</div>
	);
};
