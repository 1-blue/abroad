"use client";

import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

import "@abroad/tailwind-config/editor.css";

const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
});

export interface IProps {
  value: string;
  placeholder?: string;
  readOnly?: boolean;
  handleChange: (content: string) => void;
}

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike"],
    [
      {
        color: [],
      },
      { background: [] },
    ],
    [{ list: "ordered" }, { list: "bullet" }],
    ["image", "box", "divider"],
    [{ align: [] }],
  ],
};

const Editor: React.FC<IProps> = (props) => {
  return (
    <ReactQuill
      value={props.value}
      onChange={(content) => {
        if (content != "<p><br></p>") props.handleChange(content);
      }}
      formats={[
        "size",
        "header",
        "bold",
        "italic",
        "underline",
        "strike",
        "list",
        "bullet",
        "color",
        "background",
        "image",
        "divider",
        "box",
        "div",
        "align",
      ]}
      modules={modules}
      theme="snow"
      readOnly={props.readOnly}
    />
  );
};

export default Editor;
