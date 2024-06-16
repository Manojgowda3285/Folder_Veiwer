import React, { useState } from "react";
import { FolderData } from "../../Config";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import styles from "./Home.module.css";

interface FolderItem {
    id: number;
    name: string;
    logo?: JSX.Element;
    sub?: FolderItem[];
    child?: FolderItem[];
    sub_child?: FolderItem[];
}

interface FolderProps {
    folder: FolderItem;

    
}

const Folder: React.FC<FolderProps> = ({ folder }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const containerClass = folder.name === "Files" ? styles["folder-item-container"] : styles["folder-item-container-black"];

    return (
        <div className={containerClass}>
            <div onClick={handleToggle} className={styles["folder-item"]}>
                {folder.sub || folder.child || folder.sub_child ? (
                    <span  style={{ cursor: "pointer" }}>
                        {isOpen ? <ExpandLess sx={{ color: "white" }} /> : <ExpandMore sx={{ color: "white" }} />}
                    </span>
                ) : null}
                {folder.logo}
                <span style={{ marginLeft: "5px", color: "white" }}>{folder.name}</span>
            </div>
            {isOpen && (
                <>
                    {folder.child && folder.child.map((child) => <Folder key={child.id} folder={child} />)}
                    {folder.sub && folder.sub.map((sub) => <Folder key={sub.id} folder={sub} />)}
                    {folder.sub_child && folder.sub_child.map((subChild) => <Folder key={subChild.id} folder={subChild} />)}
                </>
            )}
        </div>
    );
};

const EventsList: React.FC = () => {
    return (
        <div > 
            {FolderData.map((folder) => (
                <Folder key={folder.id} folder={folder} />
            ))}
        </div>
    );
};

export default EventsList;
