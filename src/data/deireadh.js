function deireadh() {
    let deireadh = [
        {
            "ga": "Ní dhéanfaidh mé dearmad go deo ar an lá sin.",
            "en": "I will never forget that day. "
        }, {
            "ga": "Lá iontach a bhí ann. ",
            "en": "It was a great day. "
        }, {
            "ga": "Bhí an t-ádh orm.",
            "en": "I was lucky."
        }, {
            "ga": "Bhí an radharc go hiontach.",
            "en": "The view was wonderful."
        }
    ]

    return deireadh[Math.floor(Math.random() * deireadh.length)];
}