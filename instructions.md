**Title: Implement Selection Sort Algorithm**

**Objective:**
Develop a JavaScript function to perform the Selection Sort algorithm on an array of numbers. The function should reorder the array such that it is sorted in ascending order and then return the sorted array.

**Given the following input:**

```javascript
const inputArray = [29, 10, 14, 37, 13];

console.log("Sorted Array:", selectionSort(inputArray));
```

For example, after implementing the `selectionSort` function, you should be able to produce the following output:
```javascript
[10, 13, 14, 29, 37]
```

<details>
<summary>Hints</summary>

1. Create a function `selectionSort(arr)` that takes an array `arr` as input.
2. Implement two nested loops: the outer loop traverses through the array, and the inner loop finds the minimum element from the unsorted part of the array.
3. In each iteration of the outer loop, assume the first unsorted element is the minimum and use the inner loop to check if any other unsorted element is smaller.
4. After finding the minimum element in the unsorted part, swap it with the first unsorted element.
5. Continue this process of finding the next smallest element and swapping it into the correct position until the array is sorted.
6. Test the function with `inputArray` to verify the sorting.

Remember, Selection Sort repeatedly finds the minimum element from the unsorted part and puts it at the beginning of the sorted part of the array.

</details>

**Challenge:**

- See if you can modify the algorithm to perform the sort in descending order.
- Experiment with arrays containing various types of elements, such as all negative numbers or all identical numbers, to ensure your algorithm works in different scenarios.