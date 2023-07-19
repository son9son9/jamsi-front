import React, { ReactElement, useEffect } from 'react';
import st from '../styles/pages/Home.module.css'

import { Socket, connect } from 'socket.io-client';

const socket: Socket = connect('http://localhost:4000')

type MsgData = {
    name: string;
    msg: string;
}
export default function Chat(): ReactElement {
    useEffect(() => {
        socket.on('msg', ({ name, msg }: MsgData) => {
            //채팅 수신
        })
        return (()=>{disconect()})
    }, [])

    /**
     * 메시지 send
     */
    function sendChat(): void {
        const sendData: MsgData = {
            name: '',
            msg: ''
        }
        socket.emit('msg', sendData)
    }

    /**
     * disconnect
     */
    function disconect():void{
        socket.disconnect();
    }
    return (
        <div className={st.container}>
            <p>이곳은 채팅 페이지 입니다</p>
            <div className={`${st.inputContainer} ${st.mt16}`}>
            </div>

        </div>
    )
}
