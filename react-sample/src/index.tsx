import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import Hello from "./components/Hello";
// import Parent from "./components/ContainerSample";
// import Page from "./components/ContextSample";
// import Counter from "./components/CounterSample";
// import NewCounter from "./components/NewCounterSample";
import { Parent } from "./components/Parent";
import { Parent2 } from "./components/Parent2";
// import Parent from "./components/Callback";
// import UseMemosample from "./components/UseMemo";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.Fragment>
    {/* <React.StrictMode> */}
    <App />
    {/* <Hello /> */}
    <Parent />
    <Parent2 />
    {/* <Page />
    <Counter initialValue={1} />
    <NewCounter initialValue={1} />
    <UseMemosample /> */}
    {/* </React.StrictMode> */}
  </React.Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
