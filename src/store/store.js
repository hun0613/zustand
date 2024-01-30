import { create } from "zustand";

const useBearStore = create((set, get) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  setCount: (num) => {
    const currCount = get().count;
    set({ count: Number(num) + Number(currCount) });
  },
}));

export { useBearStore };
