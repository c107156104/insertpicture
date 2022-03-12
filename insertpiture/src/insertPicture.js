import React, { Component } from "react";

export default class insertPicture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isInsertCorrect: false,
      selectedFile: [],
      selectedProjectImg: [],
    };
  }
  fileSelect = (event) => {
    var files = event.target.files;
    console.log(files);
    this.setState({
      selectedFile: event.target.files,
    });

    for (let i = 0; i < files.length; i++) {
      var file = files[i];
      var reader = new FileReader();
      reader.readAsDataURL(file);
    }
  };
  ProjectImgSelect = (event) => {
    var files = event.target.files;
    if (files.length > 0) {
      this.setState({
        selectedProjectImg: event.target.files[0],
      });
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  render() {
    return (
      <form>
        <div>單張</div>
        <input type="file" onClick={this.ProjectImgSelect} />

        <div>多張</div>
        <input type="file" onClick={this.fileSelect} multiple />
      </form>
    );
  }
}
