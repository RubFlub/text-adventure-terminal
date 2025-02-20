const outputEl = document.getElementById("output");
const inputEl = document.getElementById("input-field");

let userInput = "";

function print(text) {
    /* Print each element */
    text.forEach((element, i) => {
        setTimeout(() => {
            /* Create paragraph element and give it the typed class. */
            const pEl = document.createElement("p");
            pEl.classList.add("typed");
            /* Set the inner content of the element to a line of text. */
            pEl.innerHTML = element;
            console.log(pEl.innerHTML);
            /* The paragraph needs to be placed after the last line of text printed. */
            outputEl.appendChild(pEl);
        /**
         * The time has to be multiplied by the index to ensure that lines are printed in sequence,
         * not all at once.
         * i.e. first line printed after 0 milliseconds, the second after 50, etc.
         */
        }, 50 * i);
    });
}

/**
 * Print the title message when the web page loads.
 */
window.addEventListener('load', () => {
    /**
     * The text to be printed.
     * The <pre> tag is used for pre-formatted text, which will ensure that the text appears exactly
     * how it is written below. It will also ensure that the text is fixed width.
     */
    const text = [
        "<pre>┏┳┓  ┏┓  ┏┓┏┓  ┏┳┓</pre>",
        "<pre> ┃   ┣    ┃┃    ┃ </pre>",
        "<pre> ┻   ┗┛  ┗┛┗┛   ┻ </pre>",
        "<br",
        "<pre>┏┓  ┳┓  ┓┏  ┏┓  ┳┓  ┏┳┓  ┳┳  ┳┓  ┏┓</pre>",
        "<pre>┣┫  ┃┃  ┃┃  ┣   ┃┃   ┃   ┃┃  ┣┫  ┣ </pre>",
        "<pre>┛┗  ┻┛  ┗┛  ┗┛  ┛┗   ┻   ┗┛  ┛┗  ┗┛</pre>",
        "<br>",
        "Welcome to Text Adventure!",
        "dummy text",
        "dummy text",
        "<br>"
    ];

    print(text);
});

/**
 * Assign an event listener to the input element to check for when enter is pressed.
 */
inputEl.addEventListener("keypress", (event) => {
    if (event.key !== "Enter") {
        return;
    } 

    /* Store the input from the user, then reset the input field. */
    userInput = inputEl.value;
    inputEl.value = "";

    /* Print the command separately to avoid the typing animation. */
    const pEl = document.createElement("p");
    pEl.innerHTML = `<span id="input-name">user</span>@<span id="input-hostname">adventure</span>~$ <span class="input-text">${userInput}</span>`;
    outputEl.appendChild(pEl);

    /* If the input is blank, we can just end here. */
    if (!userInput) {
        return;
    }

    // placeholder
    print(
        [
            "<br>",
            "example test",
            "dwiuhdwuidhwqidhqidqid",
            "abcdefghijklmnopqrstuvwxyz",
            "<br>"
        ]
    );
})