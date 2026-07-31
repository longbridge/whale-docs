/**
 * Registers a DOM into the global scope for `bun test`.
 *
 * The markdown pipeline tests assert on rendered HTML structure through
 * querySelector/classList, which needs a real DOM. Bun's test runner has no
 * DOM by default, so happy-dom is registered here and preloaded via
 * bunfig.toml.
 */
import { GlobalRegistrator } from "@happy-dom/global-registrator";

GlobalRegistrator.register();
