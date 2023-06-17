class Queue<T> {
  private array: T[] = [];

  push(item: T): void {
    this.array.push(item);
  }

  pop(): T | undefined {
    return this.array.shift();
  }
}

const queue = new Queue<number>();
queue.push(111);
queue.push(112);
console.log(queue.pop());
