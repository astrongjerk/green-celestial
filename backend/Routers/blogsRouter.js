import express from 'express';
import { body , validationResult } from 'express-validator';
import { createBlog, delBlog, updateBlog,getBlogs } from '../Controllers/blogsController.js';
import { authenticate } from '../middleware/auth.js';

const blogRouter = express.Router();

blogRouter.get("/",getBlogs);

blogRouter.post("/",[
    body('author','Author Name Needs To Be Atleast 3 Characthers Long').isLength({ min : 3 }),
    body('img','An Image Is Required').notEmpty(),
    body('content','Content Is Required').notEmpty()

],(req,res,next) => {
    const error = validationResult(req);
    if(!error.isEmpty()){
        res.status(400).json({ error : error.array() });
    }else{
        next();
    }

},authenticate,createBlog);

blogRouter.put("/:id",[
    body('author','Author Name Needs To Be Atleast 3 Characthers Long').isLength({ min : 3 }),
    body('content','Content Is Required').notEmpty()
],(req,res,next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        res.status(400).json({ error : errors.array() })
    }else{
        next();
    }
},authenticate,updateBlog)

blogRouter.delete("/:id",authenticate,delBlog)

export default blogRouter;