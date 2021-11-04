import React from "react";

import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";

function Editor({ value, onChange, name, language }) {
  return (
    <div className="editor">
      <div className="editor-titelbar">
        <h4>{name}</h4>
      </div>
      <CodeMirror
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          lineNumbers: true,
          theme: "material",
        }}
        onBeforeChange={(editor, data, value) => {
          onChange(value);
        }}
      />
    </div>
  );
}

export default Editor;
