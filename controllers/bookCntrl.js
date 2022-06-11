class bookCntrl {
  get(req, res) {
    const books = [
      { id: 1, name: "c programming", price: 40 },
      { id: 2, name: "c++ programming", price: 40 },
      { id: 3, name: "java programming", price: 40 },
      { id: 4, name: "python programming", price: 40 },
    ];
    res.json(books);
  }
}
module.exports = new bookCntrl();
