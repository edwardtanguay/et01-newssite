
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
	}
]

export const PageArticles = () => {
	return /*html*/`
	<p>These are the ${articles.length} articles.</p>
`; 
}