import {
	createContext,
	FC,
	ReactNode,
	useEffect,
	useMemo,
	useState,
} from 'react'
import { LOCAL_STORAGE_THEME_KEY } from '../../const/localstorage'

export const enum Theme {
	LIGHT = 'app_light_theme',
	DARK = 'app_dark_theme',
}

interface ThemeContextProps {
	theme: Theme
	setTheme: (theme: Theme) => void
}

interface ThemeProviderProps {
	children: ReactNode
	initialTheme?: Theme
}

export const ThemeContext = createContext<ThemeContextProps>(
	{} as ThemeContextProps,
)
const defaultTheme =
	(localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT

const ThemeProvider: FC<ThemeProviderProps> = (props) => {
	const { children, initialTheme } = props

	const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme)

	useEffect(() => {
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme)
		document.body.className = theme
	}, [theme])

	const defaultProps = useMemo(
		() => ({
			theme,
			setTheme,
		}),
		[theme],
	)

	return (
		<ThemeContext.Provider value={defaultProps}>
			{children}
		</ThemeContext.Provider>
	)
}

export default ThemeProvider
