console.log("Script attached");
/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"
let node1 = document.getElementById("node1");
node1.textContent = 'I used the getElementById("node1") method to access this.';

// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */
let node2 = document.getElementsByClassName("node2");
node2[0].textContent =
  'I used the getElementsByClassName("node2") method to access this.';

// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */
let h3Elements = document.getElementsByTagName("h3");
for (let ele of h3Elements) {
  ele.textContent =
    'I used the get ElelmentsByTagName("h3") method to access all of these.';
}
/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this document.createElement() and put this text inside "This node was created using the createElement() method"
let pElement = document.createElement("p");
let textElement = document.createTextNode("I am a <p> tag");
pElement.appendChild(textElement);

// TODO: Append the created node to the parent node using the element.appendChild() method
let parentElement = document.getElementById("parent");
parentElement.appendChild(pElement);
// TODO: Create a <a> element using this document.createElement() and put this text inside "I am a <a> tag"
let aElement = document.createElement("a");
// let textElement2 = document.createTextNode("I am an <a> tag");
// aElement.appendChild(textElement2);
aElement.textContent = "Random Link";

// BONUS: Add a link href to the <a>
aElement.href = "https://thisisdefinitelyareallink234134.pizza";
// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method
parentElement.insertBefore(aElement, pElement);

/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/
let parent3 = document.getElementById("exercise-container3");
let N1 = document.getElementById("N1");
// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"

// TODO: Remove the "New Child Node"

/*----------- Exercise #4: ANIMATIONS ----------- */
// TODO: Write your JavaScript here to make the red box go from left to right

// let interval = setInterval(move, 10);

// BONUS - Make the red box go all the way around the perimeter of the green box

/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message
// -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
// This div should be a 'modal' that covers the main content on the screen
// BONUS: The modal popup should be able to be closed. Refactor for this functionality
