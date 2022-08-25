import Header from "./components/Header";
import { MemoryRouter, Routes, Route } from "react-router";
import AllBlogs from "./components/AllBlogs";
import Blogdetail from "./components/Blogdetail";
import InputBlog from "./components/InputBlog";
import ErrorPage from "./components/Error";
function App() {
  return (
    <div className="App">
      <MemoryRouter>
        <Header />
        <Routes>
          <Route path="/" element={<AllBlogs />} />
          <Route path="/posts/:blogId" element={<Blogdetail />} />
          <Route path="/" element={<InputBlog />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </MemoryRouter>
    </div>
  );
}

export default App;
