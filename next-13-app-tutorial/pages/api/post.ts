import dbConnect from "../../middleware/mongoose";
import Post from "../../models/Post";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  await dbConnect();

  if (method === "GET") {
    try {
      const posts = await Post.find();
      res.status(200).json({ posts });
    } catch (error: any) {
      res.status(200).json({ message: error.message });
    }
  } else if (method === "POST") {
    try {
      const { title, img } = req.body;
      const newPost = await Post.create({
        title,
        img,
      });
      res.status(200).json({ message: "post created", newPost });
    } catch (error: any) {
      res.status(200).json({ message: error.message });
    }
  }
}
