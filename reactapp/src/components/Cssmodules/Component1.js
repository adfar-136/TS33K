import React from 'react'
import style from "./Component1.module.css"
import style1 from "./Component2.module.css"
export default function Component1() {
  return (
    <div className={style.container1}>
        <h1 className={style.heading1}>Adfar</h1>
        <p className={style.para1}>hello</p>
        <h1 className={style1.mini}>Hello good morning</h1>
        <h1 className={style["mini-container"]}>xzddfdsfds</h1>

    </div>
  )
}
