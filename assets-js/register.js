function validasi(){
    let name = document.getElementById("name").value.trim()
    let username = document.getElementById("username").value.trim()
    let email = document.getElementById("email").value.trim()
    let gender = ""
    let lineid = document.getElementById("lineid").value.trim()
    let reason = document.getElementById("reasons").value.trim()

    if(document.getElementById("dot-1").checked){ 
      gender = document.getElementById("dot-1").value
    }
    else if(document.getElementById("dot-2").checked){
      gender = document.getElementById("dot-2").value
    }

    let password = document.getElementById("password").value.trim();
    let confirmpassword = document.getElementById("confirmpassword").value.trim()

    if(name == ""){
    alert("Nama tidak boleh kosong!")
    return false
    }

if(username == ""){
    alert("Username tidak boleh kosong!")
    return false
}

if(username.length < 5){
    alert("Username setidaknya harus mengandung 5 karakter!")
    return false
}

if(gender == ""){
    alert("Gender tidak boleh kosong!")
    return false
}

if(lineid == ""){
    alert("Line ID tidak boleh kosong!")
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

if(password == ""){
    alert("Password tidak boleh kosong!")
    return false
}

else if(password.length < 8 || password.length > 15){
    alert("Password harus mengandung setidaknya 8 karakter dan tidak lebih dari 15 karakter")
    return false
}

else if(password.search(/[a-z]/i) < 0){
    alert("Password setidaknya harus mengandung 1 karakter huruf kecil")
    return false
}

else if(password.search(/[0-9]/i) < 0){
    alert("Password setidaknya harus mengandung 1 angka")
    return false
}
else if(password.search(/[!@#$%^&*()]/i) < 0){
    alert("Password setidaknya harus mengandung 1 karakter spesial")
    return false
}

else if(password.search(/[A-Z]/) == -1){
    alert("Password setidaknya harus mengandung 1 karakter huruf besar")
    return false
}

if(password !== confirmpassword){
    alert("Confirm password berbeda dengan password yang dimasukkan!")
    return false
}

alert("Selamat anda telah berhasil melakukan registrasi, sekarang pakai email dan password anda untuk melakukan login!")
return true
  }