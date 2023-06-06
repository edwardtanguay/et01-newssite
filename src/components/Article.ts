import { IArticle } from '../interfaces';

export const Article = (article: IArticle) => {

	return /*html*/`
<div class="article">
	<div class="supertitle">${article.whenPublished}</div>
	<div class="title">${article.title}</div>
	<div class="body">${article.body}</div>
</div>
`;
};