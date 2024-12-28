 


// toggle
document.addEventListener('DOMContentLoaded', function() {
  // Select the discount toggle input checkbox
  const discountToggle = document.getElementById('discountToggle');
  const discountContent = document.getElementById('discountToggleSection').querySelector('.toggle-content');

  // Select the expiry date toggle input checkbox
  const expiryDateToggle = document.getElementById('expiryDateToggle');
  const expiryDateContent = document.getElementById('expiryDateToggleSection').querySelector('.toggle-content');

  // Toggle the visibility of the discount content based on checkbox state
  discountToggle.addEventListener('change', function() {
    if (this.checked) {
      discountContent.classList.remove('d-none'); 
    } else {
      discountContent.classList.add('d-none'); 
    }
  });

  // Toggle the visibility of the expiry date content based on checkbox state
  expiryDateToggle.addEventListener('change', function() {
    if (this.checked) {
      expiryDateContent.classList.remove('d-none'); 
    } else {
      expiryDateContent.classList.add('d-none'); 
    }
  });
});
document.getElementById('increment').addEventListener('click', function() {
  let input = document.getElementById('quantityStock');
  input.value = parseInt(input.value, 10) + 1; // Increment the value
});

document.getElementById('decrement').addEventListener('click', function() {
  let input = document.getElementById('quantityStock');
  input.value = Math.max(0, parseInt(input.value, 10) - 1); // Decrement the value, but not below 0
});
