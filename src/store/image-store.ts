import { create } from "zustand";

interface IImageStoreType {
  url: string;
  setUrl: (newUrl: string) => void;
}

const useImageStore = create<IImageStoreType>((set) => ({
  url: "",
  setUrl: (newUrl) => set({ url: newUrl }),
}));

export default useImageStore;
