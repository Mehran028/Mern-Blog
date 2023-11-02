// Pages
import Home from "./Pages/Home";
import { About } from "./Pages/About";
import { ArticleList } from "./Pages/ArticleList";
import { Article } from "./Pages/Article";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Components
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
    <div className="max-w-screen-md mx-auto pt-20 ">
    <Routes>
    <Route  path="/" element= {<Home />} />
    <Route  path="/about" element= {<About />} />
    <Route  path="/article-list" element= {<ArticleList />} />
    <Route  path="/article/:name" element= {<Article />} />
    </Routes>
    </div>
    </Router>
  );
}

export default App;
