import React, { ReactElement } from 'react';
// import { QRCodeSVG } from 'qrcode.react';

import {Socket, connect} from 'socket.io-client';
import st from '../styles/pages/Home.module.scss'

// const socket:Socket = connect('http://localhost:4000')

export default function Home(): ReactElement {
  return (
    <div className={st.container}>
      <p>이곳은 메인 페이지 입니다</p>


      <div className={`${st.inputContainer} ${st.mt16}`}>
        {/* <QRCodeSVG value="www.naver.com"
          size={128}
          bgColor={"#ffffff"}
          fgColor={"#000000"}
          includeMargin={false}
        /> */}
      </div>

    </div>
  )
}
