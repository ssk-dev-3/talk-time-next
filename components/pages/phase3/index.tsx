import { useState } from "react";
import Card from "../../utilities/card";
import Reminder from "../../utilities/reminder";
import { initializeBounceCards } from "../../utilities/bounce";
import { TalkTheme } from "../../utilities/talkTheme";
import sectionStyle from "../../utilities/section/section.module.css";
import phaseStyle from "./phase3.module.css";

type Props = {
  mission: string,
  talkTheme: TalkTheme
  onClickNext: () => void
}

const bounceList = initializeBounceCards();

export default function Phase3({ mission, talkTheme, onClickNext }: Props) {
  const [bounceCardList, setBounceCardList] = useState(bounceList);

  const handleOnClickCard = (content: string) => {
    const newCardList = bounceCardList.map((bounce) => {
      if(bounce.value === content) {
        bounce.isOpen = true;
      }

      return bounce;
    })

    setBounceCardList(newCardList);
  }

  return (
    <section className={sectionStyle.section}>
      <div className={sectionStyle.headingArea}>
        <h2 className={sectionStyle.heading}>let&apos;s talk time</h2>
        <p className={sectionStyle.subheading}>さぁ、トークを始めましょう</p>
      </div>
      <p className={sectionStyle.description}>
        これで準備は整いました。<br/>
        以下の手順でトークを進めてみてください。<br/>
        <br/>
        <strong>Step 1.</strong><br/>
        まずは話し手のあなたからトークテーマに沿ってお話を始めてください。<br/>
        「なぜそのトークテーマを選んだのか？」から始めるとスムーズに進むかもしれませんね。<br/>
        <br/>
        <strong>Step 2.</strong><br/>
        話し手のトークがひと段落したら、バウンスカードをめくっていきましょう。<br/>
        <br/>
        バウンスカードには、トークを弾ませるためのタネが書かれています。<br/>
        その内容について、頭に浮かんだこと、感じることをなんでも正直に話し合ってみてください。<br/>
        <br/>
        トークが終わったら、最後に振り返りを行うので、次へ進みましょう。<br/>
        <br/>
        <br/>
        あ、ミッション、テーマ、感情は、画面下部の矢印からいつでも確認できるようにしておきますね。<br/>
      </p>
      <div className={sectionStyle.content}>
        <div className={sectionStyle.topic}>バウンスカード</div>
        <div className={phaseStyle.bounceBoard}>
          {bounceCardList.map((bounce) => {
            return (
              <Card
                key={bounce.id}
                header="bounce"
                content={bounce.value}
                isOpen={bounce.isOpen}
                onClickCard={(content: string) => handleOnClickCard(content)}
              />
            );
          })}
        </div>
      </div>
      <button type="button" className={sectionStyle.nextButton} onClick={() => onClickNext()}>次へ進む</button>
      <Reminder
        mission={mission}
        talkTheme={talkTheme}
      />
    </section>
  );
}
