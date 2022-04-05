import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import data from './db/data';

const app = express();
const PORT = 8000;
let postDB = data;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json(postDB);
});

app.post("/write/insert", (req, res) => {
  const newTitle = req.body.title;
  const newName = req.body.name;
  const newContent = req.body.content;

  const date = new Date();
  const newTime = date.getFullYear() + '-' + ((date.getMonth() + 1) > 9 ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '-' + ((date.getDate() + 1) > 9 ? (date.getDate() + 1) : ('0' + (date.getDate())));
  const newPost = {
    id : postDB[postDB.length - 1].id + 1,
    title : newTitle,
    name : newName,
    content : newContent,
    date : newTime
  }

  console.log(newPost);
  postDB = [ ...postDB, newPost ];

  res.send();
});

app.post("/read/delete", (req, res) => {
  const id = req.body.id;

  postDB = postDB.filter(post => post.id !== id);
});

app.get("/read/:id", (req, res) => {
  const id = req.params.id;
  const post = postDB.find(post => post.id === Number(id));

  res.json(post);
});

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});