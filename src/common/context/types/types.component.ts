import { INoteFields } from "pages/xnote/common/types/types.dialog";
import React from "react";

export interface IXnoteContext {
    noteContent: INoteFields[];    
    setNoteContent: React.Dispatch<React.SetStateAction<INoteFields[]>>;

    isOpenDialogCreate: boolean;
    setIsOpenDialogCreate: React.Dispatch<React.SetStateAction<boolean>>;
    
    isOpenDialogEdit: boolean;
    setIsOpenDialogEdit: React.Dispatch<React.SetStateAction<boolean>>;

    noteEditDefaultValue: Omit<INoteFields, "content">;
    setNoteEditDefaultValue: React.Dispatch<React.SetStateAction<Omit<INoteFields, "content">>>;
}