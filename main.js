let background = document.getElementById("background");

let username = "Sophia";

let admin = document.getElementById("changeAdmin");

function changeBackground(){
    console.log("Gambar background berubah");
    background.style.backgroundImage = "url('assets/night-mountain.png')";
}

function changeValueAdmin(){
    admin.value = username;
    alert("Admin: " + admin.value);
}
