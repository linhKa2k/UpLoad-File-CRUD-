const StudentModel = require("../model/index");
const fs = require("fs/promises");
exports.getData = async (req, res) => {
  try {
    let data = await StudentModel.find({});
    res.send({ data });
  } catch (error) {
    res.send(error);
  }
};

//! add UpLoad
exports.img = async (req, res) => {
  try {
    let file = req.files;
    let name = req.body.name;
    let listUrl = [];
    for (let i = 0; i < file.length; i++) {
      let url = "http://localhost:3001/" + file[i].filename;
      listUrl.push(url);
    }
    let data = await StudentModel.create({ img: listUrl, name: name });
    res.send({ data });
  } catch (error) {
    res.send(error);
  }
};
//! delete UpLoad
exports.deleteData = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await StudentModel.findByIdAndDelete(id);
    let delImg = data.img;
    for (let i = 0; i < delImg.length; i++) {
      fs.unlink(`img/${delImg[i].slice(22)}`);
    }
    res.send({ data });
  } catch (error) {
    res.send(error);
  }
};

//! update UpLoad
exports.udateData = async (req, res) => {
  try {
    let file = req.files;
    let id = req.body.id;
    let name = req.body.name;

    let listUrl = [];
    for (let i = 0; i < file.length; i++) {
      let url = "http://localhost:3001/" + file[i].filename;
      listUrl.push(url);
    }

    let itemUpdate = await StudentModel.findById(id);
    let listImg = itemUpdate.img;

    let data;
    if (listUrl.length === 0 ) {
      data = await StudentModel.findByIdAndUpdate(id, {
        name: name,
        img: listImg,
      });
    } else {
      data = await StudentModel.findByIdAndUpdate(id, {
        name: name,
        img: listUrl,
      });
      for (let i = 0; i < listImg.length; i++) {
        fs.unlink(`img/${listImg[i].slice(22)}`);
      }
    }
    res.send(data);
  } catch (error) {
    res.send(error);
  }
};
//! search
exports.search = async (req, res) => {
  try {
    const textSearch = req.query.textSearch;
    

    const data = await StudentModel.find({
      name: { $regex: textSearch, $options: "i" },
    });
    res.send({ data, textSearch });
  } catch (error) {
    res.send({ error: error.message });
  }
};
