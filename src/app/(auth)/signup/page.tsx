import Link from 'next/link';
import { SignUpForm } from '../components/AuthForm/SignUpForm';

const SignUpPage = () => {
	return (
		<div>
			<SignUpForm />
			<p className="mt-5 text-center">
				Already have an account?{' '}
				<Link className="font-semibold hover:underline" href={'/signin'}>
					Log In
				</Link>
			</p>
		</div>
	);
};

export default SignUpPage;

export const metadata = {
	title: 'Create Account',
};
