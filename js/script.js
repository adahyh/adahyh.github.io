const homeLogo = document.getElementById("logoImage");

homeLogo.addEventListener('click', function() {
  // Redirect to another HTML page
  window.location.href = 'index.html';
});





// Select the div element
const clickProject = document.getElementById('menolearn');

// Add a click event listener to the div
clickProject.addEventListener('click', function() {
  // Redirect to another HTML page
  window.location.href = 'menolearn.html';
});

// const clickTicket = document.getElementById('tickettasker');


// clickTicket.addEventListener('click', function() {

//   window.location.href = 'tickettasker.html';
// });

// click to open tickettasker
document.getElementById('tickettasker').addEventListener('click', function() {
  window.location.href = 'tickettasker.html';
});

document.getElementById('trolley').addEventListener('click', function() {
  window.location.href = 'trolley.html';
});

