
//------------------Part One----------------------------------------------
//1a create a function called addMovie that takes in an event as a param
//1b create a variable called inputField that gets the input
//1c create another variable called movie to store store a new li element in it using document.createElement
//8a At the top of your JS file, select the HTML element with the message id using querySelector. Save it to a variable called message. Right now, it’s just an empty aside element. In the next steps, we’ll assign its textContent to send users different notifications.

let message = document.querySelector('#message')



function addMovie(event){
    event.preventDefault()
    let inputField = document.querySelector('input')
    let movie = document.createElement('li')
    //inputField = ''


//2a Next create a new span element and save it to a variable called movieTitle. 
//2b Set the textContent of movieTitle to be the value of inputField. 
//This will write what the user typed out into our new span.
//using .value is whatever the user typed 
// 7c Finally, we need to add this function as an event handler for every movie title. In the addMovie function, after you set the textContent of the span element, use addEventListener to listen for a click event on the span and run the crossOffMovie function.
let movieTitle = document.createElement('span')
movieTitle.textContent = inputField.value
movieTitle.addEventListener('click', crossOffMovie)

//Now we’ll need to append the movieTitle span to our movie element. 
//2c Use the appendChild method on movie, passing in movieTitle to attach the title to its parent.
////5a In the addMovie function, after appending the movieTitle to movie, use createElement to create a new button element and save it to a variable called deleteBtn.
//5b Set the textContent of deleteBtn to be the letter X.
//5c Use addEventListener to listen for a click event on the button and run the deleteMovie function. We will create that function later in this step.
//5d Now that the button has been created, use the appendChild method to add deleteBtn onto the movie element.

movie.appendChild(movieTitle)
let deleteBtn = document.createElement('button')
deleteBtn.textContent = 'x'
deleteBtn.addEventListener('click', deleteMovie)
movie.appendChild(deleteBtn)

//3a Then, use querySelector to find the ul element that already exists in our HTML
//3b and use appendChild to attach the movie element we created to the list.

//let ulElement = document.querySelector('ul')?
document.querySelector("ul").appendChild(movie)

}
//6a Finally, outside of the addMovie function, create a new function called deleteMovie that takes in an event parameter. 
//6b When we click the button, we want to remove the entire list item. Since the button is a child of the list item, we can use event.target.parentNode.remove() to remove the entire list item. 
//Node equals Element 
//8b In the deleteMovie function, add a line that assigns the textContent of message to be a string that says something like ‘Movie deleted!
function deleteMovie(event){
    event.target.parentNode.remove() 
    message.textContent = 'Movie deleted!'
}

//7a create a new function called crossOffMovie that takes in an event as a parameter. - Later, we will need to add this as an event handler for every movie title span.
//7b Call event.target.classList.toggle() passing in the checked class so that the class is added or removed if the title is clicked. (We want users to be able to “un-cross” movies off in case they did it by accident).
//8c In the crossOffMovie function, we’re going to do something similar, but we want to have different messages based off of whether 
//the movie was just checked off as ‘watched’ or if it was added back to the list. So let’s start by creating the structure for an if/else 
//block. Put it below where you toggled the checked class in the crossOffMovie function.
//8d The condition of your if statement should check if it’s true that the event.target.classList contains the checked class. - contains is a built-in method that can be used on classList, the structure for doing so is event.target.classList.contains(‘some-class-name’)
//9a If it’s true, then change message’s textContent to be a string that says something like ‘Movie watched!’
function crossOffMovie(event){
    event.target.classList.toggle('checked')
    if(event.target.classList.contains('checked')){
        message.textContent = "Movie watched!"
    } else {
        message.textContent = "Movie added back!"
    }
}
//4a Finally, outside of your function, use querySelector to select the form element 
//4b and then use addEventListener to listen for a submit event on the form element and run the addMovie function.

document.querySelector('form').addEventListener('submit', addMovie)












