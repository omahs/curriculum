// Unfortunately it appears that it's impossible to enable ESBuild's
// --jsx=automatic mode (https://esbuild.github.io/content-types/#auto-import-for-jsx)
// via Hugo Pipes. So we'll have to remember to manually import React
import React from "react";

import { createRoot } from "react-dom/client";

export function HelloWorld() {
  return <div>Hello world</div>;
}

window.__CYF_renderHelloWorld = function renderHelloWorld(selector) {
  const root = createRoot(document.getElementById(selector));
  root.render(<HelloWorld />);
};
