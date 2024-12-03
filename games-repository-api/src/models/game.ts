export default class Game{
    private _id:number = 0;
    private _name:string = ""; 
    private _date:string = ""; 
    private _purpose:string = ""; 
    private _thematic:object = {};
    private _genre:string = ""; 
    private _materials:object= {}; 
    private _objectives:string = ""; 
    private _time:string = "";
    constructor(entrance:{id:number,
        name:string, 
        date:string, 
        purpose:string, 
        thematic:object, 
        genre:string, 
        materials:object, 
        objectives:string, 
        time:string}){
        this._id = entrance["id"];
        this._name = entrance["name"];
        this._purpose = entrance["purpose"];
        this._date = entrance["date"];
    }

    get Id():number{
        return this._id;
    }
    get Name():string {
        return this._name;
    }
    get Purpose():string {
        return this._purpose;
    }
    get Date():string {
        return this._date;
    }
    get Thematic():object {
        return this._thematic;
    }
    get Genre():string {
        return this._genre;
    }
    get Materials():{} {
        return this._materials;
    }
    get Objectives():string {
        return this._date;
    }
    get Time():string {
        return this._date;
    }
    
    
    set Name(change:string){
        this._name = change;
    }
    set Purpose(change:string){
        this._purpose = change;
    }
    set Date(change:string){
        this._date = change;
    }
    set Thematic(change:object){
        this._thematic = change;
    }
    set Genre(change:string){
        this._genre = change;
    }
    set Materials(change:object){
        this._materials = change
    }
    set Objectives(change:string){
        this._date = change;
    }
    set Time(change:string){
    this._time = change;
    }
}