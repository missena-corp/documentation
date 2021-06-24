const React = require("react");

import styles from "./Bookmarklet.module.scss";

export default function Bookmarklet() {
  const [key, setKey] = React.useState("");
  const generateJS = (key) => {
    if (key) {
      return `javascript: (function () { let scriptElement = document.createElement("script");scriptElement.src="https://api-ir.staging.missena.xyz/?t=${key}";document.body.appendChild(scriptElement);})();`;
    }
    return "";
  };
  return (
    <div className={styles.bookmarklet}>
      <input onChange={(event) => setKey(() => event.target.value)} />
      <a href={generateJS(key)} disabled={!key}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 48 48"
        >
          <path
            fill="currentColor"
            d="M34 6h-20c-2.21 0-3.98 1.79-3.98 4l-.02 32 14-6 14 6v-32c0-2.21-1.79-4-4-4zm0 30l-10-4.35-10 4.35v-26h20v26z"
          />
          <path d="M0 0h48v48h-48z" fill="none" />
        </svg>
        Instant Recall Test
      </a>
    </div>
  );
}
