// ## 1. Find the Most Frequent Word in a Paragraph

// Consider the follwoing HTML:

// ```html
// <div id="text">This is a test. This test. is only a test.</div>
// ```

// Now, find and display the most frequently occurring word. Also put a count of occurance beside it.

// Hints:

// - Use document.querySelector() or getElementById() to select the paragraph.
// - Convert the text into an array of words.
// - Use querySelector() to display the most frequent word along with the count inside another `<div>`.

// const textElm = document.getElementById("text");
// const textWithoutDot = textElm.innerText.replaceAll(".", "");
// const textObj = textWithoutDot.split(" ").reduce((acc, word) => {
//   acc[word] = (acc[word] || 0) + 1;
//   return acc;
// }, {});

// const mostFrqWord = Object.keys(textObj).reduce((a, b) => {
//   return textObj[a] > textObj[b] ? a : b;
// });
// console.log(mostFrqWord);

// const pElem = document.createElement("p");
// pElem.textContent = `The most frequent word is "${mostFrqWord}" with count: ${textObj[mostFrqWord]}`;

// document.body.appendChild(pElem);

// const textELmes = document.getElementsByTagName("p");
// const textElmsArray = Array.from(textELmes);
// textElmsArray.forEach((p) => {
//   p.textContent = p.textContent.replaceAll("test", " *** ");
// });

// const aElms = document.querySelectorAll("a");
// console.log(aElms.length);
