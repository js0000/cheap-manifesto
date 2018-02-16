// cm.js


function knuthShuffle(a) {
    var c = a.length;
    while (c > 0) {
        var idx = Math.floor( Math.random() * c );
        c--;

        var tmp = a[c];
        a[c] = a[idx];
        a[idx] = tmp;
    }
    return a;
}

function populateTemplate(uT, r, t) {

    // FIXME: check for es2015 compliance

    var templateSrc = `
<h2>the WHY __CHEAP__ __ART__? manifesto</h2>

<p>__PEOPLE__ have been __THINKING__ too long that __ART__ is a
__PRIVILEGE__ of the __MUSEUMS__ &amp; the __RICH__. __ART__ IS
NOT __BUSINESS__!</p>

<p>It does not belong to banks &amp; fancy investors __ART__ IS
__FOOD__. You cant EAT it __BUT__ it __FEEDS__ you. __ART__ has to
be __CHEAP__ &amp; available to __EVERYBODY__. It needs to be
__EVERYWHERE__ because it is the __INSIDE__ of the __WORLD__.</p>

<p>__ART__ __SOOTHES__ PAIN!<br />
Art wakes up sleepers!<br />
__ART__ FIGHTS __AGAINST__ __WAR__ &amp; __STUPIDITY__.<br />
__ART__ SINGS __HALLELUJA__!<br />
__ART__ IS FOR __KITCHENS__!<br />
__ART__ IS LIKE __GOOD__ __BREAD__!<br />
Art is like green trees!<br />
Art is like white clouds in blue sky!<br />
__ART__ IS __CHEAP__!<br />
__HURRAH__!<br />
</p>

<p id="manifestoFooter">derived from: <cite>Bread &amp; Puppet Glover, Vermont
1984</cite><br><span id="generatedDate">__TIMESTAMP__</span></p>`;

    // four element arrays like
    // [ original, similar, opposite, weird ]
    var replacements = {
        'art' : [
            'ART',
            'MUSIC',
            'POETRY',
            'DANCE',
            'MEDITATION',
            'DISCIPLINE',
            'WALKING',
            'PATIENCE',
            'HUMILIATION',
            'COCAINE',
            'TEEVEE',
            'MONEY',
            'PORNOGRAPHY',
            'JOKES',
            'SWEAT',
            'DAYDREAMS'
        ],
        'cheap' : [
            'CHEAP',
            'SIMPLE',
            'FAST',
            'GOOD',
            'LOUD',
            'PORNOGRAPHIC',
            'ERUDITE',
            'FURRY'
        ],
        'people' : [
            'PEOPLE',
            'CIVILIZATIONS',
            'BASTARDS',
            'PLANTS'
        ],
        'thinking' : [
            'THINKING',
            'ASSERTING',
            'WHINING',
            'FARTING'
        ],
        'privilege' : [
            'PRIVILEGE',
            'BENEFIT',
            'PENALTY',
            'REMNANT'
        ],
        'museums' : [
            'MUSEUMS',
            'PALACES',
            'OUTHOUSES',
            'IMAGINATION'
        ],
        'rich' : [
            'RICH',
            'CAPITALISTS',
            'POOR',
            'ANARCHISTS'
        ],
        'business' : [
            'BUSINESS',
            'LEISURE',
            'SERVITUDE',
            'HYGENE'
        ],
        'food' : [
            'FOOD',
            'WINE',
            'RANCID',
            'PLASTIC'
        ],
        'but' : [
            'BUT',
            'OR',
            'NOT',
            'AND'
        ],
        'feeds' : [
            'FEEDS',
            'NOURISHES',
            'SICKENS',
            'ANNOINTS'
        ],
        'everybody' : [
            'EVERYBODY',
            'HUMANS',
            'NO ONE',
            'MONKS'
        ],
        'everywhere' : [
            'EVERYWHERE',
            'WIDESPREAD',
            'ABSENT',
            'IN ORBIT'
        ],
        'inside' : [
            'INSIDE',
            'WITHIN',
            'OUTSIDE',
            'CANVAS'
        ],
        'world' : [
            'WORLD',
            'PLANET',
            'SKY',
            'MIND'
        ],
        'soothes' : [
            'SOOTHES',
            'EASES',
            'ENHANCES',
            'FOLLOWS'
        ],
        'against' : [
            'AGAINST',
            'TO CRUSH',
            'FOR',
            'ANCIENT'
        ],
        'war' : [
            'WAR',
            'RELIGION',
            'RATIONALITY',
            'GLUTEN'
        ],
        'stupidity' : [
            'STUPIDITY',
            'DECEIT',
            'EDUCATION',
            'LO-MEIN'
        ],
        'halleluja' : [
            'HALLELUJA',
            'AMEN',
            'BULLSHIT',
            'YO'
        ],
        'kitchens' : [
            'KITCHENS',
            'PORCHES',
            'OUT HOUSES',
            'ILLNESS'
        ],
        'good' : [
            'GOOD',
            'AGED',
            'WRETCHED',
            'CERTIFIED'
        ],
        'bread' : [
            'BREAD',
            'RICE',
            'DONUTS',
            'CUNNILINGUS'
        ],
        'hurrah' : [
            'HURRAH',
            'FUCKIN A',
            'OUCH',
            'w00t'
        ],
        'timestamp' : [
            t
        ]
    };

    // append userText to selected replacement arrays
    // use randomness to increase chances of userText
    var userTextReplacements = [
        'art',
        'business',
        'museums',
        'food',
        'everybody',
        'kitchens'
    ];

    var i, sa, coin;
    if( uT.length > 0 ) {
        coin = Math.floor( Math.random()* userTextReplacements.length );

        // DEBUG
        console.log( 'coin: ' + coin );
        if( coin > 0 ) {
            sa = knuthShuffle( userTextReplacements );
            // randomness
            var intR = parseInt( r );
            var numberReplacements = intR + 1;

            // DEBUG
            console.log( 'numberReplacements: ' + numberReplacements );

            for( i = 0; i < numberReplacements; i++ ) {
                var k = sa[i];

                // DEBUG
                console.log( 'k: ' + k );

                for( var j = 0; j < coin; j++ ) {
                    replacements[k].push( uT );
                }

                // DEBUG
                var debugMsg = 'adding ' + uT + ' to ' + k;
                console.log( debugMsg );
            }
        }
    }

    // do the replacements in the templateSrc
    var pattern, tmpSrc;
    var replacementKeys = Object.keys( replacements );
    for( i = 0; i < replacementKeys.length; i++ ) {
        var rawToken = replacementKeys[i];
        var token = '__' + rawToken.toUpperCase() + '__';
        // default is original
        var replacement = replacements[rawToken][0];
        var sides = r * 2;
        coin = Math.floor( Math.random() * sides );
        if( coin > 0 ) {
            sa = knuthShuffle( replacements[rawToken] );
            var idx = Math.floor( Math.random() * replacements[rawToken].length );
            replacement = sa[idx];

            // DEBUG
            console.log( token + ' replaced with ' + replacement );
        }
        // update template
        pattern = new RegExp( token, 'gm' );
        tmpSrc = templateSrc.replace( pattern, replacement );
        templateSrc = tmpSrc;
    }

    return templateSrc;
}

function clearPage() {
    document.getElementById("userText").value = '';
    document.getElementById("outText").innerText = '';
    document.getElementById("errorText").innerText = '';
}

function returnError( eM ) {
    clearPage();
    document.getElementById("errorText").innerText = eM;
}

function genManifesto() {
    var rawUserText = document.getElementById("userText").value;
    var singleWordPattern = new RegExp( '^\\w+$' );
    var singleWord = singleWordPattern.test( rawUserText );
    var spaceOnlyPattern = new RegExp( '^\\s*$' );
    var spaceOnly = spaceOnlyPattern.test( rawUserText );

    // DEBUG
    console.log( 'rawUserText: ' + rawUserText );
    console.log( 'singleWordPattern: ' + singleWordPattern );
    console.log( 'spaceOnly: ' + spaceOnly );
    if( singleWord || spaceOnly ) {
        var userText = rawUserText.toUpperCase();
        var randomness = document.getElementById("randomness").value;

        // DEBUG
        console.log( 'randomness: ' + randomness );

        var now = new Date();
        var timestamp = "generated: " + now.toISOString();
        var oT = populateTemplate( userText, randomness, timestamp );
        document.getElementById("outText").innerHTML = oT;
    }
    else {
        var errorMsg = 'invalid userText, must be ONLY alphanumerics: "' + rawUserText + '"';
        returnError( errorMsg );

        // DEBUG
        console.log( errorMsg );
    }
}

document.getElementById("genButton").onclick = genManifesto;

function displayRandomness() {
    var r = document.getElementById("randomness").value;
    document.getElementById("rLevel").innerText = r;
}

document.getElementById("randomness").onchange = displayRandomness;

function nullSubmit() {
    return false;
}

document.getElementById("cheapForm").onsubmit = nullSubmit;
clearPage();
displayRandomness();

// DEBUG
alert( "cm.js loaded ok" );
