const express = require("express");
const router = express.Router();
const Posts = require("../../models/Posts");

// @routes GET api/posts
// @desc get all posts
router.get("/", async (req, res) => {
	try {
		const posts = await Posts.find();
		if (!posts) throw Error("Something broke while fetching all posts");
		res.status(200).json(posts);
	} catch (error) {
		res.status(400).json({ msg: error });
	}
});

// @routes GET api/posts/:id
// @desc get all posts/:id
router.get("/:id", async (req, res) => {
	try {
		const post = await Posts.findById(req.params.id);
		if (!post) throw Error("Something broke while fetching a post");
		res.status(200).json(post);
	} catch (error) {
		res.status(400).json({ msg: error });
	}
});

// @routes POST api/posts
// @desc create a post
router.post("/", async (req, res) => {
	const newPost = new Posts(req.body);

	try {
		const post = await newPost.save();
		if (!post) throw Error("Something broke while creating a new post");

		res.status(200).json(post);
	} catch (error) {
		res.status(400).json({ msg: error });
	}
});

// @routes DELETE api/posts/id
// @desc deletes a post by it's ID
router.delete("/:id", async (req, res) => {
	try {
		const post = await Posts.findByIdAndDelete(req.params.id);
		if (!post) throw Error("No Post found to delete");
		res.status(200).json({ success: true });
	} catch (error) {
		res.status(400).json({ msg: error });
	}
});

// @routes UPDATE api/posts/id
// @desc updates a post by it's ID
router.patch("/:id", async (req, res) => {
	try {
		const post = await Posts.findByIdAndUpdate(req.params.id, req.body);
		if (!post) throw Error("Error while trying to update a post");
		res.status(200).json({ success: true });
	} catch (error) {
		res.status(400).json({ msg: error });
	}
});
module.exports = router;
