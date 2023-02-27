import { useState } from "react";
import Card from "../card";
import { TalkTheme } from "../talkTheme";
import reminderStyle from "./reminder.module.css";
import setcionStyle from "../section/section.module.css";

type Props = {
  mission: string,
  talkTheme: TalkTheme
}

const CONFIRM_MESSAGE = "ミッションは話し手には秘密です。\n画面共有を切ったり、確認時に画面を見られないようコッソリ確認してください。";

export default function Reminder({mission, talkTheme}: Props) {
  const [isShowReminder, setIsShowReminder] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleOnShowReminder = () => {
    if(isOpen) {
      setIsOpen(false);
    }
    setIsShowReminder(!isShowReminder);
  }

  const handleOnClickMissionCard = () => {
    if(isOpen) {
      setIsOpen(!isOpen);
      return;
    }

    if (!isOpen && confirm(CONFIRM_MESSAGE)) {
        setIsOpen(true);
    }
  }

  return (
    <div className={`${reminderStyle.reminder} ${isShowReminder ? "": reminderStyle.hidden}`}>
      <div className={reminderStyle.toggle} onClick={() => handleOnShowReminder()}></div>
      <div className={reminderStyle.content}>
        <div className={reminderStyle.missionArea} >
          <p className={setcionStyle.topic}>ミッション<small> ※クリックで表示/非表示</small></p>
          <Card
            header="mission"
            content={mission}
            isOpen={isOpen}
            onClickCard={() => {handleOnClickMissionCard()}}
            />
        </div>
        <div className={reminderStyle.talkThemeArea}>
          <p className={setcionStyle.topic}>トークテーマ</p>
          <div className={reminderStyle.talkThemeContentArea}>
            <div className={reminderStyle.talkThemeContent}>
              <p>{talkTheme.theme}</p>
            </div>
            <div className={reminderStyle.talkThemeContent}>
              <p>{talkTheme.emotion}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
