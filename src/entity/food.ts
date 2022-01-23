export class Food {
    private  _name: string
    private  _kCal: number

    constructor(name: string, kCal: number) {
        this._kCal = kCal;
        this._name = name;
    }
    set name(name:string){
        this._name=name
    }
    set kCal(kCal:number){
        this._kCal=kCal
    }
}