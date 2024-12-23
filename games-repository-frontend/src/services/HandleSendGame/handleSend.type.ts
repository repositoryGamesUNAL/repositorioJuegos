type teams={
  min:number;
  max:number;
};
type related={
  description:string;
  url:string;
};
export type SendGame = {
  name: string;
  purpose: string[];
  thematic: string[];
  genre: string;
  materials: string[];
  objectives: string[];
  time: string;
  concepts: string[];
  rules:string[];
  winner:string;
  teams:teams;
  level:string;
  related:Array<related>;
  };

