import React, { createContext } from 'react'
// import Comp1 from './components/Context/Comp1'
// import Contextstate from './Contextstate'
import Contextfunction from './Contextfunction'
const FirstName = createContext()
const LastName = createContext()
const MiddleName = createContext()

export default function App() {
  return (
    <div>
      {/* <FirstName.Provider value={"Adfar"}>
        <LastName.Provider value={"Dar"}>
          <MiddleName.Provider value={"Rashid"}>
             <Comp1/>
             <Contextstate/>
          </MiddleName.Provider>
        </LastName.Provider>
      </FirstName.Provider> */}
      <Contextfunction/>
    </div>
  )
}
export {FirstName,LastName,MiddleName}