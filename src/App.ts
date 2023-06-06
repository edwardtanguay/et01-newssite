import './styles/main.scss';
import { getMenu, getCurrentPage } from './Router';
import { NewsletterSignupBox } from './components/NewsletterSignupBox';

document.querySelector<HTMLDivElement>('#app')!.innerHTML =/* html */`
<header>
	<h1>Newspaper Site</h1>
	${getMenu()}
</header>
<main>
	${getCurrentPage()}
</main>
`;