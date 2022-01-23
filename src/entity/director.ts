import {ClanBuilderInterface} from "../interface/clanBuilder.interface";

export class Director {
    private builder: ClanBuilderInterface
    constructor(builder:ClanBuilderInterface){
        this.builder=builder
    }
    buildClanOnlyWithArmy(){
        this.builder.produceArmy(5)
    }
    buildFullClan(){
        this.builder.produceArmy(5)
        .produceWorker(5)
        .produceFood(5)
    }
}