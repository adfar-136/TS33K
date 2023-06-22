import React, { createContext,useState } from 'react'
import ProjectContext from './ProjectContext'
const ProjectContext1 = createContext()
export default function Contextfunction() {
  const [count,setCount] = useState(0)
  const [color,setColor] = useState("black")
  return (
    <div>
       <ProjectContext1.Provider value={{count,setCount,color,setColor}}>
         <ProjectContext/>
       </ProjectContext1.Provider>
    </div>
  )
}
export {ProjectContext1}
