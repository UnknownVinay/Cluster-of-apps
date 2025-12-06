import type { FileStructureDataInterface } from "../../interfaces/file-structure-interface";

const useTraverseTree = () => {
  const insertNode = (
    tree: FileStructureDataInterface,
    folderId: number,
    item: string,
    isFolder: boolean
  ) => {
    if (tree.id === folderId && tree.isFolder) {
      tree.items!.unshift({
        id: Math.random() * new Date().getTime(),
        name: item,
        isFolder,
        ...(isFolder ? { items: [] } : {}),
      });
      return tree;
    }
    let latest = [];
    latest = tree.items?.map((subtree) => {
      return insertNode(subtree, folderId, item, isFolder);
    });
    return { ...tree, items: latest };
  };

  return { insertNode };
};

export default useTraverseTree;
