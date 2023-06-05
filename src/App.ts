import './styles/main.scss';
import { getMenu, getCurrentPage } from './Router';

document.querySelector<HTMLDivElement>('#app')!.innerHTML =/* html */`
<header>
	<h1>Newspaper Site</h1>
	<nav>
		${getMenu()}
	</nav>
</header>
<main>
	${getCurrentPage()}
</main>
`;