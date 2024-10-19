const express = require("express");

//importing post model
const { postModel } = require("../models/Post");

//get all posts
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await postModel.find();
    res.status(200).json({
      succes: true,
      data: posts,
    });
  } catch (error) {
    res.status(500).json({
      succes: false,
      data: error.message,
    });
  }
};

//get single post
exports.getPostById = async (req, res) => {
  const id = req.params.id;

  try {
    const post = await postModel.findById(id);
    if (!post) {
      return res.status(404).json({ message: "post not found" });
    }
    return res.status(200).json({ data: post });
  } catch (error) {
    return res.status(500).json({ Error: error.message });
  }
};

//create post
exports.createPost = async (req, res) => {
  //destructuring variables from req.body object
  const { title, content, category, author, image } = req.body;

  //creating new post using postModel
  const post = new postModel({
    title: title,
    content: content,
    category: category,
    author: author,
    image: image,
  });

  try {
    const newPost = await post.save();
    res.status(201).json({ data: newPost, message: "Succesfully saved" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//updating post
exports.updatePost = async (req, res) => {
  const id = req.params.id; //getting id
  //destructuring variables from req.body object
  const { title, content, category, author, image } = req.body;

  try {
    const post = await postModel.findById(id); //getting existing post by id

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    //updating post
    post.title = title || post.title;
    post.content = content || post.content;
    post.category = category || post.category;
    post.author = author || post.author;
    post.image = image || post.image;
    post.updatedAT = Date.now;

    const updatedPost = await post.save(); // saving post
    res
      .status(200)
      .json({ data: updatedPost, message: "Post updated succefully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//deleting post
exports.deletePost = async (req, res) => {
  const id = req.params.id; // getting id
  try {
    const post = await postModel.findById(id); // getting post
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    await postModel.findByIdAndDelete(post._id); // deleting post by id
    res.json({ message: "Post deleted" });
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
};
