import { RouteProps } from 'react-router-dom'
import { AboutPage } from '@/pages/AboutPage'
import { MainPage } from '@/pages/MainPage'
import { AppRoutes, RoutePath } from '@/shared/router/AppRoutes'

export const routeConfig: Record<AppRoutes, RouteProps> = {
	[AppRoutes.MAIN]: {
		path: RoutePath.main,
		element: <MainPage />,
	},
	[AppRoutes.ABOUT]: {
		path: RoutePath.about,
		element: <AboutPage />,
	},
}
