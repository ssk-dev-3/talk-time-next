import { useState } from "react";
import Card from "../../utilities/card";
import { initializeMissionCards } from "../../utilities/mission";
import sectionStyle from "../../utilities/section/section.module.css";
import phaseStyle from "./phase1.module.css";

type Props = {
  onClickNext: () => void,
  decidedMission: (mission: string) => void,
}

const CONFIRM_MESSAGE = "ミッションは話し手には秘密です。\n画面共有を切ったり、確認時に画面を見られないようコッソリ確認してください。";
const ALERT_NOT_DECIDED_MISSION = "おや、ミッションがまだ決まっていないようです。\nミッションを決めてから次へ進みましょう。";

const missionList = initializeMissionCards();

export default function Phase1({ onClickNext, decidedMission }: Props) {
  const [missionCardList, setMissionCardList] = useState(missionList);
  const [isDecided, setIsDecided] = useState(false);

  const handleOnClickMissionCard = (selectedMission: string) => {
    if (isDecided) {
      return;
    }

    if (confirm(CONFIRM_MESSAGE)) {
      decidedMission(selectedMission);
      setIsDecided(true);

      const newMissionList = missionList.map((mission) => {
        if(mission.value === selectedMission) {
          mission.isOpen = !mission.isOpen;
        }
        return mission;
      });

      setMissionCardList(newMissionList);
    }
  }

  const handleOnClickNext = () => {
    isDecided ? onClickNext() : alert(ALERT_NOT_DECIDED_MISSION);
  }

  return(
    <section className={sectionStyle.section}>
      <div className={sectionStyle.headingArea}>
        <h2 className={sectionStyle.heading}>select mission</h2>
        <p className={sectionStyle.subheading}>聞き手のあなたにミッションを授けます</p>
      </div>
      <p className={sectionStyle.description}>
        トークを始める前に、聞き手のあなたにはミッションを授けます。<br/>
        <br/>
        下のミッションカードから好きなものを1枚選んでください。<br/>
        このトークタイムが終わるまでは、指示されたミッションを守ってトークを進めてくださいね。<br/>
        <br/>
        ちなみに、ミッションの内容は、秘密です。<br/>
        絶対に話し手にバレてはいけません。見られない様にコッソリ確認してくださいね。<br/>
        <br/>
        確認できたら次へ進みましょう。
      </p>
      <div className={sectionStyle.content}>
        <div className={sectionStyle.topic}>ミッション</div>
        <div className={phaseStyle.cardBoard}>
          {missionCardList.map((mission) => {
            return (
              <Card
                key={mission.id}
                header="mission"
                content={mission.value}
                isOpen={mission.isOpen}
                onClickCard={(content) => handleOnClickMissionCard(content)}
                />
            );
          })}
        </div>
      </div>
      <button type="button" className={sectionStyle.nextButton} onClick={() => handleOnClickNext()}>次へ進む</button>
    </section>
  )
}
