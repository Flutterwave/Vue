import { Plugin, App } from "vue";

// Import vue components
import * as components from "./components";

// Import onMount mixin
import scriptDownloadMixin from "../utils/mixin";

const install: Plugin = {
  install(app: App, options: { publicKey?: string } = { publicKey: "" }) {
    Object.entries(components).forEach(([componentName, component]) => {
      app.component(componentName, component);
    });

    app.mixin(scriptDownloadMixin);

    app.provide("public-key", options.publicKey);
  },
};

export default install;

export * from "./components";
