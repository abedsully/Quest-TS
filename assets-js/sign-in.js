function validasi(){
    let email = document.getElementById("email").value.trim()
    let password = document.getElementById("password").value.trim()

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
        alert("Password tidak boleh kosong")
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


    alert("Terima kasih telah melakukan login!")
    return true
}