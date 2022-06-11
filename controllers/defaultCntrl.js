function get(req, res) {
  res.send("Home");
}
function health(req, res) {
  const status = { status: "up" };
  res.json(status);
}
module.exports = {
  get,
  health,
};
