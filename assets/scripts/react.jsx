// Unfortunately it appears that it's impossible to enable ESBuild's
// --jsx=automatic mode (https://esbuild.github.io/content-types/#auto-import-for-jsx)
// via Hugo Pipes. So we'll have to remember to manually import React
import { createRoot } from "react-dom/client";
import React from "react";
import MyExampleComponent from "./MyExampleComponent";
import AnotherComponent from "./AnotherComponent";

const exampleComponent = document.querySelectorAll(".my-component-root");

exampleComponent.forEach((instance) => {
  const data = JSON.parse(instance.getAttribute("data-props"));
  createRoot(instance).render(<MyExampleComponent data={data} />);
});

const anotherComponent = document.querySelectorAll(".another-component-root");

anotherComponent.forEach((instance) => {
  const data = JSON.parse(instance.getAttribute("data-props"));
  createRoot(instance).render(<AnotherComponent data={data} />);
});
