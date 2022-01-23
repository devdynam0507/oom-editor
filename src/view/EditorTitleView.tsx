import React, { useContext } from "react";
import { EditorTitleContext } from "../controller/EditorTitleController";

export const EditorTitleView: React.FunctionComponent = () => {
    const { title, placeholder, onChange } = useContext(EditorTitleContext);

    return (
        <div>
            <input placeholder={placeholder} onChange={onChange}></input>
            <p>{title}</p>
        </div>
    )
}