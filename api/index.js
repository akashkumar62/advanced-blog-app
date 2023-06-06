
const express= require("express");
const dotenv = require('dotenv').config();
const mongoose= require("mongoose");
const bcrypt= require("bcrypt");
const cors= require('cors')
const app=express();
app.use(express.json())
const authRoute= require("./routes/auth")
const userRoute = require("./routes/users")
const postRoute = require("./routes/posts")
const catRoute = require("./routes/categories")
const multer = require("multer");
const PORT=process.env.PORT || 4000
const path = require("path");
app.use("/images",express.static(path.join(__dirname,"/images")))
 mongoose.connect(process.env.MONGO_URL).then(()=>console.log("Mongoose connected")).catch((err)=>console.log(err))


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images");
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name);
    },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded");
});
app.use(cors());
 app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/posts",postRoute)
app.use("/api/cat", catRoute)
app.listen(PORT,()=>{
    console.log("Backend connected successfully");
})