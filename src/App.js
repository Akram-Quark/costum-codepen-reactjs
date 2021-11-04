import "./app.css";
import Editorspanel from "./components/Editorspanel.jsx";
import Previwpanel from "./components/Previewpanel.jsx";
import { useState, useEffect } from "react";

function App() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [srcDoc, setSrcDoc] = useState("");
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
          <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
          </html>
        `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <div className="app">
      <Editorspanel
        html={html}
        css={css}
        js={js}
        setHtml={setHtml}
        setCss={setCss}
        setJs={setJs}
      ></Editorspanel>
      <Previwpanel srcDoc={srcDoc}></Previwpanel>
    </div>
  );
}

export default App;
