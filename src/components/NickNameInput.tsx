import { ReactElement } from "react";
import st from '../styles/components/NickNameInput.module.scss'
import { NickNameInputProps } from "../models/NickNameInputProps";
/**
 * 로그인 페이지에서 이메일을 입력하는 input component
 * @returns component
 */
export default function NickNameInput({ style }: NickNameInputProps): ReactElement {
    return (
        <div style={style} className={st.container}>
            <p className={st.text1}>사용할 닉네임을 입력해주세요</p>
            <input placeholder="랜덤닉네임" />
            <div className={st.smallLine} />
        </div>
    )
}