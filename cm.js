// cm.js

function populateTemplate(s) {

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
            'SEX',
            'TEEVEE',
            'MONEY',
            'COCAINE',
            'SPITTLE',
            'PUS',
            'PAIN',
            'HUMILIATION'
        ],
        'cheap' : [
            'CHEAP',
            'FAST',
            'GOOD',
            'COLORED',
            'LOUD',
            'ERUDITE',
            'FURRY',
            'ODORIFEROUS',
            'SIMPLE',
            'PORNOGRAPHIC',
            'GNARLY'
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
            'WHITENESS',
            'BENEFIT',
            'DETRIMENT'
        ],
        'museums' : [
            'MUSEUMS',
            'PALACES',
            'DOG HOUSES',
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
            'MEDITATION'
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
            'W00T'
        ]
    };

    // where to put inText
    var substitionKeys = [
        'art',
        'people',
        'museums',
        'rich',
        'food',
        'everybody',
        'kitchens'
    ];
    
    var rnd = Math.floor( Math.random( substituionKeys.length ) );
    var coin = Math.floor( Math.random( rnd ) );
    if( coin > 0 ) {
        // FIXME: start here
        // shuffle array
        // add uppercase inText to first rnd items
        ;
    }

    // get replacement keys into array
    // for each key flip a coin (figuratively)
    // to decide if substitions will be done with given key
    // if so, select replacement
    // if not, replacement is replacements[<key>][0]
    // update template

    return src;
}

function genManifesto() {
    // DEBUG
    now = new Date();
    var msg = "genManifesto() called " + now.toISOString();
    console.log( msg );

    // FIXME: do some simple regexp testing
    // only alphanumerics no spaces
    var inText = document.getElementById("inText").value;
    
    // DEBUG
    console.log( 'inText: ' + inText );

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
