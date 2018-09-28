import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 
import React, { Component } from 'react';
import EditorConfig from '../../../config/Editor.js';

class Editor extends Component {
    constructor (props) {
      super(props)
      this.state = { editorHtml: ''}
      this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange (html) {
      this.setState({ editorHtml: html });
      console.log('html', html);
    }
    
    render () {
      return (
        <div>
          <ReactQuill 
            onChange={this.handleChange}
            value={this.state.editorHtml}
            modules={EditorConfig.modules}
            formats={EditorConfig.formats}
            placeholder={this.props.placeholder}
           />
         </div>
       )
    }
  }

  export default Editor;