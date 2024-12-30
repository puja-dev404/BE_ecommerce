const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const newMessageModal = document.getElementById('newMessageModal');
const overlay = document.getElementById('backgroundOverlay');

// Open modal
openModalBtn.addEventListener('click', () => {
  newMessageModal.classList.add('show');  // Show the modal
  overlay.classList.add('show');          // Show the background blur
});

// Close modal
closeModalBtn.addEventListener('click', () => {
  newMessageModal.classList.remove('show'); // Hide the modal
  overlay.classList.remove('show');         // Hide the background blur
});

// Optionally, close the modal if the overlay is clicked
overlay.addEventListener('click', () => {
  newMessageModal.classList.remove('show');
  overlay.classList.remove('show');
});
