/*
 * @Author: Tai Zhang
 * @Date: 2022-04-02 21:58:09
 * @LastEditTime: 2022-04-03 13:00:18
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \CISE_Repos\cise_ass1a_worksheet4\frontend\src\App.js
 */
import React from "react";
import Home from "./pages/Home";
import SEPractice from "./pages/SE-Practice";
import SubmitArticle from "./pages/Submit-Article";



import {
  BrowserRouter as Router,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <h1>Software Engineering Practice Evidence Repository (SEPER)</h1>
        <ul className="header">
          <li><a href="">Home</a></li>
          <li><a href="/SEPractice">Select the Practice</a></li>
          <li><a href="/SubmitArticle">Submit an Article</a></li>
        </ul>
        <div className="content">
          <></>
        </div>
      </div>
    </Router>
  );
}

export default App;

