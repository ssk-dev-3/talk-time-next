import bouncesJson from "../../../assets/data/bounces.json"

export type bounceCard = {
  id: number,
  value: string,
  isOpen: boolean,
}

export const initializeBounceCards = (): bounceCard[] => {
  const maxCount = 3;
  let list = bouncesJson["data"].map((bounce) => {
    return {isOpen: false, ...bounce}
  });
  let cardList:bounceCard[] = [];

  for(let i = 0; i < maxCount; i++) {
    const index = Math.floor(Math.random() * list.length);
    list[index].isOpen = false;
    cardList.push(list[index]);
    list.splice(index, 1);
  }
  return cardList;
}
