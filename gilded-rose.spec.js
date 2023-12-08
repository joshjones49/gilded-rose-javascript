import { expect, describe, it } from "vitest";
import { Item, items, updateQuality } from "./gilded-rose.js";


//BASIC ITEMS TEST======================================
describe("updateQuality", () => {
  it("reduces quality and sellIn of basic items by 1", () => {
    const testItem = new Item("basic", 5, 3);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(2);
    expect(testItem.sellIn).toBe(4);
  });
});

//AGED BRIE TESTS========================================
describe('updateQuality', () => {
  it('quality + 1, sellIn -1', () => {
    const testItem = new Item('Aged Brie', 5, 10)
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(11);
    expect(testItem.sellIn).toBe(4);
  });
});

describe('updateQuality', () => {
  it('quality + 2, sellIn = 0', () => {
    const testItem = new Item('Aged Brie', 0, 10)
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(12);
    expect(testItem.sellIn).toBe(0);
  });
});

//SULFURAS, HAND OF RAGNAROS==================================
describe('updateQuality', () => {
  it('Sulfuras does not change', () => {
    const testItem = new Item('Sulfuras, Hand of Ragnaros', 0, 80)
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(80);
    expect(testItem.sellIn).toBe(0);
  });
});

//BACKSTAGE TICKETS TESTS=========================================
describe('updateQuality', () => {
  it('quality ++, sellIn --', () => {
    const testItem = new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20)
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(21);
    expect(testItem.sellIn).toBe(14);
  });
});

describe('updateQuality', () => {
  it('quality +2, sellIn --', () => {
    const testItem = new Item('Backstage passes to a TAFKAL80ETC concert', 11, 20)
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(22);
    expect(testItem.sellIn).toBe(10);
  });
});


describe('updateQuality', () => {
  it('quality +3, sellIn --', () => {
    const testItem = new Item('Backstage passes to a TAFKAL80ETC concert', 6, 20)
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(23);
    expect(testItem.sellIn).toBe(5);
  });
});

//CONJURED ITEMS TEST===============================
describe('updateQuality', () => {
  it('quality -2, sellIn --', () => {
    const testItem = new Item('Conjured Item', 10, 10)
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(8);
    expect(testItem.sellIn).toBe(9);
  });
});

describe('updateQuality', () => {
  it('quality -4, sellIn --', () => {
    const testItem = new Item('Conjured Item', 0, 10)
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(6);
    expect(testItem.sellIn).toBe(0);
  });
});