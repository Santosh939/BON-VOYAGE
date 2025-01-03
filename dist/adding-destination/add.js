document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.newForm');

    // Form validation logic
    form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();

            // Show validation messages
            form.querySelectorAll('.form-control').forEach(input => {
                if (!input.validity.valid) {
                    input.nextElementSibling.style.display = 'block';
                }
            });
        } else {
            alert('Form submitted successfully!');
        }

        form.classList.add('was-validated');
    });

    // Hide validation messages on input
    form.querySelectorAll('.form-control').forEach(input => {
        input.addEventListener('input', function () {
            if (input.validity.valid) {
                input.nextElementSibling.style.display = 'none';
            }
        });
    });

    // File input change event for previewing file names
    const fileInput = document.querySelector('#image');
    fileInput.addEventListener('change', function () {
        if (fileInput.files.length > 0) {
            alert(`${fileInput.files.length} file(s) selected`);
        }
    });
});
