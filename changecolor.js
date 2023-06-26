/* each function is for each player section */
/* the function checks the div's background color through the player id in the div */
/* changes background color to a new background color correspondingly */
function changeKim(){
    if (document.getElementById("kim").style.background == 'white'){
        document.getElementById("kim").style.background = 'maroon';
        return
    }
    else if (document.getElementById("kim").style.background == 'maroon'){
        document.getElementById("kim").style.background = 'pink';
        return
    }
    else {
        document.getElementById("kim").style.background = 'white';
        return
    }
}

function changePark(){
    if (document.getElementById("park").style.background == 'white'){
        document.getElementById("park").style.background = 'red';
        return
    }
    else if (document.getElementById("park").style.background == 'red'){
        document.getElementById("park").style.background = 'yellow';
        return
    }
    else {
        document.getElementById("park").style.background = 'white';
        return
    }
}
function changeOh(){
    if (document.getElementById("oh").style.background == 'white'){
        document.getElementById("oh").style.background = 'orange';
        return
    }
    else if (document.getElementById("oh").style.background == 'orange'){
        document.getElementById("oh").style.background = 'red';
        return
    }
    else if (document.getElementById("oh").style.background == 'red'){
        document.getElementById("oh").style.background = 'yellow';
        return
    }
    else {
        document.getElementById("oh").style.background = 'orange';
        return
    }
}