export type teamSizes = {
  min:number,
  max:number
}
export type filesRelated = {
  description:string,
  url:string
}
export type jsonGame = {
  id : number;
  name : string;
  concepts : string;
  purpose : string;
  objectives: string[];
  materials : string[];
  rules : string[];
  winner : string;
  genre : string;
  time : string;
  teams : teamSizes;
  level : string;
  related : filesRelated[];
  date : string;
  thematic : string[]
};
export type newGame = Omit<jsonGame, "id" | "date">;
export type changesOfGame = Partial<newGame>;
export type GameType = Game | null;
export class Game {
  private _id : number;
  private _name : string;
  private _concepts : string;
  private _purpose : string;
  private _objectives: string[];
  private _materials : string[];
  private _rules : string[];
  private _winner : string;
  private _genre : string;
  private _time : string;
  private _teams : teamSizes;
  private _level : string;
  private _related : filesRelated[];
  private _date : string;
  private _thematic : string[];

  constructor(entrance: jsonGame) {
    this._id = entrance["id"];
    this._name = entrance["name"];
    this._concepts = entrance["concepts"];
    this._purpose = entrance["purpose"];
    this._objectives = entrance["objectives"];
    this._materials = entrance["materials"];
    this._rules = entrance["rules"];
    this._winner = entrance["winner"];
    this._genre = entrance["genre"];
    this._time = entrance["time"];
    this._teams = entrance["teams"];
    this._level = entrance["level"];
    this._related = entrance["related"];
    this._date = entrance["date"];
    this._thematic = entrance["thematic"];
  }

  public get id(): number {
    return this._id;
  }

  public set id(value: number) {
    this._id = value;
  }

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
  }

  public get concepts(): string {
    return this._concepts;
  }

  public set concepts(value: string) {
    this._concepts = value;
  }

  public get purpose(): string {
    return this._purpose;
  }

  public set purpose(value: string) {
    this._purpose = value;
  }

  public get objectives(): string[] {
    return this._objectives;
  }

  public set objectives(value: string[]) {
    this._objectives = value;
  }

  public get materials(): string[] {
    return this._materials;
  }

  public set materials(value: string[]) {
    this._materials = value;
  }

  public get rules(): string[] {
    return this._rules;
  }

  public set rules(value: string[]) {
    this._rules = value;
  }

  public get winner(): string {
    return this._winner;
  }

  public set winner(value: string) {
    this._winner = value;
  }

  public get genre(): string {
    return this._genre;
  }

  public set genre(value: string) {
    this._genre = value;
  }

  public get time(): string {
    return this._time;
  }

  public set time(value: string) {
    this._time = value;
  }

  public get teams(): teamSizes {
    return this._teams;
  }

  public set teams(value: teamSizes) {
    this._teams = value;
  }

  public get level(): string {
    return this._level;
  }

  public set level(value: string) {
    this._level = value;
  }

  public get related(): filesRelated[] {
    return this._related;
  }

  public set related(value: filesRelated[]) {
    this._related = value;
  }

  public get date(): string {
    return this._date;
  }

  public set date(value: string) {
    this._date = value;
  }

  public get thematic(): string[] {
    return this._thematic;
  }

  public set thematic(value: string[]) {
    this._thematic = value;
  }
}
