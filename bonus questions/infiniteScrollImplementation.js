// Select the element that will trigger the loading of new content
const sentinel = document.querySelector('#sentinel');

// Function to load more content
const loadMoreContent = () => {
  // Simulate an API call or add content dynamically
  const newContent = document.createElement('div');
  newContent.textContent = 'New content';
  document.body.appendChild(newContent);
};

// Intersection Observer to detect when the sentinel comes into view
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      loadMoreContent();
    }
  });
});

// Observe the sentinel element
observer.observe(sentinel);
