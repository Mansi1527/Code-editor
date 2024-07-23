import React from 'react'
import { createContext,useState } from 'react'
export const DataContext=createContext();

const DataProvider = ({children}) => {
    const [html,setHtml]=useState('')
    const [css,setcss]=useState('')
    const [js,setjs]=useState('')
  return (
    <DataContext.Provider
    value={{
        html,setHtml,
        css,setcss,
        js,setjs
    }}
    >
{children}
    </DataContext.Provider>
  )
}

export default DataProvider
