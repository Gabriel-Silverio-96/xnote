import { IXnoteContent } from "pages/xnote/types/types.component";
import React from "react";

export interface IXnoteContext {
    noteContent: Array<IXnoteContent>;    
    setNoteContent: React.Dispatch<React.SetStateAction<Array<IXnoteContent>>>;

    xnoteFields: IXnoteContent;
    setxnoteFields: React.Dispatch<React.SetStateAction<IXnoteContent>>
}