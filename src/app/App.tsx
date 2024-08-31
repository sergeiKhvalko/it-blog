import { useTheme } from '@/shared/contexts'
import { Link } from 'react-router-dom'
import { AppRouter } from './providers/router'
import './styles/index.scss'

const App = () => {
	const { theme, toggleTheme } = useTheme()
	return (
		<div className="app">
			<button onClick={toggleTheme}>toggleTheme</button>
			<h1>{theme}</h1>
			<Link to={'/'}>Home</Link>
			<Link to={'/about'}>About</Link>
			<AppRouter />
		</div>
	)
}

export default App
