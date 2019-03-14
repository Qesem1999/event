


function changeStyle(){
 
    let style = document.getElementById("inputColor").value;
    let seperate = style.split(" ");
   
    document.getElementsByClassName("list-group-item")[seperate[1]].style.backgroundColor=seperate[0];
    document.getElementsByClassName("list-group-item")[seperate[1]].style.color=seperate[2]
}
function changesize(){
   let fontsize = document.getElementsByClassName("list-group-item");
   fontsize[0].style.fontSize = "50px";

}
function before(){
    let fontsize = document.getElementsByClassName("list-group-item");
    fontsize[0].style.fontSize = "20px";
 }


 