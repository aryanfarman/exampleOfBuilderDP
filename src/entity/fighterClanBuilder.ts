import {ClanBuilderInterface} from "../interface/clanBuilder.interface";
import {Clan} from "./clan";
import {Hero} from "./Hero";
import {ClanWorker} from "./worker";
import {Food} from "./food";

export class FighterClanBuilder implements ClanBuilderInterface{
    private clan : Clan
    constructor() {
        this.clan=new Clan()
    }
    reset(){
        this.clan = new Clan()
        return this
    }
    produceArmy(count:number): ClanBuilderInterface {
        for (let i = 0;i<count;i++)
         this.clan.army.push(new Hero("soldier"))
        return this
    }

    produceFood(count:number): ClanBuilderInterface {
        for (let i = 0;i<count;i++)
            this.clan.foods.push(new Food("banana",10))
        return this
    }

    produceWorker(count:number): ClanBuilderInterface {
        for (let i = 0;i<count;i++)
            this.clan.workers.push(new ClanWorker(`worker${count+1}`,"farm worker"))
        return this
    }
    build(clanName:string):Clan{
        const result = this.clan
        result.name=clanName
        this.reset()
        return result
    }

}