const outputEl = document.getElementById("output");

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
})