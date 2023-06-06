import { NewsletterSignupBox } from "../components/NewsletterSignupBox";
import { CompanyLogo } from '../components/CompanyLogo';

export const PageWelcome = () => {
	return /*html*/`
	<div class="page pageWelcome">
		<p>Welcome to this site.</p>
		${CompanyLogo()}
		${NewsletterSignupBox()}
</div>
`;
}