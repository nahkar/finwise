import Link from 'next/link';
import { SignInForm } from '../components/AuthForm/SignInForm';
import Image from 'next/image';

const SignInPage = () => {
	return (
		<div>
			<SignInForm />
			<div className="mt-5 text-center">
				<Link className="hover:underline" href={'/forgot-password'}>
					Forgot Password?
				</Link>
				<div className="mt-5 border-t"></div>
				<p className="mt-5">Don&apos;t have an account?</p>
				<Link className="button-link mx-auto mt-5 h-10 w-full bg-customGreen" href={'/signup'}>
					Sign Up
				</Link>
				<p className="mt-5">or sign up with</p>

				<div className="mx-auto mt-5 flex w-28">
					<Image className="mx-auto" src={'/fb.svg'} alt="logo" width={32} height={32} />
					<Image className="mx-auto" src={'/google.svg'} alt="logo" width={32} height={32} />
				</div>
			</div>
		</div>
	);
};

export default SignInPage;

export const metadata = {
	title: 'Sign In',
};
