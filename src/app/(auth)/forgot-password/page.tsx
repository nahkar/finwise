import { ForgotPasswordForm } from '../components/AuthForm/ForgotPasswordForm';
import { SocialSignup } from '../components/SocialSignup';

const ForgotPasswordPage = () => {
	return (
		<div>
			<p className="text-2xl font-bold">Reset Password?</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit , sed do eiusmod tempor</p>
			<div className="mt-5">
				<ForgotPasswordForm />
				<SocialSignup />
			</div>
		</div>
	);
};

export default ForgotPasswordPage;
