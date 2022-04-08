/*
 * @Author: your name
 * @Date: 2022-04-05 01:53:30
 * @LastEditTime: 2022-04-05 01:53:45
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \cise_ass1a_worksheet4\frontend\src\dummydata\articles.js
 */
const articles = [
    {
        id: "1",
        title: 'An experimental evaluation of test driven development vs. test-last development with industry professionals',
        authors: "Munir, H., Wnuk, K., Petersen, K., Moayyed, M.",
        source: "EASE",
        pubyear: "2014",
        doi: "https://doi.org/10.1145/2601248.2601267",
        claim: "code quality improvement",
        evidence: "strong support",
    },
    {
        _id: "2",
        title: 'An experimental evaluation of test driven development vs. test-last development with industry professionals',
        authors: "Munir, H., Wnuk, K., Petersen, K., Moayyed, M.",
        source: "EASE",
        pubyear: "2014",
        doi: "https://doi.org/10.1145/2601248.2601267",
        claim: "product quality improvement",
        evidence: "weak support",
    },
    {
        _id: "3",
        title: 'Realizing quality improvement through test driven development: results and experiences of four industrial teams',
        authors: "Nagappan, N., Maximilien, E. M., Bhat, T., Williams, L.",
        source: " Empirical Software Engineering, 13(3), 289–302",
        pubyear: "2008",
        doi: "https://doi.org/10.1007/s10664-008-9062-z",
        claim: "product quality improvement",
        evidence: "weak support",
    },
    {
        _id: "4",
        title: "Does Test-Driven Development Really Improve Software Design Quality?",
        authors: "Janzen, D. S.",
        source: "Software, IEEE, 25(2) 77-84",
        pubyear: "2008",
        doi: "",
        claim: "code quality improvement",
        evidence: "strong support",
    },
    {
        _id: "5",
        title: "A Comparative Case Study on the Impact of Test-Driven Development on Program Design and Test Coverage",
        authors: "Siniaalto, M., Abrahamsson, P.",
        source: "ArXiv.Org, cs.SE, arXiv:1711.05082-284",
        pubyear: "2017",
        doi: "https://doi.org/10.1109/esem.2007.35",
        claim: "code quality improvement",
        evidence: "weak against",
    },
];
module.exports = articles;
