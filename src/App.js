import { GlobalProvider } from "./store/GlobalState";
import Header from "./components/Header";
import { Search } from "./components/Search";
import { Nominated } from "./components/Nominated";

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Header />
        <div className="content">
          <Search />
          <Nominated />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
