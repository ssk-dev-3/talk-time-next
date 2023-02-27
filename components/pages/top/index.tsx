import Image from 'next/image';
import topStyle from './top.module.css';

type Props = {
  onClickNext: () => void
}

export default function Top({ onClickNext }: Props) {
  return (
    <div className={topStyle.topWrapper}>
      <div className={topStyle.content}>
        <div className={topStyle.titleArea}>
          <h2 className={topStyle.title}>talk time</h2>
          <p className={topStyle.subtitle}>1on1をもっと楽しく、有意義に</p>
        </div>
        <button type="button" className={topStyle.startButton} onClick={() => onClickNext()}>
          スタート
        </button>
      </div>
      <div className={topStyle.animationArea}>
        <div className={topStyle.balloons}>
          <div className={topStyle.speakerBalloon}></div>
          {/* <div className={topStyle.listenerBalloon}></div> */}
        </div>
        <figure className={topStyle.humanArea}>
          <Image src="/human_002.png" width={213} height={289} alt="speaker" priority className={topStyle.speaker}/>
          <Image src="/human_001.png" width={213} height={289} alt="listener" className={topStyle.listener}/>
        </figure>
      </div>
    </div>
  );
}
