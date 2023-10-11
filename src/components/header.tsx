import { ReactElement } from "react";
import st from '../styles/components/Header.module.scss'
export default function Header() : ReactElement{
    return (
        <div className={st.container}>
            <div className={st.topBarContainer}>
                <button className={st.left}></button>
                <button className={st.center}></button>
                <button className={st.right}></button>
            </div>

        </div>
    )
}