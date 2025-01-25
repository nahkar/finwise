type Props = {
	title: string;
};
export const AuthHeader = ({ title }: Props) => {
	return (
		<div className="flex min-h-40 items-center justify-center bg-customGreen pb-10 text-center">
			<div>
				<h1 className="text-3xl">{title}</h1>
			</div>
		</div>
	);
};
