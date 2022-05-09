import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogBody, DialogFooter, ButtonPrimary, ButtonClose, ButtonSecundary, Input } from "./styled";
import { IDialog } from "./types/types.component";

const DialogView: React.FC<any> = ({ open, register, errors, handleSubmit, onSubmit, onClose }) => {
    const isErrors = errors.tabName?.type === "required";
    return (
        <Dialog role="dialog" open={open}>
            <DialogContent>
                <DialogHeader>
                    <h3>Create new note</h3>
                    <ButtonClose onClick={onClose}>
                        <p>+</p>
                    </ButtonClose>
                </DialogHeader>
                <DialogBody>
                    <form onSubmit={handleSubmit(onSubmit)} id="createNote">
                        <Input
                            {
                            ...register("tabName",
                                { required: true })
                            }
                            type="text"
                            placeholder="Tab name"
                        />
                        {isErrors && <span>Tab name is required</span>}
                    </form>
                </DialogBody>

                <DialogFooter>
                    <ButtonSecundary onClick={onClose}>Close</ButtonSecundary>
                    <ButtonPrimary form="createNote">Save</ButtonPrimary>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
};

export default DialogView;