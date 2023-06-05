import articles from '../data/articles.json';

export const PageArticles = () => {
	return /*html*/`
	<div class="page pageArticles">
		<p>These are the ${articles.length} articles.</p>
		${articles.map(article => {
			return `
			<div class="article">
				<div class="title">${article.title}</div>
				<div class="body">${article.body}</div>
			</div>
			`;
		}).join('')}
	</div>
`; 
}