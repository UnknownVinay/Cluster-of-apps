import { useState } from "react";
import type { FolderProps } from "../../../interfaces/file-structure-interface";
import style from "./folder.module.css";

const Folder = ({ handleInsertNode, fileData }: FolderProps) => {
  const [openFolder, setOpenFolder] = useState<boolean>(false);
  const [showInputBox, setShowInputBox] = useState<{
    isVisible: boolean;
    isFolder: null | boolean;
  }>({
    isVisible: false,
    isFolder: null,
  });

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setOpenFolder(true);
    setShowInputBox({
      isVisible: true,
      isFolder: (e.target as HTMLButtonElement).name === "folder",
    });
  };

  const onAddContent = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && (e.target as HTMLInputElement).value) {
      handleInsertNode(
        fileData.id,
        (e.target as HTMLInputElement).value,
        showInputBox.isFolder!
      );
      setShowInputBox({ ...showInputBox, isVisible: false, isFolder: null });
    }
  };

  if (fileData.isFolder) {
    return (
      <div className={style.container}>
        <div
          className={style.container__folder}
          onClick={() => setOpenFolder(!openFolder)}
        >
          <span>📁 {fileData.name}</span>
          <div>
            <button onClick={handleButtonClick} name="folder">
              Folder +
            </button>
            <button onClick={handleButtonClick} name="file">
              File +
            </button>
          </div>
        </div>

        <div className={style["container__folder--items"]}>
          {showInputBox.isVisible && (
            <div>
              <span>{showInputBox.isFolder ? "📁" : "📃"}</span>
              <input
                type="text"
                autoFocus
                onKeyDown={onAddContent}
                onBlur={() =>
                  setShowInputBox({
                    ...showInputBox,
                    isVisible: false,
                    isFolder: null,
                  })
                }
              />
            </div>
          )}
          {openFolder &&
            fileData.items?.map((item) => {
              return (
                <Folder
                  handleInsertNode={handleInsertNode}
                  fileData={item}
                  key={item.id}
                />
              );
            })}
        </div>
      </div>
    );
  } else {
    return <span className={style.container__file}>📃 {fileData.name}</span>;
  }
};

export default Folder;
