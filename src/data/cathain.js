function cathain() {
        let cathain = [
        {
            "ga": "An samhradh seo caite, ",
            "en": "Last summer, "
        }, {
            "ga": "Anuraidh, ",
            "en": "Last year, "
        }, {
            "ga": "Dhá bhliain ó shin, ",
            "en": "Two years ago, "
        }, {
            "ga": "Nuair a bhí mé óg, ",
            "en": "When I was young, "
        }, {
            "ga": "Fadó, fadó in Éirinn, ",
            "en": "Long ago in Ireland, "
        }, {
            "ga": "Lá amháin, ",
            "en": "One day, "
        }
    ]

    return cathain[Math.floor(Math.random() * cathain.length)];
}