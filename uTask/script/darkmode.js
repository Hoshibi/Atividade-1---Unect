document.querySelector('#darkMode').addEventListener('change', function(e) {

    if(e.target.checked) {
        document.documentElement.style.setProperty('--background', '#2c2c2c');
        document.documentElement.style.setProperty('--borda', '#c9c9c9');
        document.documentElement.style.setProperty('--borda-input-focus', '#c0bfbf');
        document.documentElement.style.setProperty('--letra-input', '#c9c9c9');
        document.documentElement.style.setProperty('--placeholder', '#ECECEC');
        document.documentElement.style.setProperty('--background-input', '#484E54');
        document.documentElement.style.setProperty('--button-plus', '#0C58D3');
        document.documentElement.style.setProperty('--hover-plus', '#2a73e7');
        document.documentElement.style.setProperty('--card', '#484E54');
        document.documentElement.style.setProperty('--borda-card', '#484E54');
        document.documentElement.style.setProperty('--card-shadow', '#1f1e1e');
        document.documentElement.style.setProperty('--linha1', '#e6e6e6');
        document.documentElement.style.setProperty('--linha2', '#e9e9e9');
        document.documentElement.style.setProperty('--linha3', 'rgb(49, 49, 49)');
        document.documentElement.style.setProperty('--letras', 'rgb(255, 255, 255)');
        document.documentElement.style.setProperty('--botão-limpar', '#FFFFFF14');
        document.documentElement.style.setProperty('--botão-aplicar', '#3071D9');
        document.documentElement.style.setProperty('--letra-botão-aplicar', '#FFFFFF');
        document.documentElement.style.setProperty('--letra-botão-limpar', '#FFFFFF');
        document.documentElement.style.setProperty('--hover-limpar', '#cbe6e7af');
        document.documentElement.style.setProperty('--hover-aplicar', '#547fc4');
        document.documentElement.style.setProperty('--background-input-imagem', '#2c2c2c');
    } else {
        document.documentElement.style.setProperty('--background', '#FCFCFC');
        document.documentElement.style.setProperty('--borda', '#c0bfbf');
        document.documentElement.style.setProperty('--borda-input-focus', '#c0bfbf');
        document.documentElement.style.setProperty('--letra-input', '#000');
        document.documentElement.style.setProperty('--placeholder', 'rgba(0, 0, 0, 0.7)');
        document.documentElement.style.setProperty('--background-input', '#ffffff');
        document.documentElement.style.setProperty('--button-plus', 'rgb(0, 0, 0)');
        document.documentElement.style.setProperty('--hover-plus', 'rgb(39, 39, 39)');
        document.documentElement.style.setProperty('--card', 'rgb(255, 255, 255)');
        document.documentElement.style.setProperty('--borda-card', 'rgb(255, 255, 255)');
        document.documentElement.style.setProperty('--card-shadow', 'rgb(182, 181, 181)');
        document.documentElement.style.setProperty('--linha1', '#e6e6e6');
        document.documentElement.style.setProperty('--linha2', '#e9e9e9');
        document.documentElement.style.setProperty('--linha3', 'rgb(226, 226, 226)');
        document.documentElement.style.setProperty('--letras', 'black');
        document.documentElement.style.setProperty('--botão-limpar', 'rgb(255, 255, 255)');
        document.documentElement.style.setProperty('--botão-aplicar', '#3071D9');
        document.documentElement.style.setProperty('--letra-botão-aplicar', 'rgb(255, 255, 255)');
        document.documentElement.style.setProperty('--letra-botão-limpar', '#3071D9');
        document.documentElement.style.setProperty('--hover-limpar', '#cbe6e7af');
        document.documentElement.style.setProperty('--hover-aplicar', '#547fc4');
        document.documentElement.style.setProperty('--background-input-imagem', 'rgb(255, 255, 255)');
    }
});