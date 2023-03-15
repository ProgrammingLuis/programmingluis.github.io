if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
    showLoadingAnimation();
}

function showLoadingAnimation() {
    const loading = document.createElement('div');
    loading.classList.add('loading');
    loading.innerHTML = '<div class="loading-screen"><h1>Loading...</h1></div>';
    document.body.appendChild(loading);

    setTimeout(() => {
        loading.remove();
		scrambleText(elements, initialText, 1000);
    }, 1000);
}

const inputField = document.querySelector('.input-field');

inputField.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const command = inputField.value.toLowerCase().trim();
        inputField.value = '';

        switch (command) {
            case '1':
            case 'about me':
                window.location.href = 'about.html';
                break;
            case '2':
            case 'education':
                window.location.href = 'education.html';
                break;
            case '3':
            case 'experience':
                window.location.href = 'experience.html';
                break;
            case '4':
            case 'projects':
                window.location.href = 'projects.html';
                break;
            case '5':
            case 'socials':
                window.location.href = 'social.html';
                break;
			case '0':
			case 'Main':
                window.location.href = 'index.html';
                break;
            default:
                alert('Invalid command. Please enter a valid option.');
        }
	}
});

const scrambleText = (elements, initialText, duration) => {
    const scramble = () => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let randomText = '';
        for (let i = 0; i < initialText.length; i++) {
            randomText += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        elements.forEach(el => el.textContent = randomText);
    };

    const scrambleInterval = setInterval(scramble, 100);

    setTimeout(() => {
        clearInterval(scrambleInterval);
        elements.forEach(el => el.textContent = initialText);
    }, duration);
};

const asciiName = document.querySelector('.ascii-name');
const glitchElements = document.querySelectorAll('.ascii-name-glitch');
const elements = [asciiName, ...glitchElements];
const initialText = asciiName.getAttribute('data-text');

function focusTerminalInput() {
    const terminalInput = document.querySelector('.input-field');
    if (terminalInput) {
        terminalInput.focus();
    }
}