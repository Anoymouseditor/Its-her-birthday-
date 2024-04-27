const slider = document.querySelector('.slider');

function activate(e) {
  const items = document.querySelectorAll('.item');
  const currentIndex = Array.from(items).indexOf(e.currentTarget);

  // Check if the clicked element is the "Next Page" button
  if (e.target.matches('.next-page')) {
    // Navigate to the ppr.html page
    window.location.href = 'ppr.html';
  }

  // Check if the clicked element is the "Read More" button
  if (e.target.matches('.item button')) {
    // Calculate the index of the next image
    const nextIndex = (currentIndex + 1) % items.length;
    slider.append(items[nextIndex]);
  }
}

document.addEventListener('click', activate);
