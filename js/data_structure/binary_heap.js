class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(value) {
    this.values.push(value);
    this.bubbleUp();
  }
  bubbleUp() {
    /*
          0   1  2  3   4
          39 12 45  7  18

          parent = n
          leftChild = 2*n + 1
          rightChild = 2*n + 2

          child = n
          parent = Math.floor((n - 1) / 2)



                      39
                  12      45
              

        bubble the last element:
         keep comparing it with the parent, if it's greater than parent, swap it
    
    */
    const length = this.values.length;
    const last = this.values[length - 1];
    let idx = length - 1;

    while(idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);

      // compare it with its parent
      if(this.values[idx] > this.values[parentIdx]) {
        this.values[idx] = this.values[parentIdx];
        this.values[parentIdx] = last;
        // break out immediately
      } else {
        break;
      }
      idx = parentIdx;
    }

  }
  extractMax() {
    const length = this.values.length;
    const max = this.values[0];
    if(length > 0) {
      // swap the max with the last item, and start bubble down the new max
      this.values[0] = this.values[length-1];
      this.values[length-1] = max;
      this.values.pop();
      this.bubbleDown();
    }
    return max;
  }

  bubbleDown() {
    // find the greater child
    const length = this.values.length;
    let idx = 0;
    const top = this.values[0];

    while(idx < length) {

      let leftChildIdx, rightChildIdx;
      let leftChild, rightChild;
      let swapIdx;
      leftChildIdx = 2 * idx + 1;
      rightChildIdx = 2 * idx + 2;
      
      if(leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if(leftChild > this.values[idx]) {
          swapIdx = leftChildIdx;
        }
      }

      if(rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        // to make sure we only swap with the greater child
        // if we already swap with left child, check if right child is greater then left child
        // if we have not swapped, check if right child is greater than parent
        if((swapIdx && rightChild > leftChild ) || 
          (!swapIdx && rightChild > this.values[idx])) {
            swapIdx = rightChildIdx;
          }
      }
      // if no swap happens, break right away
      if(!swapIdx) break;

      // swap the parent with the child
      this.values[idx] = this.values[swapIdx];
      this.values[swapIdx] = top;
      idx = swapIdx;
    }

  }


}

/*
      [5, 12]
      index = 1
      parentIndex = 0

      12 > 5 => swap(5, 12)
      [12, 5]
      index = 0
      parentIndex = 0

                       41
                  39        12
             18      27   33  

             41 39 33 18 27 12

             55 39 41 18 27 12 33
*/

const heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
console.log(heap.extractMax());

// console.log('heap ', heap.values);
heap.extractMax();
heap.extractMax();
heap.extractMax();
heap.extractMax();
heap.extractMax();
heap.extractMax();
heap.extractMax();
heap.extractMax();
heap.extractMax();
heap.extractMax();
heap.extractMax();

console.log('heap ', heap.values);