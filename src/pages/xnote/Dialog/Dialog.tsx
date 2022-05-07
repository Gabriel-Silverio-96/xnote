import { XnoteContext } from "common/context/XnoteContext";
import React, { useContext } from "react";
import DialogView from "./DialogView";
import { IDialog } from "./types/types.component";

const Dialog: React.FC = () => {
    const { isOpenDialogNewNote, setIsOpenDialogNewNote } = useContext(XnoteContext);
    const onCloseDialogNewNote = () => setIsOpenDialogNewNote(prevState => !prevState);
    
    return <DialogView onClose={onCloseDialogNewNote} open={isOpenDialogNewNote} />
}

export default Dialog;