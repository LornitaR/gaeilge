function comhshníocht() {
    let comhshníocht = [
        {
            "ga": "agus bhris mé mo chos. ",
            "en": "and I broke my leg. "
        }, {
            "ga": "agus thosaigh mo shrón ag cur fola. ",
            "en": "and my nose started bleeding. "
        }, {
            "ga": "agus bhuail mo cheann ar an talamh. ",
            "en": "and I hit my head off the ground. "
        }, {
            "ga": "agus bhí mé ar an talamh gan aithne gan urlabhra. ",
            "en": "and I was on the ground unconscious. "
        }, {
            "ga": "agus fuair mé bás. ",
            "en": "and I died. "
        }
    ]

    return comhshníocht[Math.floor(Math.random() * comhshníocht.length)];
}