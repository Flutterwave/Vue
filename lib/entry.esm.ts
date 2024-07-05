import { Plugin, App } from "vue";

// Import vue components
import * as components from "./components";

// Import onMount mixin
import scriptDownloadMixin from "../utils/mixin";

/**
 * The Flutterwave Plugin, used to supply core functions needed for the proper functioning of the Flutterwave Components
 * 
 * Using this plugin requires a single option, which is the `publicKey` which represents your Flutterwave Public API key.
 * 
 * ```js
 * import App from "./App.vue";
 * 
 * const app = createApp(App);
 * 
 * app.use(Flutterwave, {
 *   publicKey: "FWPUB-your-public-key",
 * });
 * ```
 * 
 * Once this plugin is supplied, the Flutterwave Components can be used
 */
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
