import exp from "express";
import { register, authentication } from "../Services/authService.js";
import { userTypeModel } from "../Models/userModel.js";
import { articleModel } from "../Models/articleModel.js";
import { checkAuthor } from "../middlewares/checkAuthor.js";
import { verifyToken } from "../middlewares/verifyToken.js";


export const authorApp = exp.Router();

// register author(public)
authorApp.post("/users", async (req, res) => {
    // get user obj from req
    let userObj = req.body;
    // call register func
    const newUserObj = await register({ ...userObj, role: "AUTHOR" });
    // send res
    res.status(201).json({ message: "User created", payload: newUserObj });
})

// create article(protected)
authorApp.post("/articles",verifyToken,checkAuthor, async (req, res) => {
    // get article from req
    let article = req.body;
    // create the article doc
    let articleDoc = new articleModel(article);
    // save the doc
    let createdDoc = await articleDoc.save();
    // send res
    res.status(201).json({message:"article successfully created",payload:createdDoc})
})

// read article of author(protected)
authorApp.get("/articles/:authorID",verifyToken,checkAuthor,async(req,res)=> {
    // get author id
    let authorId = req.params.authorID;
    // retreive articles of author which are active
    let articles = await articleModel.find({author:authorId,isArticleActive:true}).populate("author","firstName email");
    // send res
    res.status(201).json({message:"articles retrived",payload:articles})
})

// edit article(protected)
authorApp.put("/articles",verifyToken,checkAuthor,async(req,res) => {
    let {articleId,title,category,content,author} = req.body;
    let articleDoc = await articleModel.findOne({_id:articleId,author:author});
    if(!articleDoc){
        return res.status(401).json({message:"article not available"})
    }
    let updatedArticle = await articleModel.findByIdAndUpdate(articleId,
        {$set:{title:title,category:category,content:content}},
        {new:true});
    res.status(201).json({message:"article updated",payload:updatedArticle});
})

// delete article(soft-delete)(protected)
authorApp.delete("/articles/author/:authorID/article/:articleId",verifyToken,checkAuthor,async(req,res)=> {
    let authorId = req.params.authorID;
    let articleId = req.params.articleId;
    
    let articleDoc = await articleModel.findOneAndUpdate({_id:articleId,author:authorId},{$set:{isArticleActive:false}},{new:true});
    if(!articleDoc){
        return res.status(401).json({message:"article not available"})
    }
    res.status(201).json({message:"article deleted successfully",payload:articleDoc})
})