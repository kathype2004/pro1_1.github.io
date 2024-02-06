/*Name this external file gallery.js*/

function upDate(previewPic){

       document.getElementById('image').innerHTML=previewPic.alt;
       document.getElementById('image').style.backgroundImage="url("+previewPic.src+")";
       document.getElementById('image').setAttribute("tabindex","0");
       console.log(previewPic.alt);
       }
   
       function unDo(){
           

       document.getElementById('image').innerHTML="Hover over an image to display the alt text.";
       document.getElementById('image').style.backgroundImage="url('')";
       console.log("Hover over an image to display the alt text.");

       }