import { createContext, useContext } from "react"

const TabContext = createContext({})

const useTabContext = () => {
  return useContext(TabContext)
}

export { TabContext, useTabContext }
