function fáth() {
    let fáth = [
        {
            "ga": "bhí mé ar mo laethanta saoire ",
            "en": "I was on holidays "
        }, {
            "ga": "bhí mé ag dul abhaile tar éis ceolchoirm ",
            "en": "I was going home after a concert "
        }, {
            "ga": "bhí mé ag dul go dtí cluiche peile ",
            "en": "I was going to a football match "
        } , {
            "ga": "bhí mé ag tiomáint abhaile tar éis obair ",
            "en": "I was driving home after work "
        }, {
            "ga": "bhí mé ag glanadh na bhfuinneoga ",
            "en": "I was cleaning the windows "
        }
    ]

    return fáth[Math.floor(Math.random() * fáth.length)];
}
