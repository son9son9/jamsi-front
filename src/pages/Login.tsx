import React, { ReactElement } from "react";
import st from '../styles/pages/Login.module.scss'
import { Link } from "react-router-dom";

export default function Login():ReactElement{

    return (
        <div className={st.container}>
            <p>여행지에서 쓸 수 있는</p>
            <p>세상에서 가장 간단한 채팅 서비스</p>

            <img />

            <button>비회원으로 시작하기</button>
            <button>로그인하고 시작하기</button>

            <div className={st.joinContainer}>
                <p>계정이 없으신가요?</p>
                <Link to={'/'}>회원가입하기</Link>
            </div>
        </div>
    )
}