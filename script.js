// Simple Form Submission Alert
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Thank you for reaching out to Royal Resha! We will contact you shortly.");
    this.reset();
});

// Mobile Menu Toggle (Basic)
function toggleMenu() {
    const nav = document.getElementById('navLinks');
    if (nav.style.display === "block") {
        nav.style.display = "none";
    } else {
        nav.style.display = "block";
        nav.style.flexDirection = "column";
        nav.style.position = "absolute";
        nav.style.top = "60px";
        nav.style.left = "0";
        nav.style.width = "100%";
        nav.style.background = "white";
        nav.style.padding = "20px";
    }
}
