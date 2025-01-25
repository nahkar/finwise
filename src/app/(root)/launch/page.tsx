import Image from 'next/image';
import Logo from './img/logo.svg';
import Link from 'next/link';
import './style.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'FinWise',
	description: 'Financial Management App',
};

const Launch = () => {
	return (
		<div className="m-auto  flex h-screen w-60 items-center text-center">
			<div>
				<Image className="m-auto mb-3" src={Logo} alt="logo" />
				<h1 className="mb-1 text-5xl text-customGreen">FinWise</h1>
				<p className="mb-5 text-sm">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.{' '}
				</p>
				<div className="row">
					<Link className="button-link" href={'/signup'}>
						Sign Up
					</Link>
				</div>
				<div className="row">
					<Link className="button-link" href={'/signin'}>
						Sign In
					</Link>
				</div>
				<div>
					<Link className="hover:underline" href={'/forgot-password'}>
						Forgot Password?
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Launch;
