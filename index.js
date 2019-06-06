'use strict';
let userSubmit=0;

//the function uses get method to get img from the api
function getDogImgs(limit){

    if (limit>=1 && limit<=50) {
        let api = "https://dog.ceo/api/breeds/image/random/";
        let apiKey = api + limit;
        fetch(apiKey)
        .then(response=>response.json())
        .then(responseJson=>displayDogImgs(responseJson,limit))
        .catch(error=>alert('Oops somethings broken.'))
     }
     else {
         let apiKey = "https://dog.ceo/api/breeds/image/random/3";
         fetch(apiKey)
        .then(response=>response.json())
        .then(responseJson=>displayDogImgs(responseJson,3))
        .catch(error=>alert('Oops somethings broken.'))
     }   
}

//the func displays the response on the console
function displayDogImgs(responseJson,limit){
    console.log(responseJson);
   
// you need for loop to iterate through the images inside the message array
  for(let i=0; i< limit; i++){
    $(".randompic").append(`<img src="${responseJson.message[i]}">`)
  }
    $('.results').removeClass('hidden');  
}

//capture value from user input 
$('form'). on('click', '#submitButton', function(){ 

    userSubmit = $('#getNumber').val();

    //check if div has images , if yes- empty it 
    if ( $('.randompic').children().length != 0 ) {
        // div has no other tags inside it
        $(".randompic").empty();
    }

     getDogImgs(userSubmit);
});

//the func listens for form submission
function watchForm(){
    $('form').submit(event=>{
        event.preventDefault();     
});  
}

//the func loads watchForm() when app starts
$(function(){
    console.log("waiting for user to submit request");
    watchForm();
});