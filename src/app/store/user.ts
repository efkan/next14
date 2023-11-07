import {create} from 'zustand'

export const userStore = create(set => ({
  user: {
    name: 'John Doe',
    role: 'admin',
    company: 'Acme Inc.',
  },
  setUser: (user: any) => set((state: any) => {
    console.log(state);
    console.log(user);

    return {user: {...state.user, ...user}}
  }),
  fetchUsers: async () => {
    const res = await fetch('/api/users')
    const users = await res.json()
    return users
  },
}))