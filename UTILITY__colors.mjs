const crayons = {
    reset: "\x1b[0m",
    bright: "\x1b[1m",
    dim: "\x1b[2m",
    underscore: "\x1b[4m",
    blink: "\x1b[5m",
    reverse: "\x1b[7m",
    hidden: "\x1b[8m",

    fg: {
        black: "\x1b[1;30m",
        white: "\x1b[1;37m",
        red: "\x1b[1;31m",
        green: "\x1b[1;32m",
        yellow: "\x1b[1;33m",
        blue: "\x1b[1;34m",
        magenta: "\x1b[1;35m",
        cyan: "\x1b[1;36m",
        crimson: "\x1b[1;38m"
    }
};

function console_log_inColor(arg_thru, arg_color = 'white') {
    let arg_stringified = arg_thru.toString();
    switch (arg_color) {
        case "white":
            console.log(crayons.fg.white, arg_stringified, crayons.reset);
            break;
        case "red":
            console.log(crayons.fg.red, arg_stringified, crayons.reset);
            break;
        case "green":
            arg_thru.toString();
            console.log(crayons.fg.green, arg_stringified, crayons.reset);
            break;
    }
}

export {crayons, console_log_inColor};