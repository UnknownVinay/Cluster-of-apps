export interface FileStructureDataInterface {
  id: number;
  name: string;
  isFolder: boolean;
  items?: FileStructureDataInterface[];
}

// export const enum FileStructureType {
//   Folder = "FOLDER",
//   File = "FILE",
// }

export interface FolderProps {
  handleInsertNode: (folderId: number, item: string, isFolder: boolean) => void;
  fileData: FileStructureDataInterface;
}
