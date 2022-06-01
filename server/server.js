const express = require("express");
const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello world");
});

const logMessage = () => setInterval(() =>{
  console.log(`App running at port ${port}`);
}, 5000)
app.listen(3000, () => {
   logMessage();
});
