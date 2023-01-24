var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50%";
  }
  prevScrollpos = currentScrollPos;
}



function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function myFunction2() {
  document.getElementById("myDropdown2").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn-2')) {
    var dropdowns = document.getElementsByClassName("dropdown-content-2");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function myFunction3() {
  document.getElementById("myDropdown3").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn-3')) {
    var dropdowns = document.getElementsByClassName("dropdown-content-3");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


function myFunction4() {
  document.getElementById("myDropdown4").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn-4')) {
    var dropdowns = document.getElementsByClassName("dropdown-content-4");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


function kirimPesan(){
  let name = document.getElementById("name").value.trim()
  let email = document.getElementById("email").value.trim()
  let message = document.getElementById("message").value.trim()

  if(name == ""){
      alert("Nama tidak boleh kosong!")
  return false
  }

  if(email == ""){
      alert("Email tidak boleh kosong!")
      return false
  }

  else if(email.split("@").length !== 2){
    alert("Format email yang dimasukkan salah, format email harusnya: email@address.com")
    return false
    }
  else if(email.split("@")[0].length === 0){
      alert("Format email yang dimasukkan salah, format email harusnya: email@address.com")
      return false
    }
  else if(email.split("@")[1].length === 0){
      alert("Format email yang dimasukkan salah, format email harusnya: email@address.com")
      return false
    }

  else if(!email.split("@")[1].includes(".")){
      alert("Format email yang dimasukkan salah, format email harusnya: email@address.com")
      return false
    }
  else if(email.split("@")[1][0] === '.'){
      alert("Format email yang dimasukkan salah, format email harusnya: email@address.com")
      return false
    }

  if(message == ""){
      alert("Pesan tidak boleh kosong!")
      return false
  }

  if(message.length < 20){
      alert("Pesan harus lebih dari 20 kata!")
      return false
  }


  alert("Terima kasih atas pesannya, kami akan menghubungi anda segera!")
  return true
}

function kirimPesan2(){
  let name = document.getElementById("name2").value.trim()
  let email = document.getElementById("email2").value.trim()
  let message = document.getElementById("message2").value.trim()

  if(name == ""){
    alert("Nama tidak boleh kosong!")
  return false
}

  if(email == ""){
    alert("Email tidak boleh kosong!")
    return false
  }

  else if(email.split("@").length !== 2){
    alert("Format email yang dimasukkan salah, format email harusnya: email@address.com")
    return false
    }
  else if(email.split("@")[0].length === 0){
      alert("Format email yang dimasukkan salah, format email harusnya: email@address.com")
      return false
    }
  else if(email.split("@")[1].length === 0){
      alert("Format email yang dimasukkan salah, format email harusnya: email@address.com")
      return false
    }

  else if(!email.split("@")[1].includes(".")){
      alert("Format email yang dimasukkan salah, format email harusnya: email@address.com")
      return false
    }
  else if(email.split("@")[1][0] === '.'){
      alert("Format email yang dimasukkan salah, format email harusnya: email@address.com")
      return false
    }

  if(message == ""){
      alert("Pesan tidak boleh kosong!")
      return false
  }

  if(message.length < 20){
      alert("Pesan harus lebih dari 20 kata!")
      return false
  }


  alert("Terima kasih atas pesannya, kami akan menghubungi anda segera!")
  return true
}