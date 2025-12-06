import type { FileStructureDataInterface } from "../interfaces/file-structure-interface";
// import { FileStructureType } from "../interfaces/file-structure-interface";

export const FileStructureData: FileStructureDataInterface = {
  id: 1,
  name: "root",
  isFolder: true,
  items: [
    {
      id: 2,
      name: "public",
      isFolder: true,
      items: [
        {
          id: 5,
          name: "Nested public",
          isFolder: true,
          items: [],
        },
        {
          id: 6,
          name: "file1.txt",
          isFolder: false,
        },
        {
          id: 7,
          name: "file2.txt",
          isFolder: false,
        },
      ],
    },
    {
      id: 3,
      name: "src",
      isFolder: true,
      items: [
        {
          id: 8,
          name: "App.tsx",
          isFolder: false,
        },
        {
          id: 9,
          name: "Main.tsx",
          isFolder: false,
        },
        {
          id: 10,
          name: "Component.tsx",
          isFolder: false,
        },
      ],
    },
    {
      id: 4,
      name: "package.json",
      isFolder: false,
    },
  ],
};
