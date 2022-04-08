/*
 * @Author: your name
 * @Date: 2022-04-03 12:52:02
 * @LastEditTime: 2022-04-05 02:10:24
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \cise_ass1a_worksheet4\frontend\src\pages\Submit-Article.js
 */
import React from "react";
import SubmissionForm from "../components/SubmissionForm.js";

const SubmitArticle = () => {
    return (
        <div>
            <h2>Submit Article</h2>
            <p>This will be a form to allow submitters to submit an article for possible inclusion in our SEPER repo.</p>
            <SubmissionForm />
        </div>
    );
}

export default SubmitArticle;
