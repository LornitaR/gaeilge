function áit() {
    let áit = [
        {
            "ga": "agus chuaigh mé go dtí an siopa. ",
            "en": "and I went to the shop. "
        }, {
            "ga": "agus bhí mé cois farraige. ",
            "en": "and I was at the seaside. "
        }, {
            "ga": "agus bhí mé i mo sheomra leapa. ",
            "en": "and I was in my bedroom. "
        }
    ]

    return áit[Math.floor(Math.random() * áit.length)];
}