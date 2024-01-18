import { Routes, Route, Link } from "react-router-dom";
import FetchPosts from "./components/FetchPosts";
import AxiosPosts from "./components/AxiosPosts";
import PostManager from "./components/PostManager";
import PostLoader from "./components/PostLoader";
import PostViewer from "./components/PostViewer";

const App = () => {
  return (
    <div>
      <nav>
        {/* GET com Axios e Fetch */}
        <h1>GET com Axios e Fetch</h1>
        <div>
          <Link to="/fetch-posts">Fetch Posts</Link>
        </div>
        <div>
          <Link to="/axios-posts">Axios Posts</Link>
        </div>
        {/* POST, PUT e DELETE */}
        <div>
          <Link to="/posts">Gerenciar Postagens</Link>
        </div>
        {/* Tratando erros */}
        <div>
          <Link to="/post/1">Carregar Post</Link>
        </div>
        <div>
          <Link to="/post/999">Carregar Post 999</Link>
        </div>
        {/* Hook para requisições */}
        <div>
          <Link to="/post/2">Carregar Post com Hook</Link>
        </div>
      </nav>
      <Routes>
        {/* GET com Axios e Fetch */}
        <Route path="/fetch-posts" element={<FetchPosts />} />
        <Route path="/axios-posts" element={<AxiosPosts />} />
        {/* POST, PUT e DELETE */}
        <Route path="/posts" element={<PostManager />} />
        {/* Tratando erros */}
        <Route path="/post/:postId" element={<PostLoader />} />
        {/* Hook para requisições */}
        <Route path="/posts/:postId" element={<PostViewer />} />
      </Routes>
    </div>
  );
};

export default App;
