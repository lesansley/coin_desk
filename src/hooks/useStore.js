import create from "zustand";
import { DEFAULT_CURRENCY } from "../config";

const useStore = create((set) => ({
  currency: "zar",
  setCurrency: (newCurrency) => set((state) => ({ currency: newCurrency })),
  currencyList: [DEFAULT_CURRENCY],
  setCurrencyList: (newList) => set((state) => ({ currencyList: newList })),
  coinList: [],
  setCoinList: (newList) => set((state) => ({ coinList: newList })),
}));

export default useStore;
