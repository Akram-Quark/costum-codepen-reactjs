import React from "react";

function Previewpanel({ srcDoc }) {
  return (
    <div className="downdiv">
      <div>
        {" "}
        <h3>preview</h3>{" "}
      </div>
      <iframe
        srcDoc={srcDoc}
        title="output"
        sandbox="allow-scripts"
        frameBorder="0"
        width="100%"
        height="100%"
      ></iframe>
    </div>
  );
}

export default Previewpanel;
