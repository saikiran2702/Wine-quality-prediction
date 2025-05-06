document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const inputs = form.querySelectorAll("input[type='number']");
    const submitBtn = form.querySelector("button");

    function validateForm() {
        let isValid = true;
        inputs.forEach(input => {
            if (input.value === "" || isNaN(input.value)) {
                isValid = false;
            }
        });
        submitBtn.disabled = !isValid;
    }

    // Attach event listeners
    inputs.forEach(input => {
        input.addEventListener("input", validateForm);
    });

    // Initial validation
    validateForm();
});
