import { unstable_HistoryRouter as HistoryRouter, Routes, Route } from 'react-router-dom'
import { history } from './utils/history';
import Login from "@/pages/Login";
import Layout from "@/pages/Layout";
import { AuthRoute } from "@/components/AuthRoute";

import Home from './pages/Home';
import Publish from './pages/Publish';
import Article from './pages/Article';

import './App.scss'




function App() {
  return (
    // 路由配置
    <HistoryRouter history={history}>
      <div className="App">
        <Routes>
          {/* 创建路由path和组件对应关系 */}
          {/* 鉴权处理，判断是否登录 */}
          <Route path='/' element={
            <AuthRoute>
              <Layout />
            </AuthRoute>
          }>
            <Route index element={<Home />}></Route>
            <Route path='article' element={<Article />}></Route>
            <Route path='publish' element={<Publish />}></Route>
          </Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </div>
    </HistoryRouter>
  );
}

export default App;
