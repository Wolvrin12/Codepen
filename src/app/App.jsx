import { useLocalStorage } from "../hooks/useLocalStorage";
import React, { useEffect, useState } from "react";
import { Editor } from "../components/Editor";
import "../styles/App.css";

const App = () => {
  const [html, setHtml] = useLocalStorage("html", "");
  const [css, setCss] = useLocalStorage("css", "");
  const [js, setJs] = useLocalStorage("js", "");
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
    return () => {
      clearTimeout(timeout);
    };
  }, [html, css, js]);

  return (
    <div className="app">
      <div className="app_pens pen">
        <Editor
          language="xml"
          displeyName="HTML"
          value={html}
          onChange={setHtml}
        />
        <Editor
          language="css"
          displeyName="CSS"
          value={css}
          onChange={setCss}
        />
        <Editor
          language="javascript"
          displeyName="JS"
          value={js}
          onChange={setJs}
        />
      </div>
      <div className="app_results pen">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

export default App;
