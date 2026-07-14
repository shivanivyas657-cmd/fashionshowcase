// Modal elements
const modalBackdrop = document.getElementById('productModal');
const modalClose = document.getElementById('modalClose');
const modalTitle = document.getElementById('modalTitle');
const modalImage = document.getElementById('modalImage');
const modalDesc = document.getElementById('modalDesc');
const modalPrice = document.getElementById('modalPrice');
const modalOldPrice = document.getElementById('modalOldPrice');

// Open modal when "View Details" clicked
document.querySelectorAll('.btn-view').forEach(btn => {
  btn.addEventListener('click', function (e) {
    e.stopPropagation();
    const card = this.closest('.card');

    modalTitle.textContent = card.dataset.name;
    modalPrice.textContent = card.dataset.price;
    modalOldPrice.textContent = card.dataset.old;
    modalDesc.textContent = card.dataset.desc;
    modalImage.src = card.dataset.image;
    modalImage.alt = card.dataset.name;

    modalBackdrop.style.display = 'flex';
  });
});

// Close modal by cross button
modalClose.addEventListener('click', () => {
  modalBackdrop.style.display = 'none';
});

// Close modal by clicking outside
modalBackdrop.addEventListener('click', (e) => {
  if (e.target === modalBackdrop) {
    modalBackdrop.style.display = 'none';
  }
});

// "Add to Cart" button (demo alert)
document.querySelectorAll('.btn-cart').forEach(btn => {
  btn.addEventListener('click', function (e) {
    e.stopPropagation();
    const card = this.closest('.card');
    alert(card.dataset.name + " added to cart (demo)");
  });
});
