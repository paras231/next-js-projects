import fs from "fs";

export default function handler(req, res) {
  fs.readFile("blogData/data.json", "utf-8", (error, data) => {
    // console.log(JSON.parse(data));
    res.status(200).json({ data: JSON.parse(data) });
  });
}
