export function displayDialogue(text, onDisplayEnd){
    const dialogueUI = document.getElementById("textbox-container");
    const dialogue = document.getElementById("dialogue");

    dialogueUI.style.display = 'block';

    let index = 0;
    let currentText = "";
    const intervalRef = setInterval(() => {
        if(index < text.length) {
            currentText += text[index];
            dialogue.innerHTML = currentText;
            index++;
            return;
        }
        clearInterval(intervalRef);

    },5)

    const closeBtn = document.getElementById("close");

    function onCloseBtnClick(){
        onDisplayEnd();
        dialogueUI.style.display = "none";
        dialogue.innerHTML = "";
        clearInterval(intervalRef)
        closeBtn.removeEventListener("click", onCloseBtnClick);
    }

    closeBtn.addEventListener("click", onCloseBtnClick);
}

export function setCamScale(k, wideScale = 1.5) {
    const resizeFactor = k.width() / k.height();
    const scale = resizeFactor < 1 ? k.vec2(1) : k.vec2(wideScale);
    k.camScale(scale);
    return scale; // Optional: Return the scale for debugging or chaining
}
