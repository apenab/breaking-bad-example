export interface CharacterListItemInterface {
  char_id: number;
  name: string;
  birthday: string;
  occupation: string[];
  img: string;
  status: Status;
  nickname: string;
  appearance: number[];
  portrayed: string;
  category: Category;
  better_call_saul_appearance: number[];
}

export interface CharacterDetailsInterface {
  char_id: number;
  name: string;
  birthday: string;
  occupation: string[];
  img: string;
  status: string;
  nickname: string;
  appearance: number[];
  portrayed: string;
  category: string;
  betterCallSaulAppearance: any[];
}

export enum Category {
  BetterCallSaul = "Better Call Saul",
  BreakingBad = "Breaking Bad",
  BreakingBadBetterCallSaul = "Breaking Bad, Better Call Saul",
}

export enum Status {
  Alive = "Alive",
  Deceased = "Deceased",
  PresumedDead = "Presumed dead",
  Unknown = "Unknown",
}
