import { useState } from "react";
import Card from "../../utilities/card";
import { initializeEpilogueCard } from "../../utilities/epilogue";
import sectionStyle from "../../utilities/section/section.module.css";

type Props = {
  mission: string,
  onClickNext: () => void
}

const epilogueCard = initializeEpilogueCard();

export default function Phase4({ mission, onClickNext }: Props) {
  const [isOpenEpilogueCard, setIsOpenEpilogueCard] = useState(epilogueCard.isOpen);
  const [isOpenMissionCard, setIsOpenMissionCard] = useState(false);

  return (
    <section className={sectionStyle.section}>
      <div className={sectionStyle.headingArea}>
        <h2 className={sectionStyle.heading}>close</h2>
        <p className={sectionStyle.subheading}>今回のトークを振り返ってみましょう</p>
      </div>
      <p className={sectionStyle.description}>
        お疲れ様でした。
        今回のトークはいかがでしたか？<br/>
        <br/>
        せっかくなので、これからの糧になるよう少し振り返ってみましょう。<br/>
        <br/>
        まず、エピローグテーマをめくって<br/>
        書かれた内容について、話し手のあなたが思うままに話してみてください。<br/>
        <br/>
        その後、聞き手のあなたに授けたミッションをオープンします。<br/>
        聞き手がきちんとミッションを遂行できたかどうかを話し合ってみてください。<br/>
      </p>
      <div className={sectionStyle.content}>
        <div className={sectionStyle.contentItem}>
          <div className={sectionStyle.topic}>エピローグテーマ</div>
          <Card
            header="epilogue"
            content={epilogueCard.value}
            isOpen={isOpenEpilogueCard}
            onClickCard={() => {setIsOpenEpilogueCard(true)}}
          />
        </div>
        <div className={sectionStyle.contentItem}>
          <div className={sectionStyle.topic}>ミッション</div>
          <Card
            header="mission"
            content={mission}
            isOpen={isOpenMissionCard}
            onClickCard={() => {setIsOpenMissionCard(true)}}
          />
        </div>
      </div>
      <button type="button" className={sectionStyle.nextButton} onClick={() => onClickNext()}>TOPへ戻る</button>
    </section>
  );
}
