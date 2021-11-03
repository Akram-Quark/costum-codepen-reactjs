import "./app.css";
import Editorspanel from "./components/Editorspanel.jsx";
import Previwpanel from "./components/Previewpanel.jsx";

function App() {
  return (
    <div className="app">
      <Editorspanel></Editorspanel>
      <Previwpanel></Previwpanel>
    </div>
  );
}

export default App;
