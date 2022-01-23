import {Director} from "./entity/director";
import {FighterClanBuilder} from "./entity/fighterClanBuilder";


const builder = new FighterClanBuilder()
const director = new Director(builder)
console.log("build Clan only with Army")
director.buildClanOnlyWithArmy()
let result = builder.build("warriors")
console.log(result)
console.log("build Clan with full feature")
director.buildFullClan()
result = builder.build("savages")
console.log(result)