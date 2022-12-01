import create from "zustand";

const useCurrencyStore = create((set) => ({
  currency: "zar",
  setCurrency: (newCurrency) => set((state) => ({ currency: newCurrency })),
}));

export default useCurrencyStore;
