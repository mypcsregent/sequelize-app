const {Router}= require('express');
const router= Router();
const { getPosts,getPostsById,createPost,getComments,getCommentsByPostId,createComment,deleteCommentById,updatePost }= require('../controllers/controller')

router.get('/posts',getPosts);

router.get('/posts/:id',getPostsById);

router.post('/posts',createPost);

router.get('/comments',getComments);

router.get('/comments/:postId',getCommentsByPostId);

router.post('/comments',createComment);

router.delete('/comments/:id',deleteCommentById);

router.put('/posts/:id', updatePost);
module.exports= router;