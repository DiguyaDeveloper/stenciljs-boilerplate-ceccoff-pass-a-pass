import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stenciljs-ceccoff-boilerplate',
  globalStyle: 'src/assets/styles/global.scss',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
