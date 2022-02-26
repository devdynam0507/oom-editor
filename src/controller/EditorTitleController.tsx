import React, { createContext, useState } from "react";
import EditorTitleModel from "../model/EditorTitleModel";

const EditorTitleContext = createContext<EditorTitleModel>({
    title: "",
    placeholder: "",
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {}
});

interface Props {
    children: JSX.Element | JSX.Element[];
}

const EditorTitleProvider = ({ children }: Props): JSX.Element => {
    const [title, setTitle] = useState('');
    const [placeholder, setPlaceholder] = useState('');

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value);
    }

    return (
        <EditorTitleContext.Provider
        value={{
            title,
            placeholder,
            onChange
        }}>
            {children}
        </EditorTitleContext.Provider>
    );
}

export { EditorTitleContext, EditorTitleProvider };