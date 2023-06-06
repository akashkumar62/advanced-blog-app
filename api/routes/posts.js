const router = require("express").Router();
const User = require("../models/User")
const bcrypt = require("bcrypt");
const Post = require("../models/Post")


//create
router.post("/", async (req, res) => {
    const newPost =  new Post(req.body);
  try{
    const savedPost= await newPost.save();
    return res.status(200).json(savedPost)
  }
  catch(err){
   return res.status(500).json(err)
  }
})


//update
router.put("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.username === req.body.username) {
            try {
                const updatedPost = await Post.findByIdAndUpdate(
                    req.params.id,
                    {
                        $set: req.body,
                    },
                    { new: true }
                );
              return  res.status(200).json(updatedPost);
            } catch (err) {
              return  res.status(500).json(err);
            }
        } else {
           return res.status(401).json("You can update only your post!");
        }
    } catch (err) {
       return res.status(500).json(err);
    }
})

//delete
router.delete("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.username === req.body.username) {
            try {
             await Post.findByIdAndDelete(req.params.id)
                   
               return res.status(200).json("Post has been deleted successfully");
            } catch (err) {
              return  res.status(500).json(err);
            }
        } else {
          return  res.status(401).json("You can delete only your post!");
        }
    } catch (err) {
       return res.status(500).json(err);
    }
})






//get
router.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        return res.status(200).json(post)
    }
    catch (err) {
        return res.status(500).json(err)
    }
})

//get all posts
router.get("/", async (req, res) => {
    const username= req.query.user;
    const catName=req.query.cat;
    try {
        let posts;
        if(username){
            posts= await Post.find({username:username})
        }
        else if(catName){
            posts=await Post.find({categories:{
                $in:[catName],
            },
        })
        }
        else
        {
            posts=await Post.find();
        }
           return res.status(200).json(posts)
    }
    catch (err) {
        return res.status(500).json(err)
    }
})





module.exports = router