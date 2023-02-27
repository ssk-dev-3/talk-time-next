import epiloguesJson from "../../../assets/data/epilogues.json"

export type epilogueCard = {
  id: number,
  value: string,
  isOpen: boolean,
}

export const initializeEpilogueCard = (): epilogueCard => {
  const list = epiloguesJson["data"];
  const index = Math.floor(Math.random() * epiloguesJson["data"].length);
  const epilogue = list[index];
  return {isOpen: false, ...epilogue};
}
