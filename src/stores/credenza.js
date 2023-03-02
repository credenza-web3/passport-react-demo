import { create } from 'zustand'

export const useCredenzaPassportStore = create((set) => ({
  credenzaPassport: null,
  setCredenzaPassport: (credenzaPassport) => set({credenzaPassport}),
}))