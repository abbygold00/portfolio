

var toggleBtn = document.getElementById("toggle-btn");
toggleBtn.addEventListener("click", myToggleFunction);

function myToggleFunction() {
    var x = document.getElementById('myBio');
    if (x.style.display === 'none') {
        x.style.display = 'block';
        toggleBtn.innerHTML = "hide my bio";
    } else {
        x.style.display = 'none';
        toggleBtn.innerHTML = "show my bio";
    }
}
