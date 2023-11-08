
/* makes login/play button functional*/

const loginButton = document.getElementById('login')

loginButton.onclick = () => {
  location.href = './login.html'
  localStorage.clear()
}