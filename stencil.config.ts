import { Config } from "@stencil/core";
import { sass } from "@stencil/sass";

export const config: Config = {
  namespace: "stenciljs-ceccoff-boilerplate",
  globalStyle: "src/assets/styles/global/_global.scss",
  plugins: [sass()],
  outputTargets: [
    {
      type: "dist",
      esmLoaderPath: "../loader"
    },
    {
      type: "dist-custom-elements-bundle"
    },
    {
      type: "docs-readme"
    },
    {
      type: "www",
      serviceWorker: null // disable service workers
    }
  ]
};
