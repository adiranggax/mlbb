function parseObject(str) {

    let fil = str.split("\n");
    let data = {};

    fil.forEach(element => {

        if(!element.includes(":")) return;

        let [key, value] = element.split(":");

        if(!key || !value) return;

        data[key.trim().toLowerCase().replace(/ /gi, "-")] = value.trim();

    });

    return data;
}

exports.parseObject = parseObject;
