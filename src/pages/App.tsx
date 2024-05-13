import React, { ReactElement } from "react";
import st from "../styles/pages/Home.module.scss";
import { Link } from "react-router-dom";

export default function Home(): ReactElement {
  return (
    <div className={st.container}>
      <p>이곳은 메인 페이지 입니다</p>
      <Link to="/chat">Chat 화면으로 넘어가기</Link>
    </div>
  );
}
