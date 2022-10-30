const express = require('express');


const articleRouter = express.Router();

const { createArticle,getAllArticles,editArticle ,getAllArticleById,updateArticle } = require('../controllers/articlecontroller');
const { authguard } = require('../middleware/auth')

articleRouter.route('/').post(authguard,createArticle).get(getAllArticles);
articleRouter.route('/:articleId').patch(authguard,editArticle).get(getAllArticleById).put(authguard,updateArticle);

module.exports = articleRouter;

