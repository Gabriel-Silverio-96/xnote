import { XnoteContext } from "common/context/XnoteContext";
import React, { useContext } from "react";
import TabsView from "./TabsWrapperView";

const TabsWrapper: React.FC = () => {
    const { noteContent, setIsOpenDialogNewNote } = useContext(XnoteContext);

    const openDialogNewNote = () => {
        setIsOpenDialogNewNote(prevState => !prevState);
    }

    
    return <TabsView {... { noteContent, openDialogNewNote }} />
}

export default TabsWrapper;