'use client'

import {Dispatch, SetStateAction, createContext, useContext, useState} from 'react';

type AppContextType = {
  state: {
    name: string,
  },
  setState: Dispatch<SetStateAction<{ name: string; }>>,
}

const defaultContextValues = {
  state: {
    name: 'jack',
  },
  setState: () => {},
}


const AppContext = createContext<AppContextType>(defaultContextValues)

export const AppWrapper = ({children}: {children: React.ReactNode}) => {
  const [state, setState] = useState(defaultContextValues.state)

  return (
    <AppContext.Provider value={{state, setState}}>
        {children}
    </AppContext.Provider>
  )
}

export function useAppContext () {
  return useContext(AppContext)
}