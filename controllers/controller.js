const { Pool } = require('pg');

const pool= new Pool({
    host:'localhost',
    user:'rajesh',
    password:'password',
    database:'assignmentdb',
    port:'5432'
});


const getPosts= async(req,res)=>{
    const response= await pool.query('select * from posts');
    res.status(200).json(response.rows);
}


const getPostsById=async(req,res)=>{
    const id=req.params.id;
    const response=await pool.query('select * from posts where id= $1',[id]);
    rowExists= response.rowCount;
    if(rowExists>0){
    res.json(response.rows);
    }else{ res.json({error:`id= ${id} is not in the posts table`})}
}

const createPost=async(req,res)=>{
    const{title,body}=req.body;
    const response=await pool.query('insert into posts (title,body) values ($1,$2)',[title,body]);
    if(response.rowCount>0){
    res.json({
        message:"Posts Added successfully",
        body:{
            Post: {title,body}
        }
    });
}else{
    console.log('Couldnot Insert');
}

}



const getComments= async(req,res)=>{
    const response= await pool.query('select * from comments');
    res.status(200).json(response.rows);
}


const getCommentsByPostId=async(req,res)=>{
    const postId=req.params.postId;
    const response=await pool.query('select * from comments where "postId"= $1',[postId]);
    rowExists= response.rowCount;
    if(rowExists>0){
    res.json(response.rows);
    }else{ res.json({error:`PostId= ${postId} is not in the comments table`})}
}

const createComment=async(req,res)=>{
    const{title,body,username,postId}=req.body;
    const response=await pool.query('insert into comments (title,body,username,"postId") values ($1,$2,$3,$4)',[title,body,username,postId]);
    if(response.rowCount>0){
    res.json({
        message:"Comment Added successfully",
        body:{
            Comment: {title,body,username,postId}
        }
    });
}else{
    console.log('Couldnot Insert comment');
}

}

const deleteCommentById=async(req,res)=>{
    const id=req.params.id;
    const response=await pool.query('delete from comments where id= $1',[id]);
    console.log(response);
    if(response.rowCount>0){
    
    res.json(`Comment ${id} Deleted successfully`);
    }else{
        res.json('Couldnot delete Comment');
    }

}

const updatePost=async(req,res)=>{
    const id=req.params.id;
    const {title, body}= req.body;
    const response = await pool.query('update posts set title =$1, body =$2 where id =$3',[title,body,id]);
    if(response.rowCount>0){
    
        res.json(`Post ${id} updated successfully`);
        }else{
            res.json('Couldnot update post');
        }
}


module.exports={
    getPosts,
    getPostsById,
    createPost,
    getComments,
    getCommentsByPostId,
    createComment,
    deleteCommentById,
    updatePost
}