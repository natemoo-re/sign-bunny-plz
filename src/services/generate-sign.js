const CORNER = {
    TOP_LEFT: '\u250C',
    TOP_RIGHT: '\u2510',
    BOTTOM_LEFT: '\u2514',
    BOTTOM_RIGHT: '\u2518'
};
const BAR = {
    HORIZONTAL: '\u2500',
    VERTICAL: '\u2502'
};
const SPACE = {
    EM: '\u2003'
}

const TOP = `${CORNER.TOP_LEFT}${BAR.HORIZONTAL.repeat(11)}${CORNER.TOP_RIGHT}`;
const BOTTOM = `${CORNER.BOTTOM_LEFT}${BAR.HORIZONTAL.repeat(11)}${CORNER.BOTTOM_RIGHT}`;
const RABBIT = `${SPACE.EM.repeat(4)}(\\__/)   ||
${SPACE.EM.repeat(4)}(•ㅅ•)   ||
${SPACE.EM.repeat(3)}  /  　  づ`


// TODO
// Add wrapping and/or maxLength checks?
// I bet Emojis will bork this up (String.split() doesn't like ZWJ)

// Turns out Text Centering is a nightmare
// Unless I hardcode all of the widths of alphabetical characters 
// and loop thru to get an approximate total pixel width per line
// I don't think it's going to happen
const GenerateSign = (text) => {
    text = text.split('\n')
        .map(t => t.trim())
        .map(t => `${SPACE.EM}${t}`);
    return [
        TOP,
        ...text,
        BOTTOM,
        RABBIT
    ].join('\n');
}

module.exports = { GenerateSign };