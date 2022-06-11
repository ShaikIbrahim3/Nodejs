const express = require("express");
const defaultCntrl = require("./controllers/defaultCntrl");
const defaultRouter = require("./routers/defaultRouter");
const bookRouter = require("./routers/bookRouter");
const bookCntrl = require("./controllers/bookCntrl");
const app = express();
app.listen(5000, function () {
  console.log("server is running");
});
app.use(defaultRouter);
app.use(bookRouter); //instead of this app.get("/books", bookCntrl.get);
