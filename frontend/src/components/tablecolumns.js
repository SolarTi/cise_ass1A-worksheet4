/*
 * @Author: your name
 * @Date: 2022-04-05 01:46:47
 * @LastEditTime: 2022-04-05 01:46:56
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \cise_ass1a_worksheet4\frontend\src\components\tablecolumns.js
 */
const tablecolumns = [
    {
        Header: 'Title',
        accessor: 'title'
    }, {
        Header: 'Authors',
        accessor: 'authors'
    }, {
        Header: 'Source',
        accessor: 'source'
    }, {
        Header: 'Pub. Year',
        accessor: 'pubyear'
    }, {
        Header: 'DOI',
        accessor: 'doi'
    }, , {
        Header: 'Claimed Benefit',
        accessor: 'claim'
    }, {
        Header: 'Level of Evidence',
        accessor: 'evidence'
    }
]

module.exports = tablecolumns
