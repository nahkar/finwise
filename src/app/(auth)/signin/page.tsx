import Link from 'next/link';
import { SignInForm } from '../components/AuthForm/SignInForm';
import { SocialSignup } from '../components/SocialSignup';

const SignInPage = () => {
	return (
		<div>
			<SignInForm />
			<div className="mt-5 text-center">
				<Link className="text-blue-500 hover:underline" href={'/forgot-password'}>
					Forgot Password?
				</Link>
				<SocialSignup />
			</div>
		</div>
	);
};

export default SignInPage;

export const metadata = {
	title: 'Sign In',
};
