import { IXnoteContent } from "pages/xnote/types/types.component";
import React, {createContext, useState} from "react";
import { IXnoteContext } from "./types/types.component";

export const XnoteContext = createContext({} as IXnoteContext);

export const XnoteProvider: React.FC = ({ children }) => {
    const [noteContent, setNoteContent] = useState<IXnoteContent[]>([]);

    return (
        <XnoteContext.Provider value={{noteContent, setNoteContent}}>
            {children}
        </XnoteContext.Provider>
    )
};