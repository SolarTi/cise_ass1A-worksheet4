/*
 * @Author: your name
 * @Date: 2022-04-08 13:29:16
 * @LastEditTime: 2022-04-08 13:29:34
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \cise_ass1a_worksheet4\server\models\Book.js
 */
// models/Book.js

const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    author: {
        type: String,
        required: true
    },
    source: {
        type: String
    },
    published_year: {
        type: String
    },
    doi: {
        type: String
    },
    se_practice: {
        type: String,
    }
});

module.exports = Book = mongoose.model('book', BookSchema);