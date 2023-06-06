import { Article } from '../components/Article';
import { NewsletterSignupBox } from '../components/NewsletterSignupBox';
import articles from '../data/articles.json';

// articles.sort((a, b) => 1);
// articles.sort((a, b) => a.whenPublished < b.whenPublished);
articles.sort((a, b) => (a.whenPublished < b.whenPublished ? -1 : 1));

export const PageArticles = () => {
	return /*html*/`
	<div class="page pageArticles">
		<p>These are the ${articles.length} articles.</p>
		${articles.map(article => {
			return `
			${Article(article)}
			`;
		}).join('')}
	</div>
	${NewsletterSignupBox()}
`; 
}