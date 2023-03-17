import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import styles from "./App.module.less";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <p className={styles.app_docs}>
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
