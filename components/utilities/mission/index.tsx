import missionsJson from "../../../assets/data/missions.json"

export type missionCard = {
  id: number,
  value: string,
  isOpen: boolean,
}

export const initializeMissionCards = (): missionCard[] => {
  const maxCount = 6;
  let list = missionsJson["data"].map((mission) => {
    return {isOpen: false, ...mission}
  });
  let cardList:missionCard[] = [];

  for(let i = 0; i < maxCount; i++) {
    const index = Math.floor(Math.random() * list.length);
    list[index].isOpen = false;
    cardList.push(list[index]);
    list.splice(index, 1);
  }
  return cardList;
}
