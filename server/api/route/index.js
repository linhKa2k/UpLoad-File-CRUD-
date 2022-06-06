const controller = require("../controller/index");
module.exports = function (app) {
  app.route("/get").get(controller.getData);
  app.route("/upload").post(controller.img);
  app.route("/:id").delete(controller.deleteData);
  app.route("/update").put(controller.udateData);
  app.route("/search").get(controller.search);
};
