const http = require("http");
const server = http.createServer(handler);
server.listen(4000, function () {
  console.log("Server is running");
});
function handler(req, res) {
  switch (req.url) {
    case "/":
      res.write("Home");
      break;
    case "/products":
      res.write("List of Products");
      break;
    case "/author":
      res.write("List of Authors");
      break;
    case "/books":
      const books = [
        { id: 1, name: "c programming", price: 40 },
        { id: 2, name: "c++ programming", price: 40 },
        { id: 3, name: "java programming", price: 40 },
        { id: 4, name: "python programming", price: 40 },
      ];
      res.write(JSON.stringify(books));
      break;
    default:
      res.write("Not Found");
  }
  res.end();
}
