const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const mf = require('@angular-architects/module-federation/webpack');
const path = require('path');

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(path.join(__dirname, '../../tsconfig.base.json'), [
  '@nx-microfrontends/shared'
]);

module.exports = {
  output: {
    uniqueName: 'mfe1',
    publicPath: 'auto',
  },
  optimization: {
    runtimeChunk: false,
    minimize: false,
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'mfe1',
      filename: 'remoteEntry.js',
      exposes: {
        './Module': 'apps/mfe1/src/app/remote-entry/entry.module.ts',
      },
      shared: {
        '@angular/core': { singleton: true, strictVersion: true },
        '@angular/common': { singleton: true, strictVersion: true },
        '@angular/common/http': { singleton: true, strictVersion: true },
        '@angular/router': { singleton: true, strictVersion: true },
        '@nx-microfrontends/shared': { singleton: true, strictVersion: true },
        ...sharedMappings.getDescriptors(),
      },
    }),
    sharedMappings.getPlugin(),
  ],
};
