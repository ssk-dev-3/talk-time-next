import { useState } from "react";
import { initializeCategoryList, initializeThemeList, initializeEmotionList, getCategoryDisplay, TalkTheme } from "../../utilities/talkTheme";
import sectionStyle from "../../utilities/section/section.module.css";
import phaseStyle from "./phase2.module.css";

type Props = {
  onClickNext: () => void,
  decidedTalkTheme: (talkTheme: TalkTheme) => void,
}

export default function Phase2({ onClickNext, decidedTalkTheme }: Props) {
  const categoryList = initializeCategoryList();
  const themeList = initializeThemeList();
  const emotionList = initializeEmotionList();

  const [selectedCategory, setCategory] = useState(categoryList[0])
  const [selectedTheme, setTheme] = useState(themeList[0].value);
  const [selectedEmotion, setEmotion] = useState(emotionList[0].value);

  const handleOnClickNext = () => {
    decidedTalkTheme({
      category: selectedCategory,
      theme: selectedTheme,
      emotion: selectedEmotion
    });
    onClickNext();
  }

  return (
    <section className={sectionStyle.section}>
      <div className={sectionStyle.headingArea}>
        <h2 className={sectionStyle.heading}>select theme</h2>
        <p className={sectionStyle.subheading}>トークテーマを決めましょう</p>
      </div>
      <p className={sectionStyle.description}>
        続いて、話し手のあなたに今回のトークテーマを決めてもらいます。<br/>
        話したい「テーマ」と「感情」をそれぞれ選んでください。<br/>
        <br/>
        トークテーマが決まったら、スタートボタンを押してください。<br/>
      </p>
      <div className={sectionStyle.content}>
        <div className={sectionStyle.contentItem}>
          <div className={sectionStyle.topic}>テーマ</div>
          <div className={phaseStyle.themeBoard}>
            <div className={phaseStyle.categoryTab}>
              {categoryList.map((category) => {
                return (
                  <div key={category} className={phaseStyle.category}>
                    <input type="radio"
                      id={category}
                      name="category"
                      value={category}
                      checked={category === selectedCategory}
                      onChange={(e) => setCategory(e.target.value)}
                      />
                    <label htmlFor={category}>
                      {getCategoryDisplay(category)}
                    </label>
                  </div>
                );
              })}
            </div>
            <div className={phaseStyle.themeList}>
              {themeList.map((theme) => {
                return (theme.category === selectedCategory &&
                  <div key={theme.id} className={phaseStyle.theme}>
                    <input type="radio"
                      id={theme.value}
                      name="theme"
                      value={theme.value}
                      checked={theme.value === selectedTheme}
                      onChange={(e) => setTheme(e.target.value)}
                    />
                    <label htmlFor={theme.value}>{theme.value}</label>
                  </div>
              )})}
            </div>
          </div>
        </div>
        <div className={sectionStyle.contentItem}>
          <div className={sectionStyle.topic}>感情</div>
          <div className={phaseStyle.emotionBoard}>
            {emotionList.map((emotion) => {
              return (
                <div key={emotion.id} className={phaseStyle.emotion}>
                  <input type="radio"
                    id={emotion.value}
                    name="emotion"
                    value={emotion.value}
                    checked={emotion.value === selectedEmotion}
                    onChange={(e) => setEmotion(e.target.value)}
                  />
                  <label htmlFor={emotion.value}>{emotion.value}</label>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <button type="button" className={sectionStyle.nextButton} onClick={() => handleOnClickNext()}>次へ進む</button>
    </section>
  );
}
