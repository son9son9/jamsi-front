import { ReactElement, useState } from "react";
import style from "./SideMenu.module.scss";
import { ReactComponent as CloseIcon } from "../../assets/svg/close-icon.svg";

export default function SideMenu(props: any): ReactElement {
  const toggleMenu = () => {
    props.sideMenuToggle();
  };
  // 모달 박스 클릭 시 모달 닫힘 방지
  const boxClickHandler = (e: any) => {
    e.stopPropagation();
  };

  return (
    <div className={style.container}>
      <div className={`${style.backdrop} ${props.isOpen ? style.active : ""}`} onClick={toggleMenu}></div>
      <div className={`${style.box} ${props.isOpen ? style.active : ""}`} onClick={boxClickHandler}>
        <button className={style["close-button"]} onClick={toggleMenu}>
          <CloseIcon width={16} height={16} stroke="#509bf8" />
        </button>
        <div className={style.content}>
          <h3>MAIN</h3>
          <ul>
            <li>채팅목록</li>
            <li>대화 내보내기</li>
            <li>신고하기</li>
            <li>채팅방 나가기</li>
          </ul>
          <h3>OTHERS</h3>
          <ul>
            <li>서비스 문의하기</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
