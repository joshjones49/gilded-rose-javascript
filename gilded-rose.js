



export class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export let items = [];

items.push(new Item("+5 Dexterity Vest", 10, 20));
items.push(new Item("Aged Brie", 2, 0));
items.push(new Item("Elixir of the Mongoose", 5, 7));
items.push(new Item("Sulfuras, Hand of Ragnaros", 0, 80));
items.push(new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20));
items.push(new Item("Conjured Mana Cake", 3, 6));

export const updateQuality = () => {
  for(let item of items) {
    switch (item.name) {
      
      case 'Sulfuras, Hand of Ragnaros':
        break;

      case 'Aged Brie':
        item.sellIn = Math.max(0, item.sellIn - 1);
        if(item.sellIn === 0) {
          item.quality = Math.min(50, item.quality + 2);
        } else {
          item.quality = Math.min(50, item.quality + 1);
        }
        break;

      case 'Backstage passes to a TAFKAL80ETC concert':
        item.sellIn--;
        if(item.sellIn < 0) {
          item.quality = 0;
        } else if (item.sellIn <= 5) {
          item.quality = Math.min(50, item.quality + 3);
        } else if (item.sellIn <= 10) {
          item.quality = Math.min(50, item.quality + 2)
        } else {
          item.quality = Math.min(50, item.quality + 1)
        }
        break;

        default:
          if (item.name.includes('Conjured')) {
            item.sellIn = Math.max(0, item.sellIn - 1);
            item.quality = Math.min(50, item.sellIn <= 0 ? item.quality - 4 : item.quality - 2);
          } else {
            item.sellIn = Math.max(0, item.sellIn - 1);
            item.quality = Math.min(50, item.quality - 1);
          }
          break;
    }
  }
}
