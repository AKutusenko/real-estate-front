import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from 'store'
import { IUser } from 'types'

interface UserState {
  user: IUser | null,
  isAuth: boolean
}

const initialState: UserState = {
  user: null,
  isAuth: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
      state.isAuth = true
    },
    signOut: (state) => {
      state.user = null,
        state.isAuth = false
    },
  },
})

export const { signIn, signOut } = userSlice.actions

export const selectCount = (state: RootState) => state.user;

export default userSlice.reducer