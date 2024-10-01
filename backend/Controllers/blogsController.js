import blogModel from "../Models/blogsSchema.js";

// =============ENDPOINT FOR FETCHING ALL BLOGS================
const getBlogs = async (req, res) => {
  try {
    const results = await blogModel.find();
    res.status(200).send(results);
  } catch (error) {
    res.status(401).json({ error: "Internal Server Error " });
  }
};

// ================ENDPOINT FOR CREATING A BLOg===================
const createBlog = async (req, res) => {
  let record = new blogModel({
    author: req.body.author,
    title: req.body.title,
    img: req.body.img,
    content: req.body.content,
  });

  try {
    let result = await record
      .save()
      .then((result) => {
        res.status(200).json({
          msg: "Record Has Been Saved",
        });
      })
      .catch((error) => {
        res.status(401).json({
          error: error,
        });
      });
  } catch (error) {
    res.status(401).json({
      error: "Internal Server Error",
    });
  }
};

// =============ENDPOINT FOR UPDATING A BLOG===============

const updateBlog = async (req,res) => {

  try {
   
    let newBlog = {};
    let {title , author , content} = req.body;
    
    if(title){ newBlog.title = title};
    if(author){ newBlog.author = author};
    if(content){ newBlog.content = content};


    let blog = await blogModel.find({ _id : req.params.id});
    if(!blog){
      return res.status(401).json( { error : "Access Denied" } );
    }


    let result = await blogModel.findByIdAndUpdate(req.params.id ,{ $set : newBlog })
    .then((result) => res.status(200).json({ msg : "Blog Updated Succesfully"}))
    .catch((error) => res.status(402).json({ msg : "Something Went Wrong" }));

  } catch (errors) {
    res.status(402).json({ error :  errors });
  }

}

// ============ENDPOINT FOR DELETING A RECORD=============

const delBlog = async (req,res) => {

  try {
    if(!req.params.id){
      return res.status(402).json({ msg : "Something Went Wrong" });
    }

    let result = await blogModel.findByIdAndDelete(req.params.id)
    .then((result) => res.status(200).json({ msg : "The Blog Was Deleted Succesfully" }))
    .catch((error) => res.status(402).json({ msg : "Something Went Wrong" }))

  } catch (error) {
    
  }

}

export { getBlogs, createBlog , updateBlog ,delBlog };
