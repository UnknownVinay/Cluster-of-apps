import style from "./file-structure-component.module.css";
import { FileStructureData } from "../../utils/file-structure-data";
import { useState } from "react";
import type { FileStructureDataInterface } from "../../interfaces/file-structure-interface";
import Folder from "../../components/file-structure-components/folder-component/folder";
import useTraverseTree from "../../hooks/file-structure-hooks/use-traverse-tree";

const FileStructure = () => {
  const [fileData, setFileData] =
    useState<FileStructureDataInterface>(FileStructureData);
  const { insertNode } = useTraverseTree();

  const handleInsertNode = (
    folderId: number,
    item: string,
    isFolder: boolean
  ) => {
    const updatedTree = insertNode(fileData, folderId, item, isFolder);
    setFileData(updatedTree);
  };
  return (
    <>
      <Folder handleInsertNode={handleInsertNode} fileData={fileData} />
    </>
  );
};

export default FileStructure;
