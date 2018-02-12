// cm.js

function populateTemplate(s) {

    var src = `<pre>
<h2>the WHY __CHEAP__ __ART__? manifesto</h2>

__PEOPLE__ have been __THINKING__ too long that __ART__ is a __PRIVILEGE__ of the
__MUSEUMS__ &amp; the __RICH__. __ART__ IS NOT __BUSINESS__!

It does not belong to banks &amp; fancy investors __ART__ IS __FOOD__. You
cant EAT it BUT it FEEDS you. __ART__ has to be __CHEAP__ &amp; available
to __EVERYBODY__. It needs to be __EVERYWHERE__ because it is the INSIDE
of the WORLD.

__ART__ SOOTHES PAIN!
Art wakes up sleepers!
__ART__ FIGHTS AGAINST WAR &amp; STUPIDITY.
__ART__ SINGS HALLELUJA!
__ART__ IS FOR KITCHENS!
__ART__ IS LIKE GOOD BREAD!
Art is like green trees!
Art is like white clouds in blue sky!
__ART__ IS __CHEAP__!
HURRAH!

<span id="cit">(from Bread &amp; Puppet Glover, Vermont 1984)</span>
</pre>`;

    var artReplacements = [
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
    ];

    var cheapReplacements = [
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
    ];

    var peopleReplacements = [
        'PEOPLE',
        'PLANTS',
        'LAW ENFORCEMENT',
        'IMMIGRANTS'
    ];

    var thinkingReplacements = [
        'THINKING',
        'WHINING',
        'WISHING',
        'ASSERTING'
    ];

    var privilegeReplacements = [
        'PRIVILEGE',
        'BURDEN',
        'BENEFIT',
        'DETRIMENT'
    ];

    var museumsReplacements = [
        'MUSEUMS',
        'PALACES',
        'DOG HOUSES',
        'SHACKS'
    ];

    var richReplacements = [
        'RICH',
        'POOR',
        'CAPITALISTS',
        'ANARCHISTS'
    ];

    var businessReplacements = [
        'BUSINESS',
        'HYGENE',
        'SERVITUDE',
        'MEDITATION'
    ];

    var foodReplacements = [
        'FOOD',
        'GRAVY',
        'PLASTIC',
        'RANCID'
    ];

    var everybodyReplacements = [
        'EVERYBODY',
        'IDIOTS',
        'ADOLESCENTS',
        'MONKS'
    ];

    everywhereReplacements = [
        'EVERYWHERE',
        'IN ORBIT',
        'TRANSCENDENT',
        'MUNDANE'
    ];



    // FIXME
    // not all substitutions are made each time, some are skipped
    // need a data structure to determine which array[s]
    //   get inText added to them

    return src;
}

function genManifesto() {
    // DEBUG
    now = new Date();
    var msg = "genManifesto() called " + now.toISOString();
    console.log( msg );

    // FIXME: this comes from inText on form
    var inText = "nothing";
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
