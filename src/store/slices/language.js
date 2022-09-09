import {createSlice} from '@reduxjs/toolkit'

export const language = createSlice({
  name: 'language',
  initialState: {language: 'EN'},
  reducers: {
    setENLanguage: state => {
      state.language = 'EN'
    },
    setUALanguage: state => {
      state.language = 'UA'
    }
  }
})

export const {setENLanguage, setUALanguage} = language.actions
