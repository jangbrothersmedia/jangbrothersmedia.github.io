/* function is called by click of a button*/
/* the function checks the innerHTML of the H4 with id demo, and changes the message correspondingly through conditionals */
/* alternates between three different sentences  */

function chooseTeam(){
messageOne = "You have chosen the Kiwoom Heroes: 'Fight for the Championship, Heroes!'";
messageTwo = "You have chosen the LG Twins: 'Forever LG!'";
messageThree = "You have chosen the Doosan Bears: 'Miracle Doosan!";

if (document.getElementById('demo').innerHTML == 'Which Seoul Team will you choose?'){
    document.getElementById('demo').innerHTML = "You have chosen the Kiwoom Heroes: 'Fight for the Championship, Heroes!'";
    return
} else if (document.getElementById('demo').innerHTML == "You have chosen the Kiwoom Heroes: 'Fight for the Championship, Heroes!'"){
    document.getElementById('demo').innerHTML = "You have chosen the LG Twins: 'Forever LG!'";
    return
} else if (document.getElementById('demo').innerHTML == "You have chosen the LG Twins: 'Forever LG!'"){
    document.getElementById('demo').innerHTML = "You have chosen the Doosan Bears: 'Bears Fighting!'";
    return
} else if (document.getElementById('demo').innerHTML = "You have chosen the Doosan Bears 'Bears Fighting!'"){
    document.getElementById('demo').innerHTML = "You have chosen the Kiwoom Heroes: 'Fight for the Championship, Heroes!'";
    return
}}
