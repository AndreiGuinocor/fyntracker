// assets/js/nav.js
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.getElementById('navLinks');
  const brand = document.getElementById('brandLink');
  if (!navLinks || !brand) return;

  const loggedIn = localStorage.getItem('isLoggedIn') === 'true';

  // Dynamic brand target
  brand.href = loggedIn ? 'dashboard.html' : 'homepage.html';

  // Populate navbar
  if (loggedIn) {
    navLinks.innerHTML = `
      <li class="nav-item"><a class="nav-link ${location.pathname.includes('dashboard') ? 'active' : ''}" href="dashboard.html">Dashboard</a></li>
      <li class="nav-item"><a class="nav-link ${location.pathname.includes('profile') ? 'active' : ''}" href="profile.html">Profile</a></li>
      <li class="nav-item"><a class="nav-link ${location.pathname.includes('user-management') ? 'active' : ''}" href="user-management.html">User Management</a></li>
      <li class="nav-item"><a class="nav-link" href="#" onclick="logout()">Logout</a></li>
    `;
  } else {
    navLinks.innerHTML = `
      <li class="nav-item"><a class="nav-link ${location.pathname.includes('homepage') ? 'active' : ''}" href="homepage.html">Home</a></li>
      <li class="nav-item"><a class="nav-link ${location.pathname.includes('login') ? 'active' : ''}" href="login.html">Login</a></li>
      <li class="nav-item"><a class="nav-link ${location.pathname.includes('register') ? 'active' : ''}" href="register.html">Register</a></li>
    `;
  }
});

function logout() {
  localStorage.removeItem('isLoggedIn');
  const brand = document.getElementById('brandLink');
  if (brand) brand.href = 'homepage.html';
  window.location.href = 'homepage.html';
}
