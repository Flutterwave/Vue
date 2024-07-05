import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config.ts';
import vue from "@vitejs/plugin-vue";

export default mergeConfig(viteConfig, defineConfig({
    test: {
	    environment: 'happy-dom'
    },
    plugins: [],
}));
