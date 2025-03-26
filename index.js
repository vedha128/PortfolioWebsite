// Function to handle downloading the resume PDF
function downloadResume() {
    const resumeLink = "path/to/your/resume.pdf"; // Replace with the actual path to your resume
    const link = document.createElement("a");
    link.href = resumeLink;
    link.download = "My_Resume.pdf"; // The name of the file being downloaded
    link.click();
}

// Smooth Scroll (optional)
document.querySelectorAll("nav ul li a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
        });
    });
});
