/*https://www.w3schools.com/howto/howto_js_filter_lists.asp*/
/*starts with input string*/
function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    /*gets all list elements to iterate through*/
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        /*hides display if input does not match list term, keeps it otherwise*/
        } else {
            li[i].style.display = "none";
        }
    }
}