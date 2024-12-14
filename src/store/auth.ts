import { create } from 'zustand';

export const useStore = create((set) => ({
  userLogin: null,
  setUserLogin: (userLoginData:any) => set({ userLogin: userLoginData }),
  setLogout: () => set({ userLogin: null }),
}));
