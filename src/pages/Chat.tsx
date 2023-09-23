import React, { ReactElement, useEffect } from 'react';
import st from '../styles/pages/Home.module.scss'
// import StompJs, { StompSubscription } from '@stomp/stompjs'


// const client:StompJs.Client = new StompJs.Client({
//     brokerURL: 'ws://local.corsmarket.ml/api/ws',
//     connectHeaders: {
//       login: 'user',
//       passcode: 'password',
//     },
//     debug: function (str) {
//       console.log(str);
//     },
//     reconnectDelay: 5000, //자동 재 연결
//     heartbeatIncoming: 4000,
//     heartbeatOutgoing: 4000,
//   });

export default function Chat(): ReactElement {
    // client.onConnect = function (frame) {

    // };

    // client.onStompError = function (frame) {
    //   console.log('Broker reported error: ' + frame.headers['message']);
    //   console.log('Additional details: ' + frame.body);
    // };
    // client.activate();

    // client.publish({
    //     destination: '/topic/general',
    //     body: 'Hello world',
    //     headers: { priority: '9' },
    //   });

    //   const subscription:StompSubscription = client.subscribe('/queue/test', ()=>{

    //   });

    return (
        <div className={st.container}>
            <p>이곳은 채팅 페이지 입니다</p>
            <div className={`${st.inputContainer} ${st.mt16}`}>
            </div>

        </div>
    )
}
