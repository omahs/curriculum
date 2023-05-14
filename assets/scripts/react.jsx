// Unfortunately it appears that it's impossible to enable ESBuild's
// --jsx=automatic mode (https://esbuild.github.io/content-types/#auto-import-for-jsx)
// via Hugo Pipes. So we'll have to remember to manually import React
import React from "react";

import { createRoot } from "react-dom/client";

export function HelloWorld() {
  return <div>Hello world</div>;
}

// Check if there is a React root element on the page, and if so render the
// component into it
const reactRootEl = document.getElementById("react-root");
if (reactRootEl) {
  const root = createRoot(reactRootEl);
  root.render(<HelloWorld />);
}
