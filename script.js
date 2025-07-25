
document.querySelectorAll('.links a').forEach(link => {
  link.addEventListener('click', () => {
    console.log("Navigating to: " + link.href);
  });
});
