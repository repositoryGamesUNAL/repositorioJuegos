type teams={
  min:number;
  max:number;
};
type related={
  description:string;
  url:string;
};
export type ModifyGame = {
    name: string;
    purpose: string;
    thematic: Array<string>;
    genre: string;
    materials: Array<string>;
    objectives: Array<string>;
    time: string;
    concepts: string;
    rules:Array<string>;
    winner:string;
    teams:teams;
    level:string;
    related:Array<related>;
  };