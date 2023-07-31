import React, { ReactElement } from "react";
import st from '../styles/pages/Login.module.scss'
import { Link } from "react-router-dom";

export default function Login():ReactElement{

    return (
        <div className={st.container}>
            <p className={st.mt118}>여행지에서 쓸 수 있는</p>
            <p className={st.mt7}>세상에서 가장 간단한 채팅 서비스</p>

            <img className={st.mt26} />

            <button className={st.mt48}>비회원으로 시작하기</button>
            <button className={st.mt17}>로그인하고 시작하기</button>

            <div className={`${st.joinContainer} ${st.mt41}`}>
                <p>계정이 없으신가요?</p>
                <Link className={st.ml10} to={'/'}>회원가입하기</Link>
            </div>
        </div>
    )
}