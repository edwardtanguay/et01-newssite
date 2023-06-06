import { NewsletterSignupBox } from "../components/NewsletterSignupBox";

export const PageWelcome = () => {
	return /*html*/`
	<div class="page pageWelcome">
		<p>Welcome to this site.</p>
		${NewsletterSignupBox()}
</div>
`;
}