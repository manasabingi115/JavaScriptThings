import "./styles.css";

/*...getting forms ...*/

let form = document.forms.myform;
/*... getting form elements ...*/
console.log(document.forms[1]); //the first form in the document
let ele = form.elements.inputone;
console.log(ele.value);

/*...getting selected ...*/
// all three lines do the same thing
select.options[1].selected = true;
select.selectedIndex = 1;
select.value = "pear";
