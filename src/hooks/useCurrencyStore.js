import create from "zustand";

const useCurrencyStore = create((set) => ({
  currency: "zar",
  setCurrency: () => set((currency) => ({ currency })),
}));

export default useCurrencyStore;
