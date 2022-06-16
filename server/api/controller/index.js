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

exports.uploadFile = async (req, res) => {
  try {
    let file = req.files;
    console.log(file);
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

// exports.uploadFile = async (req, res) => {
//   try {
//     let file = req.file;
//     let name = req.body.name;
//     let listUrl = [];

//       let url = "http://localhost:3001/" + file.filename;
//       listUrl.push(url);    
//     let data = await StudentModel.create({ img: listUrl, name: name });
//     console.log(data,'data');
//     res.send({ data });
//   } catch (error) {
//     res.send(error);
//   }
// };

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
    if (listUrl.length === 0) {
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

exports.deleteImage = async (req, res) => {
  try {
    let id = req.body.id;
    let key = req.body.key;
    let imageDelete = await StudentModel.findById(id);
    let listImg = imageDelete.img;
    fs.unlink(`img/${listImg[key].slice(22)}`);
    listImg.splice(key, 1);
    let dataDel;
    if (listImg.length === 0) {
      dataDel = await StudentModel.findByIdAndDelete(id);
    } else {
      dataDel = await StudentModel.findByIdAndUpdate(id, { img: listImg });
    }
    res.send({ dataDel });
  } catch (error) {
    res.send({ error: error.message });
  }
};
