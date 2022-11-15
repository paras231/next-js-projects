import fs from "fs";

export default function handler(req, res) {
  fs.readFile(`blogData/${req.query.slug}.json`, "utf-8", (error, data) => {
    if (error) {
      return res.status(400).json({ error: "Not found" });
    }
    // console.log(JSON.parse(data));
    res.status(200).json({ data: JSON.parse(data) });
  });
}
