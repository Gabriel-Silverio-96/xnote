import { XnoteContext } from "common/context/XnoteContext";
import useLocalStorage from "common/hooks/useLocalStorage";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { IDialogTitle, INoteFields } from "../common/types/types.dialog";
import createNote from "../common/util/createNote";
import DialogCreateView from "./DialogCreateView";

const DialogCreate: React.FC = () => {
    const { isOpenDialogCreate, setIsOpenDialogCreate } = useContext(XnoteContext);
    const { register, formState: { errors }, handleSubmit, reset } = useForm<INoteFields>();
    const storage = JSON.parse(localStorage.getItem("xnote")!);
    const [, setStorage] = useLocalStorage<string | any[]>("xnote", "[]");

    const onClose = () => {
        setIsOpenDialogCreate(prevState => !prevState);
        reset();
    };

    const onSubmit = (data: IDialogTitle) => {
        const { title } = data;
        console.log(storage);
        
        setStorage([...storage, createNote(title)]);
        onClose();
    };
    
    return (
        <DialogCreateView
            {...{ register, errors, handleSubmit, onSubmit, onClose }}
            open={isOpenDialogCreate}
        />
    )
}

export default DialogCreate;