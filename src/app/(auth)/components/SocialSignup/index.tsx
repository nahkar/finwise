import Link from 'next/link';
import Image from 'next/image';

export const SocialSignup = () => {
	return (
		<div className="mt-5">
			<p className="text-center">or sign up with</p>
			<div className="mx-auto mt-5 flex w-28">
				<Image className="mx-auto" src={'/fb.svg'} alt="logo" width={32} height={32} />
				<Image className="mx-auto" src={'/google.svg'} alt="logo" width={32} height={32} />
			</div>
			<div className="mt-5 text-center">
				<span>Don’t have an account?</span>{' '}
				<Link className="text-blue-500 hover:underline" href={'/signup'}>
					Sign Up
				</Link>
			</div>
		</div>
	);
};
