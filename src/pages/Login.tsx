import React, { ReactElement, useState } from "react";
import st from '../styles/pages/Login.module.scss'
import Header from "../components/Header";
import {ReactComponent as UnCheckBox} from '../assets/images/uncheck-box.svg'
import {ReactComponent as ActiveCheckBox} from '../assets/images/active-check-box.svg'
import { Link } from "react-router-dom";

export default function Login(): ReactElement {
    const [leng,setLang] = useState<string>('kr');
    const [agree,setAgree] = useState<boolean>(false);

    function changeLen(leng:string):void{
        setLang(leng)
    }

    function toggleAgree():void{
        setAgree(p=>!p)
    }

    
    return (
        <div className={st.container}>
            <Header />

            <div className={st.line} />

            <p className={`${st.text1} ${st.mt20}`}>여행지에서 쓸 수 있는</p>
            <p className={`${st.text2} ${st.mt7}`}>세상에서 가장 간단한 채팅 서비스</p>

            <div className={`${st.dataBox} ${st.mt39}`}>
                <p>사용할 닉네임을 입력해주세요</p>
                <input className={`${st.nickNmInput} ${st.mt17}`} placeholder={'asdf'} />
            </div>

            <div className={`${st.dataBox} ${st.mt30}`}>
                <p>사용할 언어를 입력해주세요</p>
                <div className={`${st.languageContainer} ${st.mt13}`}>
                    <button onClick={()=>changeLen('kr')} className={`${leng === 'kr'?st.clinks:''}`}>Korean</button>
                    <button onClick={()=>changeLen('en')} className={`${leng === 'en'?st.clinks:''}`}>English</button>
                </div>
            </div>

            <div className={`${st.checkBoxContainer} ${st.mt39}`}>
                <div onClick={toggleAgree}>
                    {agree ? <ActiveCheckBox /> : <></>}
                    {!agree ? <UnCheckBox /> : <></>}
                </div>
                
                <div className={st.infoBox}>
                    <p onClick={toggleAgree} className={`${st.text3} ${st.ml7}`}>서비스 이용 약관에 동의합니다</p>
                    <p className={st.ml7}>
                        <span className={st.text4}>서비스 이용약관,</span>
                        <span className={st.text5}>개인정보 제3자 제공동의</span>
                    </p>

                </div>
            </div>

            <button className={`${st.startBtn} ${st.mt35} ${agree ? st.activeStart : ''}`}>시작하기</button>

            <button className={`${st.loginStartBtn} ${st.mt35}`}>로그인하고 시작하기</button>


        </div>
    )
}