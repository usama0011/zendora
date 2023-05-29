import dbConnect from "../../lib/dbConnect";
import Blog from "../../models/Blog"

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const blogs = await Blog.find({});
        res.status(200).json({ success: true, data: blogs });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const { coverImage, author, date, title, description, relatedCat } =
          req.body;
        const newBlog = new Blog({
          coverImage,
          author,
          date,
          title,
          description,
          relatedCat,
        });
        const savedBlog = await newBlog.save();
        res.status(201).json({ success: true, data: savedBlog });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
