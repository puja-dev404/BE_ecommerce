document.querySelector('.edit-category-btn').addEventListener('click', () => {
    document.getElementById('editCategoryModal').style.display = 'flex';
});

// Close modal when clicking on close button
document.querySelector('.close-btn').addEventListener('click', () => {
    document.getElementById('editCategoryModal').style.display = 'none';
});

// Close modal if clicked outside of modal content
window.addEventListener('click', (event) => {
    if (event.target === document.getElementById('editCategoryModal')) {
        document.getElementById('editCategoryModal').style.display = 'none';
    }
});