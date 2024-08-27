import webpack from 'webpack'
import { BuildOptions } from './types/config'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

export const buildPlugins = ({
	paths,
	isDev,
	apiUrl,
	analyze,
}: BuildOptions): webpack.WebpackPluginInstance[] => {
	return [
		new webpack.ProgressPlugin(),
		new HtmlWebpackPlugin({
			template: paths.html,
		}),
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:8].css',
			chunkFilename: 'css/[name].[contenthash:8].css',
		}),
		// new webpack.DefinePlugin({
		// 	__IS_DEV__: JSON.stringify(isDev),
		// 	__API__: JSON.stringify(apiUrl),
		// }),
		new webpack.HotModuleReplacementPlugin(),
		new BundleAnalyzerPlugin({
			analyzerMode: analyze ? 'server' : 'disabled',
		}),
	]
}
