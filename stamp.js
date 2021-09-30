function format(string) {
    let str = /\D/.test(string) ? string : +string;
    let date = new Date(str);
    let unix = +date,
        utc = date.toUTCString();
    
    if (isNaN(unix)) {
        return { error : "Invalid Date" };
    } else {
        return { unix: unix, utc: utc };
    }

}

exports .format = format;