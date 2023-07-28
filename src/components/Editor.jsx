import { faCompressAlt, faExpandAlt } from "@fortawesome/free-solid-svg-icons";
import { Controlled as ControlledEditor } from "react-codemirror2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "codemirror/mode/javascript/javascript";
import React, { useState } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/css/css";
import "../styles/Editor.css";

export const Editor = ({ displeyName, language, value, onChange }) => {
  const [open, setOpen] = useState(true);

  const handleChange = (context) => {
    onChange(context);
  };

  return (
    <div className={`editor ${open ? "" : "close"}`}>
      <div className="editor_title">
        {displeyName}
        <button
          type="button"
          className="editor_btn"
          onClick={() => setOpen((prevOpen) => !prevOpen)}
        >
          <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
        </button>
      </div>
      <ControlledEditor
        onBeforeChange={(editor, data, context) => handleChange(context)}
        value={value}
        className="editor_place"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          theme: "material",
          lineNumbers: true,
        }}
      />
    </div>
  );
};
