function cabhair() {
    let cabhair = [
        {
            "ga": "Tar éis tamaill, thug an banaltra X-ghá dom. ",
            "en": "After a while, the nurse gave me an X-ray. "
        }, {
            "ga": "Tar éis tamaill, chuir fear fhios ar an otharcharr. ",
            "en": "After a while, a man called an ambulance. "
        }, {
            "ga": "Tar éis tamaill, chuir an bhean glaoch ar mo thuismitheoirí. ",
            "en": "After a while, the woman called my parents. "
        }, {
            "ga": "Tháinig an otharcharr ar nós na gaoithe. ",
            "en": "The ambulance arrived like the wind. "
        },
    ]

    return cabhair[Math.floor(Math.random() * cabhair.length)];
}
