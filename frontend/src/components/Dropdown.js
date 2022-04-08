/*
 * @Author: your name
 * @Date: 2022-04-05 01:58:25
 * @LastEditTime: 2022-04-05 02:05:51
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \cise_ass1a_worksheet4\frontend\src\components\Dropdown.js
 */
import React from 'react';
import SEPractices from "../dummydata/SEPractices"

const optionItems = SEPractices.map((SEPractice) =>
    <option key={SEPractice.practice}>{SEPractice.practice}</option>
);
const Dropdown = () => {
    return (
        <div>
            <select>
                <option value="">Select an SE Practice </option> {optionItems}
            </select>
        </div>

    )
}
export default Dropdown;