const express = require('express');


const articleRouter = express.Router();

const { createArticle,getAllArticles,editArticle ,getAllArticleById,updateArticle,deleteArticle } = require('../controllers/articlecontroller');
const { authguard } = require('../middleware/auth')

articleRouter.route('/').post(authguard,createArticle).get(getAllArticles);
articleRouter.route('/:articleId').patch(authguard,editArticle).get(getAllArticleById).put(authguard,updateArticle).delete(authguard,deleteArticle);

module.exports = articleRouter;

