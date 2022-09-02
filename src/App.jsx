import { useLocalStorage } from "react-use";
import orderBy from "lodash/orderBy";
import { createGlobalStyle } from "styled-components";

import Hashtags from "./components/Hashtags";
import Footer from "./components/Footer";
import starters from "./starters";

import HashtagsContext from "./contexts/HashtagsContext";

import "antd/dist/antd.css";

const GlobalStyle = createGlobalStyle`
body {
  height: calc(100% - 10px);
}
`;

function App() {
  const [wordList, setWordList] = useLocalStorage(
    "wordList",
    orderBy(starters, ["term"])
  );

  return (
    <div className="App">
      <GlobalStyle />
      <HashtagsContext.Provider value={[wordList, setWordList]}>
        <Hashtags words={wordList} />
        <Footer />
      </HashtagsContext.Provider>
    </div>
  );
}

export default App;
