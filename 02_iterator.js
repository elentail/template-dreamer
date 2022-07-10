class RangeIterator {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  [Symbol.iterator]() {
    return this;
  }

  next() {
    const value = this.start;
    this.start += 1;
    return { value: value, done: value >= this.end };
  }
}

const range = new RangeIterator(3, 10);

for (const v of range) {
  console.log(v);
}
