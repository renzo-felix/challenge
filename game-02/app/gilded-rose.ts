export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}



export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateAgedBrie(Item:Item): void{
        Item.sellIn=Item.sellIn-1
        if (Item.quality < 50) {
           Item.quality++
        }
        if (Item.sellIn < 0 && Item.quality < 50) {
            Item.quality += 1;
        }
        return
    }
    updateBackstagePass(Item:Item): void{
        Item.sellIn=Item.sellIn-1
        if (Item.sellIn < 0){
            Item.quality =0
            return
        }
        let qualityIncrease = 1;
        if (Item.sellIn < 11){
            qualityIncrease++
        }
        if (Item.sellIn < 6){
            qualityIncrease++
        }
        Item.quality = Math.min(Item.quality + qualityIncrease, 50);

    }
    updateSulfuras(Item:Item): void{
        Item.quality = 80
        return
    }
    updateConjured(Item:Item): void{
        Item.sellIn=Item.sellIn-1
        Item.quality -= Item.sellIn < 0 ? 4 : 2; 
        if (Item.quality < 0) {
            Item.quality = 0; 
        }
        return

    }
    updateNormalItem(Item:Item): void{
        Item.sellIn=Item.sellIn-1
        Item.quality -= Item.sellIn < 0 ? 2 : 1; 
        if (Item.quality < 0) {
            Item.quality = 0; 
        }
        return
    }

    updateQuality() {

        for (let i = 0; i < this.items.length; i++){
            switch (this.items[i].name){

                case 'Aged Brie':
                    this.updateAgedBrie(this.items[i])
                    break
                case 'Backstage passes to a TAFKAL80ETC concert':
                    this.updateBackstagePass(this.items[i])
                    break
                case 'Sulfuras, Hand of Ragnaros':
                    this.updateSulfuras(this.items[i])
                    break
                case 'Conjured':        
                        this.updateConjured(this.items[i])
                        break
                default: { 
                    this.updateNormalItem(this.items[i])
                        break; 
                     }
            }
        }
        
        return this.items;
    }
}
