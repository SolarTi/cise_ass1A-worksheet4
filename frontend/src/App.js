/*
 * @Author: Tai Zhang
 * @Date: 2022-04-02 21:58:09
 * @LastEditTime: 2022-04-06 15:11:56
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \CISE_Repos\cise_ass1a_worksheet4\frontend\src\App.js
 */
import React from "react";

import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

import Home from "./pages/Home";
import SEPractice from "./pages/SE-Practice";
import SubmitArticle from "./pages/Submit-Article";
import NotFoundPage from "./pages/404";

// function Navigate() {
//   let navigate = useNavigate();
//   navigate("/Home", { replace: true });
// }



const App = () => {
  return (
    <Router>
      <div>
        <h1>Software Engineering Practice Evidence Repository (SEPER)</h1>
        <ul className="header">
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to="/SEPractice">Select the Practice</NavLink></li>
          <li><NavLink to="/SubmitArticle">Submit an Article</NavLink></li>

        </ul>
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/SEPractice" element={<SEPractice />} />
            <Route path="/SubmitArticle" element={<SubmitArticle />} />
            <Route exact path="*" element={<NotFoundPage />} />

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

