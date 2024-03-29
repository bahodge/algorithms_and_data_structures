import assert from "assert";

export type ComparatorFn<T> = (a: T, b: T) => number;

export type PriorityQueueParams<T> = {
  comparatorFn: ComparatorFn<T>;
  initialValues?: Array<T>;
};

type Optional<T> = T | null;

export class PriorityQueue<T> {
  values: Array<T> = [];
  private comparatorFn: ComparatorFn<T>;
  private length = 0;

  constructor(params: PriorityQueueParams<T>) {
    this.comparatorFn = params.comparatorFn;

    if (params.initialValues) {
      params.initialValues.forEach((value) => this.insert(value));
    }
  }

  insert(value: T) {
    // values.length is the capacity
    // length is the # of items we have
    if (this.values.length <= this.length) {
      // Exponentially expand the array
      this.values.length = Math.max(1, this.values.length * 2);
    }

    this.values[this.length++] = value;
    // this.length++;

    this.bubbleUp();
  }

  remove(): Optional<T> {
    if (this.length === 0) return null;

    const node = this.values[0];

    if (this.length === 1) {
      this.length = 0;
      this.values[0] = null as any;
      return node;
    }

    this.values[0] = this.values[this.length - 1];
    this.values[this.length - 1] = null as any;
    this.length--;

    this.bubbleDown();

    return node;
  }

  private bubbleUp() {
    // Start at the deepest node in the tree
    let index = this.length - 1;

    while (true) {
      const parent = this.parent(index);

      if (
        parent !== null &&
        this.comparatorFn(this.values[index], this.values[parent]) < 0
      ) {
        const tmp = this.values[index];
        this.values[index] = this.values[parent];
        this.values[parent] = tmp;
        index = parent;
        continue;
      }

      return;
    }
  }

  private parent(nodeIndex: number) {
    if (nodeIndex === 0) return null;

    // Math.floor((nodeIndex - 1) / 2);
    // logical right shift
    // Example: 5 is 0101 in binary
    // Shift the number right one position and prepend a 0: 0010
    // 0010 is 2 in decimal
    // Essentially, divide by 2 and round down
    return (nodeIndex - 1) >>> 1;
  }

  private leftChild(nodeIndex: number) {
    const child = nodeIndex * 2 + 1;
    if (child >= this.length) return null;
    return child;
  }

  private rightChild(nodeIndex: number) {
    const child = nodeIndex * 2 + 2;
    if (child >= this.length) return null;
    return child;
  }

  private bubbleDown() {
    let index = 0;

    while (true) {
      const left = this.leftChild(index);
      const right = this.rightChild(index);

      let swapCandidate = index;

      // Check if the current node's value is greater than the left child
      if (
        left !== null &&
        this.comparatorFn(this.values[swapCandidate], this.values[left]) > 0
      ) {
        swapCandidate = left;
      }

      // Compare the swap candidate and the right. If the right is not positive, then
      // we can simply keep the left as the swap candidate
      if (
        right !== null &&
        this.comparatorFn(this.values[swapCandidate], this.values[right]) > 0
      ) {
        swapCandidate = right;
      }

      if (swapCandidate !== index) {
        const tmp = this.values[index];
        this.values[index] = this.values[swapCandidate];
        this.values[swapCandidate] = tmp;
        index = swapCandidate;
        continue;
      }

      return;
    }
  }

  heapsort() {
    return Array.from({ length: this.length }, () => this.remove());
  }
}

const q = new PriorityQueue({
  comparatorFn: (a, b) => a - b,
  initialValues: [32, 5, 44, 10, 1],
});

let expectedQueue = [1, 5, 44, 32, 10];
q.values.forEach((value, index) => {
  console.log("value", value);
  assert(expectedQueue[index] === value);
});
assert(q.values.length === 8);
console.log(q.values);

// Remove all the items and ensure they are in the right priority order
console.log(q.heapsort());
