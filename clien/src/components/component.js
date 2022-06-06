import React, { Component } from "react";

class Item extends Component {
  state = {
    name: "",
    id: "",
    nameUpdate: "",
    textSearch: "",
    listImgPreview: [],
    listImgUpLoad: [],
  };

  handlePreview(file) {
    let listUrl = [];
    this.setState({ listImgUpLoad: file });
    for (let i = 0; i < file.length; i++) {
      let url = URL.createObjectURL(file[i]);
      listUrl.push(url);
    }
    this.setState({ listImgPreview: listUrl });
  }

  handleUpLoad() {
    let imgUpLoad = this.state.listImgUpLoad;
    let form = new FormData();
    for (let i = 0; i < imgUpLoad.length; i++) {
      form.append("img", imgUpLoad[i]);
    }
    form.append("name", this.state.name);
    this.props.addData({ form: form });

    this.setState({listImgPreview : []})
    document.getElementById("id").value = ""
  }

  handleUpdate() {
    let imgUpdate = this.state.listImgUpLoad;
    let form = new FormData();
    for (let i = 0; i < imgUpdate.length; i++) {
      form.append("img", imgUpdate[i]);
    }
    form.append("name", this.state.nameUpdate);
    form.append("id", this.state.id);
    this.props.updateData({ form: form });

    this.setState({listImgPreview : [],nameUpdate: ""})

    
  }


  render() {
    let list = [];

    if (this.props.listData) {
      list = this.props.listData.map((item, key) => {
        return (
          <tr key={key}>
            <th>{key + 1}</th>
            <th>{item.name}</th>
            <th>
              {item.img.map((image, key) => {
                return (
                  <span key={key}>
                    <img
                      src={image}
                      alt="anh"
                      style={{ with: 150, height: 150 }}
                    />
                  </span>
                );
              })}
            </th>
            <th>
              <button
                onClick={() => {
                  this.props.deleteData(item._id);
                }}
              >
                Delete
              </button>
            </th>
            <th>
              <button
                onClick={() => {
                  this.setState({
                    id: item._id,
                    nameUpdate: item.name,
                    listImgPreview: item.img,
                  });
                }}
              >
                Put
              </button>
            </th>
          </tr>
        );
      });
    }
    return (
      <div>
        <div>
          <input
            type="file"
            multiple
            id = "id"
            onChange={(e) => this.handlePreview(e.target.files)}
          />
          {this.state.listImgPreview.map((img, key) => {
          return (
            <span key={key}>
              <img src={img} alt="nice" style={{ with: 150, height: 150 }} />
            </span>
          );
        })}
          <input
            placeholder="Tên ảnh"
            onChange={(e) => {
              this.setState({ name: e.target.value });
            }}
          />
          <button onClick={() => {this.handleUpLoad()}} >Submit File</button>
        </div>
        <div> 
          <input
            placeholder="Đổi Tên"
            onChange={(e) => {
              this.setState({ nameUpdate: e.target.value });
            }}
            value={this.state.nameUpdate}
          />
          <button onClick={() => this.handleUpdate()}>Update</button>
        </div>
        <div>
                    <input placeholder="Tìm Tên Ảnh" onChange={(e) => { this.setState({ textSearch: e.target.value }) }} />
                    <button onClick={() => { this.props.searchData({ textSearch: this.state.textSearch }) }}>SEARCH</button>
                </div>
        <table>
          <tbody>{list}</tbody>
        </table>
        
      </div>
    );
  }
}
export default Item;
