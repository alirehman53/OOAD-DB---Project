
/*document.getElementById("sign_up").onclick = function() {
var date =  document.getElementById("dobsignup").value;
var i,j=0;
var arr = new Array("","","");
for (i = 0; i < date.length; i++) {
  if(date[i] == '-'){
  j+=1;}
  else
  arr[j] += date[i];
}
        try {
          let sign_up_data = {
			type: document.getElementById("val_equipfc").value,
            name: document.getElementById("usernamesignup").value,
            guardian_name: document.getElementById("guardiannamesignup").value,
            nic: document.getElementById("nicsignup").value,
            guardian_nic: document.getElementById("guardiannicsignup").value,
			
			address: document.getElementById("addresssignup").value,
            phone: document.getElementById("phonesignup").value,
            guardian_phone: document.getElementById("guardianphonesignup").value,
            date: arr[2],
			month:arr[1],
			year:arr[0],
			
			email: document.getElementById("emailsignup").value,
            guardian_email: document.getElementById("guardianemailsignup").value,
            qualification: document.getElementById("qualificationsignup").value,
           id: document.getElementById("phonesignup").value,
		   passwordsignup: document.getElementById("passwordsignup").value,
		    passwordsignup_confirm: document.getElementById("passwordsignup_confirm").value
			
          };

          fetch("http://localhost:3000/user/signup", {
            method: "POST",
			mode:'cors',
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(sign_up_data)
          });
        } catch (error) {
          console.log(error);
        }
      };
	  
	  document.getElementById("log_in").onclick = function() {
		  var obj;
        try {
          let sign_in_data = {
		     id: document.getElementById("username").value,
            passwordsign: document.getElementById("password").value,
			 type: document.getElementById("type_login").value
          };
         console.log(sign_in_data);
            fetch("http://localhost:3000/user/signin", {
			mode:"cors",
            method: "POST",
            headers: {
			   "accept-type":"application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(sign_in_data)
          })
		  .then(function(res){ return res.json(); })
.then(function(data){ alert( data.error  ) });
		  
		  } catch (error) {
          console.log(error);
        }
      };*/
	  
	 $(document).ready(function(){
		  var pro_fil;
		 if ($("body").data("title") === "login_page") {
    
		 document.querySelector("#sign_up").onclick = function() {
var date =  document.getElementById("dobsignup").value;
var i,j=0;
var arr = new Array("","","");
for (i = 0; i < date.length; i++) {
  if(date[i] == '-'){
  j+=1;}
  else
  arr[j] += date[i];
}
        try {
          let sign_up_data = {
			type: document.getElementById("val_equipfc").value,
            name: document.getElementById("usernamesignup").value,
            guardian_name: document.getElementById("guardiannamesignup").value,
            nic: document.getElementById("nicsignup").value,
            guardian_nic: document.getElementById("guardiannicsignup").value,
			
			address: document.getElementById("addresssignup").value,
            phone: document.getElementById("phonesignup").value,
            guardian_phone: document.getElementById("guardianphonesignup").value,
            date: arr[2],
			month:arr[1],
			year:arr[0],
			
			email: document.getElementById("emailsignup").value,
            guardian_email: document.getElementById("guardianemailsignup").value,
            qualification: document.getElementById("qualificationsignup").value,
           id: document.getElementById("phonesignup").value,
		   passwordsignup: document.getElementById("passwordsignup").value,
		    passwordsignup_confirm: document.getElementById("passwordsignup_confirm").value
			
          };
		  
          $.ajax({
		url:"http://localhost:3000/user/signup",
		method:'POST',
		dataType:'json',
		crossDomain : true,
		withCredentials: true,
		data:sign_up_data,
		success:function(data){
			console.log(data);
		}
		
	})
         
        } catch (error) {
          console.log(error);
        }
      };
	  
	
	
		 // profile data
	
		 var id1,pass1,type1;
document.querySelector("#log_in").onclick = function() {
	 id1= document.getElementById("username").value;
         pass1 = document.getElementById("password").value;
			type1= document.getElementById("type_login").value;
	event.preventDefault();
	$.ajax({
		url:"http://localhost:3000/user/signin",
		type:'POST',
		dataType:'json',
		 beforeSend: function(xhrObj){
           /* xhrObj.setRequestHeader("Content-Type","application/json");
            xhrObj.setRequestHeader("Accept","application/json");*/
         xhrObj.setRequestHeader("Access-Control-Allow-Headers","x-requested-with");
        },
		crossDomain : true,
		withCredentials: true,
		data:{
			  id: id1,
            passwordsign: pass1,
			 type: type1
		},
		success:function(data){
			localStorage.setItem('dat',JSON.stringify(data ) );
			console.log(JSON.parse(localStorage.getItem('dat') ) );
			if(data.result =="Record not found")
				alert(data.result);
			else
				pro_fil = data;
				
		},
	complete: function (data) {
    window.location.href ="profile.html";
     }
			
		
	});   

	
	};
	
		 }
	
		 
		 
				
		 
		 if ($("body").data("title") === "profile_page") {
   
	// profile 
	document.querySelector("#profile").onclick = function() {
		let pro_file = JSON.parse(localStorage.getItem('dat') );
		let myNode = document.getElementById("main");
              while (myNode.firstChild) {
                myNode.removeChild(myNode.firstChild);
              }
                console.log(pro_file);
                var tag = "<div><p><strong>"+ "type :" + pro_file.result.type + "</strong></p></div>";
                document
                  .getElementById("main")
                  .insertAdjacentHTML("beforeend", tag);
				 
				 var tag = "<div><p><strong>" +"name :"+ pro_file.result.name + "</strong></p></div>";
                document
                  .getElementById("main")
                  .insertAdjacentHTML("beforeend", tag);
				  
				 var tag = "<div><p><strong>" +"Email :"+ pro_file.result.email + "</strong></p></div>";
                document
                  .getElementById("main")
                  .insertAdjacentHTML("beforeend", tag);
				  
				 var tag = "<div><p><strong>" +"Address :"+ pro_file.result.address + "</strong></p></div>";
                document
                  .getElementById("main")
                  .insertAdjacentHTML("beforeend", tag);
				  
			 var tag = "<div><p><strong>" +"Date :"+ pro_file.result.date + '-' + pro_file.result.month + '-' + pro_file.result.year + "</strong></p></div>";
			 //var tag = "<div><p><strong>" + pro_file.result.year + "</strong></p></div>";
                document
                  .getElementById("main")
                  .insertAdjacentHTML("beforeend", tag);
				  
				 
				   var tag = "<div><p><strong>" + pro_file.result.id + "</strong></p></div>";
                document
                  .getElementById("main")
                  .insertAdjacentHTML("beforeend", tag);
				  
				  
				 var tag = "<div><p><strong>" + pro_file.result.phone + "</strong></p></div>";
                document
                  .getElementById("main")
                  .insertAdjacentHTML("beforeend", tag);  
				
				  
				  if(pro_file.result.type == "teacher" || pro_file.result.type == "parent"){
					  
		  var tag = "<div><p><strong>" + pro_file.result.nic + "</strong></p></div>";
                document
                  .getElementById("main")
                  .insertAdjacentHTML("beforeend", tag);
				 
				  }
				  
				  if(pro_file.result.type == "teacher"){
					  
					   var tag = "<div><p><strong>" + pro_file.result.qualification + "</strong></p></div>";
                document
                  .getElementById("main")
                  .insertAdjacentHTML("beforeend", tag);
				  
				  }
				  
				 if(pro_file.type == "student"){
					 
			    var tag = "<div><p><strong>" + pro_file.result.guardian_name + "</strong></p></div>";
                document
                  .getElementById("main")
                  .insertAdjacentHTML("beforeend", tag);
				  
				  
				 var tag = "<div><p><strong>" + pro_file.result.guardian_phone + "</strong></p></div>";
                document
                  .getElementById("main")
                  .insertAdjacentHTML("beforeend", tag);
				  
				  
				  var tag = "<div><p><strong>" + pro_file.result.guardian_email + "</strong></p></div>";
                document
                  .getElementById("main")
                  .insertAdjacentHTML("beforeend", tag);
					 
					 
				  var tag = "<div><p><strong>" + pro_file.result.guardian_nic + "</strong></p></div>";
                document
                  .getElementById("main")
                  .insertAdjacentHTML("beforeend", tag);
		
	}
	
	
	
	
	
	
	
	
	 };	 
	  
	  
	  
		 }
	  
	  
	 });
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	 /* .then(function(response) {
		  console.log (response.json());})*/
/*
	    <link rel="shortcut icon" href="../favicon.ico">
	  
	  */
	  
	  
	  
	  
	  
	  