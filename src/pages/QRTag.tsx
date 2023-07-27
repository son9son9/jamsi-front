import { ReactElement } from "react";
import { QRCodeSVG } from "qrcode.react";
import { ReactComponent as Clock } from "../assets/svg/clock-filled-icon.svg";
import { ReactComponent as Chain } from "../assets/svg/chain-icon.svg";
import style from "../styles/pages/QRTag.module.css";

export default function qrTag(): ReactElement {
  return (
    <div className={style.container}>
      <h1 className={style.title}>QR코드 스캔</h1>
      <p className={style.subtitle}>표시된 QR코드를 카메라로 스캔해주세요</p>
      <div className={style["clock-box"]}>
        <Clock width="20" height="20" fill="rgba(0,0,0,0.5)" />
        <span>&nbsp;9:58</span>
      </div>
      <div className={style["qr-wrapper"]}>
        <QRCodeSVG value="www.naver.com" size={180} bgColor={"#ffffff"} fgColor={"#3f3f3f"} includeMargin={false} />
      </div>
      <button type="button" className={style["qr-share-button"]}>
        <Chain width="24" height="24" />
        <span>&nbsp;QR코드 공유하기</span>
      </button>
    </div>
  );
}
