export type jsonGame = {
    id:number,
    date:string, 
    name:string, 
    purpose:string, 
    thematic:object, 
    genre:string, 
    materials:object, 
    objectives:string, 
    time:string
};
export type newGame = Omit<jsonGame,"id"|"date">;  
export type changesOfGame = Partial<newGame>;
export type GameType = Game |null;
export class Game{

    private _id:number;
    private _name:string; 
    private _date:string; 
    private _purpose:string; 
    private _thematic:object;
    private _genre:string; 
    private _materials:object; 
    private _objectives:string; 
    private _time:string ;

    constructor(entrance:jsonGame){
        this._id = entrance["id"];
        this._name = entrance["name"];
        this._date = entrance["date"];
        this._purpose = entrance["purpose"];
        this._thematic = entrance["thematic"];
        this._genre= entrance["genre"];
        this._materials= entrance["materials"];
        this._objectives = entrance["objectives"];
        this._time = entrance["time"];

    }

    get id():number{
        return this._id;
    }
    get name():string {
        return this._name;
    }
    get purpose():string {
        return this._purpose;
    }
    get date():string {
        return this._date;
    }
    get thematic():object {
        return this._thematic;
    }
    get genre():string {
        return this._genre;
    }
    get materials():{} {
        return this._materials;
    }
    get objectives():string {
        return this._date;
    }
    get time():string {
        return this._date;
    }
    
    
    set name(change:string){
        this._name = change;
    }
    set purpose(change:string){
        this._purpose = change;
    }
    set date(change:string){
        this._date = change;
    }
    set thematic(change:object){
        this._thematic = change;
    }
    set genre(change:string){
        this._genre = change;
    }
    set materials(change:object){
        this._materials = change
    }
    set objectives(change:string){
        this._date = change;
    }
    set time(change:string){
    this._time = change;
    }
}
