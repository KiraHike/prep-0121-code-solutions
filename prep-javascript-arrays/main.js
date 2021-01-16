var languagesArray = ['html', 'css', 'javascript', 'react', 'node.js'];

console.log(languagesArray);
console.log('Array Length:', languagesArray.length);

languagesArray.push('C#', 'php');
console.log('Updated Array', languagesArray);

languagesArray.pop();
console.log('Last Index Removed:', languagesArray);

languagesArray.splice(0, 0, 'C++');
console.log('Added Element to Front:', languagesArray);

languagesArray.splice(0, 1);
console.log('Removed First Element:', languagesArray);

var thirdElement = languagesArray[2];
console.log('3rd Element in languagesArray:', thirdElement);

var arrayLength = languagesArray.length;
console.log('The final length of the array is', arrayLength);

var lastItem = languagesArray[arrayLength - 1];
console.log('The last item in the array is', lastItem);
