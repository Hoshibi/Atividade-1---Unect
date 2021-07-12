function addImg(){

    const inputImg = document.getElementById('imgInput');
    const valorImg = inputImg.value;

    inputImg.value = '';

    const evento = addEventListener("click", () => {
        document.body.style.backgroundImage = `url("${valorImg}")`;

    });

}

function clearImg(){

    const evento = addEventListener("click", () => {
        document.body.style.backgroundImage = "none";

    });

}