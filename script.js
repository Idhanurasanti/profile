document.addEventListener("DOMContentLoaded", function () {
   
    const header = document.querySelector("header");
    header.style.opacity = 0;
    header.style.transform = "translateY(-20px)";

    setTimeout(() => {
        header.style.transition = "opacity 1s ease, transform 1s ease";
        header.style.opacity = 1;
        header.style.transform = "translateY(0)";
    }, 500);

    const aboutMeSection = document.querySelector(".about-me");
    aboutMeSection.style.opacity = 0;
    aboutMeSection.style.transform = "translateY(-20px)";

    setTimeout(() => {
        aboutMeSection.style.transition = "opacity 1s ease, transform 1s ease";
        aboutMeSection.style.opacity = 1;
        aboutMeSection.style.transform = "translateY(0)";
    }, 800);

    const skillsSection = document.querySelector(".skills");
    skillsSection.style.opacity = 0;
    skillsSection.style.transform = "translateY(-20px)";

    setTimeout(() => {
        skillsSection.style.transition = "opacity 1s ease, transform 1s ease";
        skillsSection.style.opacity = 1;
        skillsSection.style.transform = "translateY(0)";
    }, 1100);

});
