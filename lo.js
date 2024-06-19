const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));
document.addEventListener("DOMContentLoaded", function() {
    const coll = document.getElementsByClassName("collapsible-btn");
    const pops = document.querySelectorAll(".popup");

    for (let i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            const content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }

    document.querySelectorAll('.highlight').forEach(item => {
        item.addEventListener('click', event => {
            pops.forEach(popup => popup.style.display = 'none'); // Hide all images
            const id = event.target.id.replace('highlight', 'popup');
            document.getElementById(id).style.display = 'block'; // Show the clicked image
        });
    });

    pops.forEach(popup => {
        popup.addEventListener('click', event => {
            event.target.style.display = 'none'; // Hide the image on click
        });
    });
});