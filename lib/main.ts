// iife/cjs usage extends esm default export - so import it all
import useFlutterWave from "./composables/useFlutterWave";
import plugin, * as components from "./entry.esm";

// Attach named exports directly to plugin. IIFE/CJS will
// only expose one global var, with component exports exposed as properties of
// that global var (eg. plugin.component)
type NamedExports = Exclude<typeof components, "default">;
type ExtendedPlugin = typeof plugin & NamedExports;
Object.entries(components).forEach(([componentName, component]) => {
  if (componentName !== "default") {
    const key = componentName as Exclude<keyof NamedExports, "default">;
    const val = component as Exclude<ExtendedPlugin, typeof plugin>;
    (plugin as ExtendedPlugin)[key] = val;
  }
});

// Vite build noted that to import this, you will need to use `Flutterwave.default`
export default plugin;
export { useFlutterWave };


