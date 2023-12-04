const { composePlugins, withNx } = require('@nx/webpack');
const { withReact } = require('@nx/react');

// Nx plugins for webpack.
module.exports = composePlugins(withNx(), withReact(), (config) => {
  // Update the webpack config as needed here.
  // e.g. `config.plugins.push(new MyPlugin())`
  config.module.rules.push({
    test: /\.scss$/,
    use: [
      'style-loader',
      'css-loader',
      {
        loader: 'sass-loader',
        options: {
          data: '@import "../../libs/shared/lib/styles/constants.scss"; @import "../../libs/shared/lib/styles/mixins.scss"; @import "../../libs/shared/lib/styles/variables.scss',
          includePaths: [__dirname, 'src'],
        },
      },
    ],
  });
  return config;
});
