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

$(document).ready(function() {
  var pro_fil;
  if ($("body").data("title") == "login_page") {
    document.querySelector("#sign_up").onclick = function() {
      var date = document.getElementById("dobsignup").value;
      var i,
        j = 0;
      var arr = new Array("", "", "");
      for (i = 0; i < date.length; i++) {
        if (date[i] == "-") {
          j += 1;
        } else arr[j] += date[i];
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
          month: arr[1],
          year: arr[0],

          email: document.getElementById("emailsignup").value,
          guardian_email: document.getElementById("guardianemailsignup").value,
          qualification: document.getElementById("qualificationsignup").value,
          id: document.getElementById("phonesignup").value,
          passwordsignup: document.getElementById("passwordsignup").value,
          passwordsignup_confirm: document.getElementById(
            "passwordsignup_confirm"
          ).value
        };

        $.ajax({
          url: "http://localhost:3000/user/signup",
          method: "POST",
          dataType: "json",
          crossDomain: true,
          withCredentials: true,
          data: sign_up_data,
          success: function(data) {
            console.log(data);
          }
        });
      } catch (error) {
        console.log(error);
      }
    };

    // profile data

    var id1, pass1, type1;
    document.querySelector("#log_in").onclick = function() {
      id1 = document.getElementById("username").value;
      pass1 = document.getElementById("password").value;
      type1 = document.getElementById("type_login").value;
      event.preventDefault();
      $.ajax({
        url: "http://localhost:3000/user/signin",
        type: "POST",
        dataType: "json",
        beforeSend: function(xhrObj) {
          xhrObj.setRequestHeader(
            "Access-Control-Allow-Headers",
            "x-requested-with"
          );
        },
        crossDomain: true,
        withCredentials: true,
        data: {
          id: id1,
          passwordsign: pass1,
          type: type1
        },
        success: function(data) {
          localStorage.setItem("dat", JSON.stringify(data));
          console.log(JSON.parse(localStorage.getItem("dat")));
          if (data.result == "Record not found") alert(data.result);
          else pro_fil = data;
        },
        complete: function(data) {
          window.location.href = "profile.html";
        }
      });
    };
  }

  if ($("body").data("title") == "profile_page") {
    // profile
    document.querySelector("#profile").onclick = function() {
      let pro_file = JSON.parse(localStorage.getItem("dat"));
      let myNode = document.getElementById("main");
      while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
      }
      console.log(pro_file);
      var tag =
        "<div><p><strong>" +
        "type :" +
        pro_file.result.type +
        "</strong></p></div>";
      document.getElementById("main").insertAdjacentHTML("beforeend", tag);

      var tag =
        "<div><p><strong>" +
        "name :" +
        pro_file.result.name +
        "</strong></p></div>";
      document.getElementById("main").insertAdjacentHTML("beforeend", tag);

      var tag =
        "<div><p><strong>" +
        "Email :" +
        pro_file.result.email +
        "</strong></p></div>";
      document.getElementById("main").insertAdjacentHTML("beforeend", tag);

      var tag =
        "<div><p><strong>" +
        "Address :" +
        pro_file.result.address +
        "</strong></p></div>";
      document.getElementById("main").insertAdjacentHTML("beforeend", tag);

      var tag =
        "<div><p><strong>" +
        "Date :" +
        pro_file.result.date +
        "-" +
        pro_file.result.month +
        "-" +
        pro_file.result.year +
        "</strong></p></div>";
      //var tag = "<div><p><strong>" + pro_file.result.year + "</strong></p></div>";
      document.getElementById("main").insertAdjacentHTML("beforeend", tag);

      var tag = "<div><p><strong>" + pro_file.result.id + "</strong></p></div>";
      document.getElementById("main").insertAdjacentHTML("beforeend", tag);

      var tag =
        "<div><p><strong>" + pro_file.result.phone + "</strong></p></div>";
      document.getElementById("main").insertAdjacentHTML("beforeend", tag);

      if (
        pro_file.result.type == "teacher" ||
        pro_file.result.type == "parent"
      ) {
        var tag =
          "<div><p><strong>" + pro_file.result.nic + "</strong></p></div>";
        document.getElementById("main").insertAdjacentHTML("beforeend", tag);
      }

      if (pro_file.result.type == "teacher") {
        var tag =
          "<div><p><strong>" +
          pro_file.result.qualification +
          "</strong></p></div>";
        document.getElementById("main").insertAdjacentHTML("beforeend", tag);
      }

      if (pro_file.type == "student") {
        var tag =
          "<div><p><strong>" +
          pro_file.result.guardian_name +
          "</strong></p></div>";
        document.getElementById("main").insertAdjacentHTML("beforeend", tag);

        var tag =
          "<div><p><strong>" +
          pro_file.result.guardian_phone +
          "</strong></p></div>";
        document.getElementById("main").insertAdjacentHTML("beforeend", tag);

        var tag =
          "<div><p><strong>" +
          pro_file.result.guardian_email +
          "</strong></p></div>";
        document.getElementById("main").insertAdjacentHTML("beforeend", tag);

        var tag =
          "<div><p><strong>" +
          pro_file.result.guardian_nic +
          "</strong></p></div>";
        document.getElementById("main").insertAdjacentHTML("beforeend", tag);
      }
    };
  }

  if ($("body").data("title") == "addResourc") {
    var filee = 0,URL = "";
	  
	  

    document.querySelector("#addFile").onclick = function() {
      if (document.getElementById("val_equipfc").value == "attach")
        filee = document.getElementById("addAttachment").value;
    };

	
	 document.querySelector("#addURL").onclick = function() {
      if (document.getElementById("val_equipfc").value == "url")
        URL = document.getElementById("addAttachment").value;
    };
     
		  

    document.getElementById("submitResourse").onclick = async function() {
		event.preventDefault();
      var s = {
        title: document.getElementById("tite_id").value,
        description: document.getElementById("description").value,
        grade: document.getElementById("grade").value,
        subject: document.getElementById("subject").value,
        teacher_id: document.getElementById("teacher_id").value,
        author: document.getElementById("author").value,
        file: filee,
        video_url: URL
      };
      console.log(s);
	  
	   var request = async () => {
      let promise = await $.ajax({
        url: "http://localhost:3000/resource/addResource",
        type: "POST",
        dataType: "json",
        beforeSend: function(xhrObj) {
        /*  xhrObj.setRequestHeader("Content-Type", "application/json");
          xhrObj.setRequestHeader("Accept", "application/json");*/
          xhrObj.setRequestHeader(
            "Access-Control-Allow-Headers",
            "x-requested-with"
          );
        },
        crossDomain: true,
        withCredentials: true,
        data: {
         title: document.getElementById("tite_id").value,
        description: document.getElementById("description").value,
        grade: document.getElementById("grade").value,
        subject: document.getElementById("subject").value,
        teacher_id: document.getElementById("teacher_id").value,
        author: document.getElementById("author").value,
        file: filee,
        video_url: URL
        },
        success: function(data) {
          alert("resource added");
          console.log(data.result);
        }
      });
    };
	request();
  };
	  
     
  
	
  }
  
  
    if ($("body").data("title") == "updateResource") {
		
		  var file = 0,UR = "";

    document.querySelector("#addFile").onclick = function() {
      if (document.getElementById("val_equipfc").value == "attach")
        file = document.getElementById("addAttachment").value;
    };

	
	 document.querySelector("#addURL").onclick = function() {
		   if (document.getElementById("val_equipfc").value == "url")
        UR = document.getElementById("addAttachment").value;
		console.log(document.getElementById("addAttachment").value);
	 };
     
		  

    document.getElementById("submitResourse").onclick = async function() {
		  UR = document.getElementById("addAttachment").value;
		  console.log(UR);
      	event.preventDefault();
	  let request = async () => {
      let promise = await $.ajax({
        url: "http://localhost:3000/resource/updateResource",
        type: "POST",
        dataType: "json",
        beforeSend: function(xhrObj) {
        /*  xhrObj.setRequestHeader("Content-Type", "application/json");
          xhrObj.setRequestHeader("Accept", "application/json");*/
          xhrObj.setRequestHeader(
            "Access-Control-Allow-Headers",
            "x-requested-with"
          );
        },
        crossDomain: true,
        withCredentials: true,
        data: {
		 id:document.getElementById("id").value,
         title: document.getElementById("tite_id").value,
        description: document.getElementById("description").value,
        grade: document.getElementById("grade").value,
        subject: document.getElementById("subject").value,
        teacher_id: document.getElementById("teacher_id").value,
        author: document.getElementById("author").value,
        file: file,
        video_url: UR,
		time:document.getElementById("time").value,
		is_archive:document.getElementById("is_archive").value
        },
        success: function(data) {
		 console.log(data);
          alert("resource updated");
          console.log(data.result);
        }
      });
	 
    };
	
	 request();
  };
	  
 
	}
	
	
	
	// remove resources
	
	 if ($("body").data("title") == "removeResource") {
		 
		 document.getElementById("submitResourse").onclick = async function() {
		 
      	event.preventDefault();
	  let request = async () => {
      let promise = await $.ajax({
        url: "http://localhost:3000/resource/removeResource",
        type: "POST",
        dataType: "json",
        beforeSend: function(xhrObj) {
        /*  xhrObj.setRequestHeader("Content-Type", "application/json");
          xhrObj.setRequestHeader("Accept", "application/json");*/
          xhrObj.setRequestHeader(
            "Access-Control-Allow-Headers",
            "x-requested-with"
          );
        },
        crossDomain: true,
        withCredentials: true,
        data: {
		 id:document.getElementById("id").value
        },
        success: function(data) {
		 console.log(data);
          alert("resource removed");
          console.log(data.result);
        }
      });
	 
    };
	
	 request();
  };
		 
		
		 
	 }
	 
	
	if ($("body").data("title") == "addAnnouncement") {
		
		 document.getElementById("submitResourse").onclick = async function() {
		 
      	event.preventDefault();
	  let request = async () => {
      let promise = await $.ajax({
        url: "http://localhost:3000/announcement/addAnnouncement",
        type: "POST",
        dataType: "json",
        beforeSend: function(xhrObj) {
        /*  xhrObj.setRequestHeader("Content-Type", "application/json");
          xhrObj.setRequestHeader("Accept", "application/json");*/
          xhrObj.setRequestHeader(
            "Access-Control-Allow-Headers",
            "x-requested-with"
          );
        },
        crossDomain: true,
        withCredentials: true,
        data: {
		 due_date:document.getElementById("duedate").value,
		 grade_id:document.getElementById("Gradeid").value,
		 section_id:document.getElementById("Secid").value,
		 subject_id:document.getElementById("Subid").value,
		 teacher_id:document.getElementById("Teacherid").value,
		 title:document.getElementById("Tid").value,
		 description:document.getElementById("description").value,
		 attachment:document.getElementById("addFile").value,
		 suggestion:document.getElementById("suggestion").value,
		 subject:document.getElementById("subject").value,
		 section:document.getElementById("Section").value,
		 grade:document.getElementById("grade").value,
        },
        success: function(data) {
		 console.log(data);
          alert("announcement added");
          console.log(data.result);
        }
      });
	 
    };
	
	 request();
  };
	 
	 
	}
	
	if ($("body").data("title") == "myAnnouncement") {
		
		 document.getElementById("submitResourse").onclick = async function() {
		 
      	event.preventDefault();
		
	  let request = async () => {
      let promise = await $.ajax({
        url: "http://localhost:3000/announcement/myAnnouncements",
        type: "GET",
        dataType: "json",
        beforeSend: function(xhrObj) {
        /*  xhrObj.setRequestHeader("Content-Type", "application/json");
          xhrObj.setRequestHeader("Accept", "application/json");*/
          xhrObj.setRequestHeader(
            "Access-Control-Allow-Headers",
            "x-requested-with"
          );
        },
        crossDomain: true,
        withCredentials: true,
		data:{
			id:document.getElementById("Announcementid").value
		},
        success: function(data) {
		 console.log(data);
		 
		 
		 // get
		 let myNode = document.getElementById("main");
      while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
      }
	  
	  
	   var tag = 	"<tr> <th>type</th> <th>due_date</th> <th>description</th></tr>" 
	  document.getElementById("main").insertAdjacentHTML("beforeend", tag);
	  
	 var tag = "<tr>  <td>"+ data.resources[0].type +"</td>  <td>"+data.resources[0].due_date +"</td> <td>"+data.resources[0].description +"</td></tr>"
	 		document.getElementById("main").insertAdjacentHTML("beforeend", tag);
			
		 
        }
      });
	 
    };
	
	 request();
 
		 };
	}
	
	
	if ($("body").data("title") == "myLibrary") {
		
		
		 document.getElementById("submitResourse").onclick = async function() {
		 
      	event.preventDefault();
	  let request = async () => {
      let promise = await $.ajax({
        url: "http://localhost:3000/resource/library/myLibrary/filter",
        type: "POST",
        dataType: "json",
        beforeSend: function(xhrObj) {
        /*  xhrObj.setRequestHeader("Content-Type", "application/json");
          xhrObj.setRequestHeader("Accept", "application/json");*/
          xhrObj.setRequestHeader(
            "Access-Control-Allow-Headers",
            "x-requested-with"
          );
        },
        crossDomain: true,
        withCredentials: true,
        data: {
		 time:document.getElementById("time").value,
		 id:"VydkBukonuSLhXOpGUiU5c9Tt8B2",
		 subject:document.getElementById("subject").value,
		 grade:document.getElementById("grade").value
        },
        success: function(data) {
		 console.log(data);
          alert("posted");
        }
      });
	 
    };
	
	 request();
  };
		
	
		
	}
	
	
	
	
	if ($("body").data("title") == "Library") {
		
		document.getElementById("submitResourse").onclick = async function() {
		 
      	event.preventDefault();
	  let request = async () => {
      let promise = await $.ajax({
        url: "http://localhost:3000/resource/library/myLibrary",
        type: "GET",
        dataType: "json",
        beforeSend: function(xhrObj) {
        /*  xhrObj.setRequestHeader("Content-Type", "application/json");
          xhrObj.setRequestHeader("Accept", "application/json");*/
          xhrObj.setRequestHeader(
            "Access-Control-Allow-Headers",
            "x-requested-with"
          );
        },
        crossDomain: true,
        withCredentials: true,
        data: {
		 id:document.getElementById("id").value
        },
        success: function(data) {
		 console.log(data);
          alert("success");
        }
      });
	 
    };
	
	 request();
  };
		
		
		
		
		
		
		
		
		
		
		
		
		
		
	}
		
	
	
	
	
	
	
	
	
	
	 
	 
	 
	 
	 
	 
	 
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	  
});

/* .then(function(response) {
		  console.log (response.json());})*/
/*
	    <link rel="shortcut icon" href="../favicon.ico">
	  
	  */
