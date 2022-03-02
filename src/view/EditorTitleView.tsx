import React, { useContext } from "react";
import { EditorTitleContext } from "../controller/EditorTitleController";
import Styles from './EditorTitleView.module.css';

export const EditorTitleView: React.FunctionComponent = () => {
    const { title, placeholder, onChange } = useContext(EditorTitleContext);

    return (
        <div>
            <input 
            placeholder={placeholder} 
            onChange={onChange}
            className={Styles.title}
            ></input>
            <p className={Styles.titlePreview}>{title}</p>
        </div>
    )
}