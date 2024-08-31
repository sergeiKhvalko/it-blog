import { RuleSetRule } from 'webpack'
import { BuildOptions } from './types/config'
import { buildCssLoader } from './loaders/buildCssLoader'

export const buildLoaders = ({ isDev }: BuildOptions): RuleSetRule[] => {
	const babelLoader = {
		test: /\.(ts|jsx|tsx)$/,
		exclude: /node_modules/,
		use: {
			loader: 'babel-loader',
			options: {
				presets: [['@babel/preset-env', { targets: 'defaults' }]],
				plugins: [
					[
						'i18next-extract',
						{
							locales: ['en', 'ru'],
							keyAsDefaultValue: ['en'],
						},
					],
				],
			},
		},
	}

	const tsLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	}

	const scssLoader = buildCssLoader(isDev)

	const fileLoader = {
		test: /\.(png|jpe?g|gif|woff|woff2)$/i,
		use: [
			{
				loader: 'file-loader',
			},
		],
	}

	const svgLoader = {
		test: /\.svg$/,
		use: ['@svgr/webpack'],
	}

	return [tsLoader, scssLoader]
}
