import React from "react";
import Editor from "./Editor";

function Editorspanel({ css, html, js, setHtml, setCss, setJs }) {
  return (
    <div className="upperdiv">
      <Editor
        value={html}
        onChange={setHtml}
        name="HTML"
        language="xml"
      ></Editor>
      <Editor value={css} onChange={setCss} name="CSS" language="css"></Editor>
      <Editor
        value={js}
        onChange={setJs}
        name="JS"
        language="javascript"
      ></Editor>
    </div>
  );
}

export default Editorspanel;
