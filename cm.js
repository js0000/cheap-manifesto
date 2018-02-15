// cm.js


function knuthShuffle(a) {
    var c = a.length;
    // While there are elements in the array
    while (c > 0) {
        // Pick a random index
        var idx = Math.floor( Math.random() * c );

        // Decrease counter by 1
        c--;

        // And swap the last element with it
        var tmp = a[c];
        a[c] = a[idx];
        a[idx] = tmp;
    }
    return a;
}

function populateTemplate(userText) {

    // FIXME: check for es2015 compliance
    var src = `<pre>
<h2>the WHY __CHEAP__ __ART__? manifesto</h2>

__PEOPLE__ have been __THINKING__ too long that __ART__ is a __PRIVILEGE__ of the
__MUSEUMS__ &amp; the __RICH__. __ART__ IS NOT __BUSINESS__!

It does not belong to banks &amp; fancy investors __ART__ IS __FOOD__. You
cant EAT it BUT it FEEDS you. __ART__ has to be __CHEAP__ &amp; available
to __EVERYBODY__. It needs to be __EVERYWHERE__ because it is the INSIDE
of the WORLD.

__ART__ __SOOTHES__ PAIN!
Art wakes up sleepers!
__ART__ FIGHTS AGAINST __WAR__ &amp; __STUPIDITY__.
__ART__ SINGS HALLELUJA!
__ART__ IS FOR __KITCHENS__!
__ART__ IS LIKE __GOOD__ __BREAD__!
Art is like green trees!
Art is like white clouds in blue sky!
__ART__ IS __CHEAP__!
__HURRAH__!

<span id="cit">(from Bread &amp; Puppet Glover, Vermont 1984)</span>
</pre>`;

    var replacements = {
        'art' : [
            'ART',
            'MUSIC',
            'POETRY',
            'SEX',
            'WALKING',
            'MEDITATION',
            'DISCIPLINE',
            'HUMILIATION',
            'ENCHANTMENT',
            'DISCUSSION',
            'TEEVEE',
            'TECHNOLOGY',
            'MONEY',
            'COCAINE',
            'SWEAT',
            'SPITTLE'
        ],
        'cheap' : [
            'CHEAP',
            'FAST',
            'GOOD',
            'LOUD',
            'ERUDITE',
            'FURRY',
            'SIMPLE',
            'PORNOGRAPHIC',
        ],
        'people' : [
            'PEOPLE',
            'PLANTS',
            'LAW ENFORCEMENT',
            'IMMIGRANTS'
        ],
        'thinking' : [
            'THINKING',
            'WHINING',
            'WISHING',
            'ASSERTING'
        ],
        'privilege' : [
            'PRIVILEGE',
            'SMELL',
            'BENEFIT',
            'BURDEN'
        ],
        'museums' : [
            'MUSEUMS',
            'PALACES',
            'OUTHOUSES',
            'SHACKS'
        ],
        'rich' : [
            'RICH',
            'POOR',
            'CAPITALISTS',
            'ANARCHISTS'
        ],
        'business' : [
            'BUSINESS',
            'HYGENE',
            'SERVITUDE',
            'LEISURE'
        ],
        'food' : [
            'FOOD',
            'GRAVY',
            'PLASTIC',
            'RANCID'
        ],
        'everybody' : [
            'EVERYBODY',
            'HUMANS',
            'ADOLESCENTS',
            'MONKS'
        ],
        'everywhere' : [
            'EVERYWHERE',
            'IN ORBIT',
            'WAITING',
            'UNCORKED'
        ],
        'soothes' : [
            'SOOTHES',
            'HIDES',
            'EASES',
            'ENFLAMES'
        ],
        'war' : [
            'WAR',
            'RELIGION',
            'RACE',
            'RATIONALITY'
        ],
        'stupidity' : [
            'STUPIDITY',
            'EDUCATION',
            'TOMFOOLERY',
            'DECEIT'
        ],
        'kitchens' : [
            'KITCHENS',
            'BARROOMS',
            'GYNASIUMS',
            'CONSERVATORIES'
        ],
        'good' : [
            'GOOD',
            'PASSING',
            'WRETCHED',
            'CERTIFIED'
        ],
        'bread' : [
            'BREAD',
            'CUNNILINGUS',
            'MEDITATION',
            'WEED'
        ],
        'hurrah' : [
            'HURRAH',
            'OUCH',
            'FUCKIN A',
            'w00t'
        ]
    };

    // where to put inText
    var substitutionKeys = [
        'art',
        'people',
        'museums',
        'rich',
        'food',
        'everybody',
        'kitchens'
    ];

    // append userText to selected replacement arrays
    var i, sa, rnd, coin;
    if( userText.length > 0 ) {
        rnd = Math.floor( Math.random() * substitutionKeys.length );
        coin = Math.floor( Math.random() * rnd );
        if( coin > 0 ) {
            sa = knuthShuffle( substitutionKeys );
            for( i = 0; i < rnd; i++ ) {
                k = sa[i];
                replacements[k].push( userText );
    
                // DEBUG
                console.log( 'adding ' + userText + ' to ' + k );
            }
        }
    }

    var pattern, tmpSrc;
    var replacementKeys = Object.keys( replacements );
    for( i = 0; i < replacementKeys.length; i++ ) {
        rawToken = replacementKeys[i];
        token = '__' + rawToken.toUpperCase() + '__';
        // default is original
        replacement = replacements[rawToken][0];
        // hardcoded one in four
        coin = Math.floor( Math.random() * 4 );
        if( coin > 0 ) {
            sa = knuthShuffle( replacements[rawToken] );
            rnd = Math.floor( Math.random() * replacements[rawToken].length );
            replacement = sa[rnd];
        }
        // update template
        pattern = new RegExp( token, 'gm' );
        tmpSrc = src.replace( pattern, replacement );
        src = tmpSrc;
    }

    return src;
}

function genManifesto() {
    // DEBUG
    now = new Date();
    var msg = "genManifesto() called " + now.toISOString();
    console.log( msg );

    var rawInText = document.getElementById("inText").value;
    var inText = '';
    var singleWordPattern = new RegExp( '^\\w+$' );
    var ok = singleWordPattern.test( rawInText );
    if( ! ok ) {
        // FIXME: return error
        var error = 'invalid inText, must be ONLY alphanumerics: ' + rawInText;
        
        // DEBUG
        console.log( error );
    }
    else {
       inText = rawInText.toUpperCase();
    }
    gm = populateTemplate( inText );
    document.getElementById("outText").innerHTML = gm;
}

document.getElementById("genButton").onclick = genManifesto;

function nullSubmit() {
    // DEBUG
    now = new Date();
    var msg = "nullSubmit() called " + now.toISOString();
    console.log( msg );

    return false;
}

document.getElementById("cheapForm").onsubmit = nullSubmit;

// DEBUG
alert( "cm.js loaded ok" );
