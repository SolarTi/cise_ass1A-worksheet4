/*
 * @Author: your name
 * @Date: 2022-04-05 02:09:20
 * @LastEditTime: 2022-04-05 02:13:21
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \cise_ass1a_worksheet4\frontend\src\components\SubmissionForm.js
 */
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const SubmissionForm = () => {
    const { register, handleSubmit } = useForm();
    const [result, setResult] = useState("");
    const onSubmit = (data) => setResult(JSON.stringify(data));

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <input {...register("title")} placeholder="Title" />
            <p><input {...register("authors")} placeholder="Authors" /></p>
            <p><input {...register("source")} placeholder="Source" /></p>
            <p><input {...register("pubyear")} placeholder="Publication Year" /></p>
            <p><input {...register("doi")} placeholder="DOI" /></p>

            <select {...register("sepractice")}>
                <option value="">Select SE practice...</option>
                <option value="TDD">TDD</option>
                <option value="Mob Programming">Mob Programmin</option>
            </select>

            <p>{result}</p>
            <input type="submit" />
        </form>
    );
}
export default SubmissionForm;
