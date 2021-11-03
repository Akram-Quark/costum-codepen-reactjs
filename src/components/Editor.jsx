import React from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";

function Editor() {
  return (
    <div className="editor">
      <div className="editor-titelbar">
        <h3>HTML</h3>
        <div></div>
      </div>
      <CodeMirror
        value={this.state.value}
        options={options}
        onBeforeChange={(editor, data, value) => {
          this.setState({ value });
        }}
        onChange={(editor, data, value) => {}}
      />
    </div>
  );
}

export default Editor;
