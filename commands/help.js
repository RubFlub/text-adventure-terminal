const commands = [
    ["help", "Prints this list."],
    ["about", "What is this website?"]
];

function generateCommandMessage() {
    let msg = ["<br>"];
    commands.forEach((element) => {
        /* Non-breaking spaces. */
        const singleSpace = "&nbsp;";
        const doubleSpace = "&emsp;";

        let str = "";
        str += doubleSpace;
        str += `<em>'${element[0]}'</em>`;
        /* Ensure the descriptions are all in one column. */
        str += singleSpace.repeat(16 - element[0].length);
        str += element[1];

        msg.push(str);
    });
    msg.push("<br>");

    return msg;
}

export const helpMessage = generateCommandMessage();