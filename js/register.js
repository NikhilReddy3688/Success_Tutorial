document.getElementById('registrationForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const parentName = document.getElementById('parentName').value.trim();
  const childName = document.getElementById('childName').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const email = document.getElementById('email').value.trim();
  const studentClass = document.getElementById('class').value;

  if (!parentName || !childName || !phone || !studentClass) {
    alert("Please fill in all required fields.");
    return;
  }

  const studentData = {
    parentName,
    childName,
    phone,
    email,
    studentClass,
    timestamp: new Date().toLocaleString()
  };

  // Save to localStorage
  let registrations = JSON.parse(localStorage.getItem('registrations')) || [];
  registrations.push(studentData);
  localStorage.setItem('registrations', JSON.stringify(registrations));

  // Show success message
  document.getElementById('registerMsg').innerText = "✅ Registration Successful!";

  // Reset form
  this.reset();
});
