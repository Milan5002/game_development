const playButton = document.getElementById('play-button')
const Nname = document.getElementById('name')
const username = document.getElementById('username')

playButton.onclick = () => {
    if (Nname.value == '' || username.value == '') {
        alert('Please provide your Username and Nickname!')
    }
    else {
        var Name = document.getElementById("name").value
        var uName = document.getElementById("username").value
        if (localStorage.getItem('name') == null) {
            localStorage.setItem('name', '[]');
        }
        if (localStorage.getItem('username') == null) {
            localStorage.setItem('username', '[]');
        }
        var old_Name = JSON.parse(localStorage.getItem('name'));
        var old_uName = JSON.parse(localStorage.getItem('username'));
        old_Name.push(Name);
        old_uName.push(uName);
        localStorage.setItem('name', JSON.stringify(old_Name))
        localStorage.setItem('username', JSON.stringify(old_uName))

        location.href = "./game.html"
    }
}
