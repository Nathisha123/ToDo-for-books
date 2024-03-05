//Selecting popup box , popup ovrelay and the plus button.

var popupoverlay= document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addpopupbutton =document.getElementById("add-popup-button")


//to add function to the plus button
addpopupbutton.addEventListener("click", function(){
    popupoverlay.style.display="block";
    popupbox.style.display="block"
})


//select cancel button
var cancelpopup = document.getElementById("cancel-popup")
 cancelpopup.addEventListener("click", function(event)
 {
    event.preventDefault()               
     /*the cancel button and the add button will keep loading on clicking even before applying any function
     becoz of the action in form . so to prevent that we are using a preventDefault() function so that it wont get loaded unneccesarily*/
 
     popupoverlay.style.display="none";
     popupbox.style.display="none"
    })



    //The contents should get added in the container
    var container=document.querySelector(".container")
    var addbook=document.getElementById("add-book")
    var booktitleinput = document.getElementById("book-title-input")
    var bookauthorinput=document.getElementById("book-author-input")
    var bookdescriptioninput=document.getElementById("book-description-input")


    addbook.addEventListener("click", function(event)
    {
        event.preventDefault()
        var div = document.createElement("div")
        div.setAttribute("class", "book-container")
        div.innerHTML=` <h2>${booktitleinput.value}</h2>
        <h5>${bookauthorinput.value}</h5>
        <p>
          ${bookdescriptioninput.value}
        </p>
        <button onclick="deletebook(event)">delete</button>`
        container.append(div)
        popupoverlay.style.display="none"
        popupbox.style.display="none"
    })


    function deletebook(event)
    {
        event.target.parentElement.remove()
    }
    