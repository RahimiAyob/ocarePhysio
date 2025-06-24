let selectedRole = 'patient';
const buttons = document.querySelectorAll('.role-buttons button');

function setRole(role, event) {
  selectedRole = role;

  buttons.forEach(btn => {
    btn.classList.remove('active');
  });

  event.target.classList.add('active');
}

