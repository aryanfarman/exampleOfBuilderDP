import {Hero} from "./Hero";
import {ClanWorker} from "./worker";
import {Food} from "./food";

export class Clan {
    foods : Food[]
    workers : ClanWorker[]
    army : Hero[]
    name : string

    constructor() {
        this.foods=[]
        this.workers=[]
        this.name="clan"
        this.army=[]
    }

}