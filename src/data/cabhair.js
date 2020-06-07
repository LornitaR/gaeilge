function cabhair() {
    let cabhair = [
        {
            "ga": "Thug an banaltra X-ghá dom. ",
            "en": "The nurse gave me an X-ray. "
        }, {
            "ga": "Chuir fear fhios ar an otharcharr. ",
            "en": "A man called an ambulance. "
        }, {
            "ga": "Chuir an bhean glaoch ar mo thuismitheoirí. ",
            "en": "The woman called my parents. "
        }
    ]

    return cabhair[Math.floor(Math.random() * cabhair.length)];
}