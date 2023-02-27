import themesJson from "../../../assets/data/themes.json";
import emotionsJson from "../../../assets/data/emotions.json";

export type TalkTheme = {
  category: string,
  theme: string,
  emotion: string,
}

type Theme = {
  id: number,
  category: string,
  value: string,
}

type Emotion = {
  id: number,
  value: string,
}

export const initializeCategoryList = (): string[] => {
  const categoryUniqueList = new Set(themesJson["data"].map((theme) => theme.category));
  return Array.from(categoryUniqueList);
}

export const initializeThemeList = (): Theme[] => {
  return themesJson["data"];
}

export const initializeEmotionList = (): Emotion[] => {
  return emotionsJson["data"];
}

export const getCategoryDisplay = (category: string): string => {
  const display = category === "private" ? "プライベート"
    : category === "work" ? "仕事"
    : category === "company" ? "会社"
    : "";

    return display;
}
