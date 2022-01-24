# exampleOfBuilderDP

 The Builder pattern can be applied when construction of various representations of the product involves similar steps that differ only in the details.
 
 
 ```
 
 class Clan {
    Clan(clanWorker workers[]) { ... }
    Clan(clanWorker workers[], Hero army[]) { ... }
    Clan(clanWorker workers[], Hero army[], Food foods[]) { ... }
    // ...
 
 ```
 
 Make sure that you can clearly define the common construction steps for building all available Clans representations.
 Otherwise, you won’t be able to proceed with implementing the pattern.

Declare these steps in the base builder interface.

Create a concrete builder class for each of the product representations and implement their construction steps.

Don’t forget about implementing a method for fetching the result of the construction. 
The reason why this method can’t be declared inside the builder interface is that various builders may construct clans that don’t have a common interface.
Therefore, you don’t know what would be the return type for such a method.
However, if you’re dealing with clans from a single hierarchy, the fetching method can be safely added to the base interface.

Think about creating a director class. It may encapsulate various ways to construct a product using the same builder object.

The client code creates both the builder and the director objects.
Before construction starts, the client must pass a builder object to the director.
Usually, the client does this only once, via parameters of the director’s constructor.
The director uses the builder object in all further construction.
There’s an alternative approach, where the builder is passed directly to the construction method of the director.

The construction result can be obtained directly from the director only if all clans follow the same interface.
Otherwise, the client should fetch the result from the builder.

  we have an interface for our builder for building clans
 ```
  interface ClanBuilderInterface {
    produceFood(count:number):ClanBuilderInterface
    produceWorker(count:number):ClanBuilderInterface
    produceArmy(count:number):ClanBuilderInterface
}
  ```
  
 then implement our clanBuilder with that interface
 its a clan structure with fighting attitude
 we can have another one as defencive attitude
 and ...
 ```
  class FighterClanBuilder implements ClanBuilderInterface{
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
```
we have a director as manager that called for encapsulating building process that this class is optional 
```
class Director {
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
```
it holds our builder inside itself and use functions for buildings 
the reason that we have chain call functions is in every functions inside builder functions retturns the builder object

client simply create a director passes it a builder 
then use director functions
```
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
```
