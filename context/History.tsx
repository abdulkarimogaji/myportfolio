import { useRouter } from 'next/router'
import React, { createContext, useState, useEffect, useContext } from 'react'



const HistoryContext = createContext<[string, string, {x: number}]>({} as [string, string, {x:number}])


const getFromPosition = (previousRoute: string, currentRoute: string): number => {
  switch (currentRoute) {  
    case "/projects":
      if (previousRoute === "/") {
        return 1000
      }
      return -1000
    default: return 0
  }
  
}

export const HistoryProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const { pathname } = useRouter()

  const [history, setHistory] = useState<[string, string, {x: number}]>(["/", "/", {x: 0}])

  useEffect(() => {
    setHistory(prev => [prev[1], pathname, {x: getFromPosition(prev[1], pathname)}])
  }, [pathname])

  return (
    <HistoryContext.Provider
      value={history}
    >
      {children}
    </HistoryContext.Provider>
  )
}

export function useHistory(): [string, string, {x: number}] {
  const context = useContext(HistoryContext)
  return context
}