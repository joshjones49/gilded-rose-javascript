import { expect, describe, it } from "vitest";
import { Item, items, updateQuality } from "./gilded-rose.js";

describe("updateQuality", () => {
  it("reduces quality and sellIn of basic items by 1", () => {
    const testItem = new Item("basic", 5, 3);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(2);
    expect(testItem.sellIn).toBe(4);
  });
});

describe('updateQuality', () => {
  it('decreases twice as fast', () => {
    const testItem = new Item('item', 0, 100);
    items.push(testItem)

    updateQuality();

    expect(testItem.quality).toBe(0)
  });
});

describe('updateQuality', () => {
  it('quality is not negative', () => {
    const testItem = new Item('item', 0, 2);
    items.push(testItem)

    updateQuality();

    expect(testItem.quality).toBe(0)
  });
});

describe('updateQuality', () => {
  it('quality does not go above 50', () => {
    const testItem = new Item('item', 7, 50)
    items.push(testItem)
    
    updateQuality();

    expect(testItem.quality).toBe(50)
  })
})


// - Once the `sellIn` days is less then zero, `quality` degrades twice as fast. !completed!
// - The `quality` of an item is never negative. !completed!
// - "Aged Brie" actually increases in `quality` the older it gets.
// - The `quality` of an item is never more than `50`.
// - "Sulfuras, Hand of Ragnaros," being a legendary item, never has to be sold nor does it decrease in `quality`.
// - "Backstage passes to a TAFKAL80ETC concert", increase in `quality` as it's `sellIn` value decreases:
//   - `quality` increases by `2` when there are `10` days or less left before the concert.
//   - `quality` increases by `3` when there are `5` days or less left before the concert.
//   - `quality` drops to `0` after the concert.