document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('travelForm');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); 
  
      const errorMessages = document.getElementById('errorMessages');
      errorMessages.innerHTML = ''; 
  
      let errors = [];
      
      
      const name = document.getElementById('name').value;
      if (name.trim() === '') {
        errors.push('Full Name is required.');
      }
  
      
      const email = document.getElementById('email').value;
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!email.match(emailPattern)) {
        errors.push('Please enter a valid email address.');
      }
  
   
      const phone = document.getElementById('phone').value;
      const phonePattern = /^\d{10}$/; 
      if (!phone.match(phonePattern)) {
        errors.push('Phone number must be 10 digits.');
      }
  
   
      const destination = document.getElementById('destination').value;
      if (!destination) {
        errors.push('Please select a destination.');
      }
  
     
      const groupSize = document.getElementById('group_size').value;
      if (groupSize < 1) {
        errors.push('Group Size must be at least 1.');
      }
  
      
      const accommodation = document.querySelector('input[name="accommodation"]:checked');
      if (!accommodation) {
        errors.push('Please select an accommodation type.');
      }
  
      
      if (errors.length > 0) {
        errorMessages.innerHTML = '<ul>' + errors.map(error => `<li>${error}</li>`).join('') + '</ul>';
      } else {
        const formData = new FormData(form);
      fetch(form.action, {
        method: 'POST',
        body: formData
      })
      .then(response => response.json()) 
      .then(data => {
       
        const confirmationMessage = document.getElementById('confirmationMessage');
        confirmationMessage.style.display = 'block'; 
        form.style.display = 'none'; 
      })
      .catch(error => {
       
        console.error('Error:', error);
        errorMessages.innerHTML = '<ul><li>There was an issue with the submission. Please try again later.</li></ul>';
      });
      }
    });
  });
