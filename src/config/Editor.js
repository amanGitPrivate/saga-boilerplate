let Editor = {};

Editor.modules = {
    toolbar: [
      ['bold', 'italic', 'underline'],
      [{'list': 'bullet'}],
      ['link']
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    }
  }
  /* 
   * Quill editor formats
   * See https://quilljs.com/docs/formats/
   */
  Editor.formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline',
    'list', 'bullet', 'indent',
    'link', 'image', 'video'
  ]

 export default Editor; 