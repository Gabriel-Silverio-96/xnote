import { XnoteContext } from "common/context/XnoteContext";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { IDialogField } from "../common/types/types.dialog";
import DialogView from "./DialogView";
import { IDialog } from "./types/types.component";

const Dialog: React.FC = () => {
    const { isOpenDialogNewNote, setIsOpenDialogNewNote } = useContext(XnoteContext);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onClose = () => {
        setIsOpenDialogNewNote(prevState => !prevState);
        reset();
    };

    const onSubmit = (data: IDialogField) => console.log(data);

    return <DialogView
        {...{ register, errors, handleSubmit, onSubmit, onClose }}
        open={isOpenDialogNewNote}
    />
}

export default Dialog;