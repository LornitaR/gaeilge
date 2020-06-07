function timpiste() {
    let timpiste = [
        {
            "ga":"shleamhnaigh mé ar an leac oighir ",
            "en":"I slipped on the ice "
        }, {
            "ga":"thosaigh mé ag troid le mo chara ",
            "en":"I started fighting with my friend "
        }, {
            "ga":"chuaigh mo theach thrí tinne ",
            "en":"my house caught fire  "
        }
    ]

    return timpiste[Math.floor(Math.random() * timpiste.length)];
}