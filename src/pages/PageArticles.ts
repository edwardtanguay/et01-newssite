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
			<div class="article">
				<div class="supertitle">${article.whenPublished}</div>
				<div class="title">${article.title}</div>
				<div class="body">${article.body}</div>
			</div>
			`;
		}).join('')}
	</div>
	<div class="newsletterSignupBox">
		<form>
			<p>Please sign up for our newsletter, enter email here:</p>
			<input/> <button>Sign Up</button>
		</form>
	</div>
`; 
}