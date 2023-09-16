import React, { ReactElement, useEffect, useRef, useState } from "react";
import style from "../styles/pages/Chat.module.scss";
import { ReactComponent as Menu } from "../assets/svg/menu-icon.svg";
import { ReactComponent as Translate } from "../assets/svg/translate-icon.svg";
import { ReactComponent as Clip } from "../assets/svg/clip-icon.svg";
import { ReactComponent as Send } from "../assets/svg/send-icon.svg";
import Modal from "../components/modal/Modal";
import QrTag from "./QRTag";

// Message Model
type MessageInfo = {
  type: String;
  content: String;
};

export default function Chat(): ReactElement {
  const inchatRef = useRef<HTMLDivElement>(null);
  const inputBoxRef = useRef<HTMLInputElement>(null);

  // 메시지 인풋
  const [message, setMessage] = useState("");
  // 배열 형태로 메시지 받아오기
  const [messages, setMessages] = useState([
    {
      type: "notice",
      content: "도도한 너구리님이 채팅방에 입장하셨습니다.",
    },
    {
      type: "receive",
      content: "안녕하세요",
    },
    {
      type: "receive",
      content: "ㅎㅎㅎ",
    },
  ]);
  useEffect(() => {
    if (inchatRef.current) {
      inchatRef.current.scrollTop = inchatRef.current.scrollHeight;
    }
    // inchatRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };
  const sendMessage = () => {
    // 메시지 배열에 보낼 메시지 추가
    if (message !== "") {
      setMessages((msgs) => [...msgs, { type: "send", content: message }]);
    }
    // 메시지 인풋 초기화
    setMessage("");
  };
  const onEnterKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.nativeEvent.isComposing) {
      sendMessage();
    }
  };

  return (
    <div className={style.container}>
      <nav className={style.header}>
        <Menu width="30" height="30" stroke="rgb(30, 144, 255)" />
        <p>도도한 너구리</p>
        <Translate width="30" height="30" />
      </nav>
      <div className={style.inchat} ref={inchatRef}>
        {messages.map((msg, index) => {
          return <Message type={msg.type} content={msg.content} key={index} />;
        })}
      </div>
      <div className={style["input-bar"]}>
        <div className={style["clip"]}>
          <Clip width="24" height="24" stroke="rgb(30, 144, 255)" />
        </div>
        <div className={style["input-box"]}>
          <input
            type="text"
            className={style["msg-input"]}
            placeholder="메시지를 입력하세요"
            onChange={onInputChange}
            value={message}
            ref={inputBoxRef}
            onKeyDown={onEnterKeyDown}
          />
        </div>
        <button type="button" className={style["msg-send-btn"]} onClick={sendMessage}>
          <Send width="20" height="20" stroke="#FFF" />
        </button>
      </div>
      <Modal display={true} closable={true}>
        <QrTag />
      </Modal>
    </div>
  );
}

// 말풍선 컴포넌트
const Message = (props: MessageInfo) => {
  if (props.type === "notice") return <div className={style.notice}>{props.content}</div>;
  else if (props.type === "receive") return <div className={style.receive}>{props.content}</div>;
  else if (props.type === "send") return <div className={style.send}>{props.content}</div>;
  else return null;
};
