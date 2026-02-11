import exp from "express";
import { register, authentication } from "../Services/authService.js";
import { verifyToken } from "../middlewares/verifyToken.js"
import { articleModel } from "../Models/articleModel.js"
import { userTypeModel } from "../Models/userModel.js";

export const userApp = exp.Router();


// Register user(public)
userApp.post("/users", async (req, res) => {
    // get user obj from req
    let userObj = req.body;
    // call register func
    const newUserObj = await register({ ...userObj, role: "USER" });
    // send res
    res.status(201).json({ message: "User created", payload: newUserObj });
})


// read all articles(protected)
userApp.get("/articles", verifyToken, async (req, res) => {
    let articlesData = await articleModel.find({});
    if (!articlesData) {
        return res.status(401).json({ message: "articles not found" });
    }
    res.status(201).json({ message: "articles retreived success", payload: articlesData })
})

// add comment to article(protected)
userApp.put("/users/:userId/article/:articleId", verifyToken, async (req, res) => {
    let comment = req.body.comment;
    let {uid,aid} = req.params;
    let articleObj = await articleModel.findById(aid);
    if (!articleObj || !articleObj.isArticleActive) {
        return res.status(401).json({ message: "articles not found" });
    }
    let userObj = await userTypeModel.findById(uid);
    let newComment = {
        user: userObj,
        comment: comment
    }
    let ModifiedArticleObj = await articleModel.findByIdAndUpdate(aid, { $push: { comments: newComment } }, { new: true, runValidators: true });
    res.status(201).json({ message: "added comment", payload: ModifiedArticleObj })
})