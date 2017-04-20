import { assert, expect } from 'chai';
import { binarySearch, insertionSort } from '../lib';

describe('Binary Search', function() {

  it('should return correct value', function() {
    let array = [2, 5, 7, 8, 22, 45, 67, 122, 878];

    expect(binarySearch(array, 5)).to.equal(1);
  });

  it('should return -1 when not in array', function() {
    let array = [2, 5, 7, 8, 22, 45, 67, 122, 878];

    expect(binarySearch(array, 3)).to.equal(-1);
  });
    
});

describe('Insertion Sort', function() {

  it('should sort the array', function() {
    let unsorted_array = [2,4,3,6,5,1,9,7,8,0];
    let sorted_array = [0,1,2,3,4,5,6,7,8,9];

    expect(insertionSort(unsorted_array)).to.deep.equal(sorted_array);
  });

});