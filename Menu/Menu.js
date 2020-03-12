/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];


  // Step 1: Write a function that will create a menu component as seen below:

  // <div class="menu">
  //   <ul>
  //     {each menu item as a list item}
  //   </ul>
  // </div>

  // The function takes an array as its only argument.

  // Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  // Add those items to the <ul>

  // Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  // Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  // Step 5: return the menu component.

  // Step 6: add the menu component to the DOM.
  

  
  //function created navMaker
  function navMaker(array){
    //define new elements
      const menu = document.createElement('div');
      const nav = document.createElement('ul');
      //used dom selector to select menu-button
      const menuButton = document.querySelector('.menu-button');
      //forEach to iterate over the array to create the items
      array.forEach(item => {
        //setup new variable that will be an li element
        const menuItems = document.createElement('li')
        //attach the items to the nav
        nav.appendChild(menuItems);
        //set textContent to an item of the array
        menuItems.textContent = item;
      });
    //setup structure
    menu.appendChild(nav); 
      //menuItems are structured above in the forEach

    //add classes 
    menu.classList.add('menu');
    menuButton.classList.add('menu-button');

    //textContent is set for li in forEach

    //adding click event for menubutton
    menuButton.addEventListener('click', event => {
      menu.classList.toggle('menu--open');
      console.log()
    })

  return menu;
  }

const header = document.querySelector(".header");
header.appendChild(navMaker(menuItems));