import headerStyles from '../styles/Header.module.css'

const Header = () => {
	return (
		<>
			<h1 className={headerStyles.title}>
				Dot<span>Zar</span>
			</h1>
			<p>Keep up to date with latest web dev news</p>
		</>
	)
}

export default Header
