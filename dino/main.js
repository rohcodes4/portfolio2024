// Validating Empty Field
function check_empty() {
    if (document.getElementById('Name').value == "" || document.getElementById('Email').value == "" ) {
    alert("Fill All Fields !");
    } else {
    // document.getElementById('form').submit();
    var url = 'https://script.google.com/macros/s/AKfycbw8__iPhe4gBJPCgWOT_wbzATOCcMjLzhew_oIS3leserAEspSoTv7MOayEu0SB2yxL5A/exec';
    
   //get the form from DOM (Document object model) 
   var form = document.getElementById('form');
   form.onsubmit = function(event){
       var xhr = new XMLHttpRequest();
       var data = new FormData(form);
       //Add extra data to form before submission.
    //    data.append("referer","https://example.com");
       //open the request
       xhr.open('POST',url)
       //send the form data
       xhr.send(data);

       xhr.onreadystatechange = function() {
           if (xhr.readyState == XMLHttpRequest.DONE) {
               form.reset(); //reset form after AJAX success.
               div_show();
               
           }
       }

       //Dont submit the form.
       return false; 
   }
    
    // alert("Form Submitted Successfully...");
  
    }
    }
    //Function To Display Popup
    function div_show() {
    document.getElementById('abc').style.display = "block";
    }
    //Function to Hide Popup
    function div_hide(){
    document.getElementById('abc').style.display = "none";
    }
    document.getElementById("submit_btn").addEventListener('click', (e) => { 
        e.preventDefault();
        check_empty();
    } )