import { server } from '../config/index'
import ArticlesList from '../components/ArticlesList'

export default function Home({ articles }) {
	// console.log(articles)
	return (
		<>
			<ArticlesList articles={articles} />
		</>
	)
}

/* Back-up
export const getStaticProps = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
	const articles = await res.json()

	return {
		props: {
			articles,
		},
	}
}
*/

export const getStaticProps = async () => {
	const res = await fetch(`${server}/api/articles`)
	const articles = await res.json()

	return {
		props: {
			articles,
		},
	}
}
