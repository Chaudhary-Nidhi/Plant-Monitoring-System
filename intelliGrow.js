const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        const answer = faq.querySelector(".answer");
        answer.classList.toggle("show");
    });
});