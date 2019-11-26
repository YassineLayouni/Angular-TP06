export class Employe{
    public constructor(private _matricule:number,private _nom:string,private _fonction:string,private _expert:boolean){}
    public get matricule(){
        return this._matricule;
    }
    public get nom(){
        return this._nom;
    }
    public get fonction(){
        return this._fonction;
    }
    public get expert(){
        return this._expert;
    }
}