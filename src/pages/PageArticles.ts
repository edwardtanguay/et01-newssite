
const articles = [
	{
		title: "New Street in Berlin",
		body: "There is a new street in Berlin."
	},
	{
		title: "New Street in Hamburg",
		body: "There is a new street in Hamburg."
	},
	{
		title: "New Street in Paris",
		body: "There is a new street in Paris."
	},
	{
		title: "New Street in Madrid",
		body: "There is a new street in Madrid."
	}
]

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