import { MutableRefObject, RefObject, useRef } from "react";
import cardStyle from "./card.module.css";

type Props = {
  header: string,
  content: string,
  isOpen: boolean,
  onClickCard: (content: string) => void,
}

export default function Card({ header, content, isOpen, onClickCard }: Props) {
  return (
    <div className={`${cardStyle.card} ${isOpen ? cardStyle.active : ""}`} onClick={() => onClickCard(content)}>
      <div className={cardStyle.front}>
        <div className={cardStyle.header}>{header}</div>
        <div className={cardStyle.content}>{content}</div>
      </div>
      <div className={cardStyle.back}>
        <div className={cardStyle.logo}>talk<br/>time</div>
      </div>
    </div>
  )
}
