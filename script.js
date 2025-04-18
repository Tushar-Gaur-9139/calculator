const input = document.querySelector('textarea[name="input"]');
const buttons = document.querySelectorAll('.buttons button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('name');
        if (value === '=') {
            try {
                input.value = eval(input.value);
            } catch (e) {
                input.value = 'Error';
            }
        } else if (value === 'Ac') {
            input.value = '';
        } else {
            input.value += value;
        }
    });
});