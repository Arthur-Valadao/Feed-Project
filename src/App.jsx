import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Posts } from "./components/Posts/Posts";
import "./global.css";
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Posts />
          <Posts />
        </main>
      </div>
    </div>
  );
}

export default App;
