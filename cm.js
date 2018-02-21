// cm.js


function knuthShuffle(a) {
    var c = a.length;
    while (c > 0) {
        var idx = Math.floor(Math.random() * c);
        c--;

        var tmp = a[c];
        a[c] = a[idx];
        a[idx] = tmp;
    }
    return a;
}

function populateTemplate(uT, cR, t) {

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

<p id="manifestoFooter">
    inspiration:
    <a href="http://breadandpuppet.org/" target="_blank">Bread &amp; Puppet</a>
    Glover, Vermont, 1984<br>
    <span id="generatedDate">__TIMESTAMP__</span>
</p>`;

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
            'JOKING',
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
            'BULLSHITTING'
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
    // use changeRate to increase chances of userText
    var userTextReplacements = [
        'art',
        'business',
        'museums',
        'food',
        'everybody',
        'kitchens'
    ];

    var i, sa, coin;
    if(uT.length > 0) {
        coin = Math.floor(Math.random()* userTextReplacements.length);
        if(coin > 0) {
            sa = knuthShuffle(userTextReplacements);
            // changeRate
            var intCR = parseInt(cR);
            var numberReplacements = intCR + 1;
            for(i = 0; i < numberReplacements; i++) {
                var k = sa[i];
                for(var j = 0; j < coin; j++) {
                    replacements[k].push(uT);
                }
            }
        }
    }

    // do the replacements in the templateSrc
    var pattern, tmpSrc;
    var replacementKeys = Object.keys(replacements);
    for(i = 0; i < replacementKeys.length; i++) {
        var rawToken = replacementKeys[i];
        var token = '__' + rawToken.toUpperCase() + '__';
        // default is original
        var replacement = replacements[rawToken][0];
        var sides = cR * 2;
        coin = Math.floor(Math.random() * sides);
        if(coin > 0) {
            sa = knuthShuffle(replacements[rawToken]);
            var idx = Math.floor(Math.random() * replacements[rawToken].length);
            replacement = sa[idx];
        }
        // update template
        pattern = new RegExp(token, 'gm');
        tmpSrc = templateSrc.replace(pattern, replacement);
        templateSrc = tmpSrc;
    }

    return templateSrc;
}

function displayManifesto() {
    var displayDivs = [
        'gManifesto',
        'gAgain'
    ];
    for(var i = 0; i < displayDivs.length; i++) {
        document.getElementById(displayDivs[i]).style.display = 'block';
    }
    var hideDivs = [
        'gHeader',
        'gChangeRate',
        'gUserText',
        'gGenerate',
    ];
    for(var i = 0; i < hideDivs.length; i++) {
        document.getElementById(hideDivs[i]).style.display = 'none';
    }
}

function clearPage() {
    document.getElementById("gManifesto").innerText = '';
    document.getElementById("errorText").innerText = '';
}

function resetPage() {
    clearPage();
    //document.getElementById("userText").value = '';
    //document.getElementById("changeRate").value = 2;
    var displayDivs = [
        'gHeader',
        'gChangeRate',
        'gUserText',
        'gGenerate',
    ];
    for(var i = 0; i < displayDivs.length; i++) {
        document.getElementById(displayDivs[i]).style.display = 'block';
    }

    var hideDivs = [
        'gManifesto',
        'gAgain'
    ];
    for(var i = 0; i < hideDivs.length; i++) {
        document.getElementById(hideDivs[i]).style.display = 'none';
    }
}

function returnError(eM) {
    clearPage();
    document.getElementById("errorText").innerHTML = eM;
}

function genManifesto() {
    clearPage();
    var rawUserText = document.getElementById("userText").value;
    var singleWordPattern = new RegExp('^\\w+$');
    var singleWord = singleWordPattern.test(rawUserText);
    var spaceOnlyPattern = new RegExp('^\\s*$');
    var spaceOnly = spaceOnlyPattern.test(rawUserText);
    if(singleWord || spaceOnly) {
        var userText = '';
        if(! spaceOnly) {
            userText= rawUserText.toUpperCase();
        }
        var changeRate = document.getElementById("changeRate").value;
        var now = new Date();
        var timestamp = "generated: " + now.toISOString();
        var m = populateTemplate(userText, changeRate, timestamp);
        document.getElementById("gManifesto").innerHTML = m;
        displayManifesto();
    }
    else {
        resetPage();
        var errorMsg = 'invalid userText, ONLY alpha-numeric characters allowed: "' + rawUserText + '"';
        returnError(errorMsg);
    }
}
document.getElementById("bGenerate").onclick = genManifesto;

function displayChangeRate() {
    var cR = document.getElementById("changeRate").value;
    document.getElementById("crDisplay").innerText = cR;
}
document.getElementById("changeRate").onchange = displayChangeRate;

function nullSubmit() { return false; }
document.getElementById("fUserText").onsubmit = nullSubmit;

document.getElementById("bAgain").onclick = resetPage;

resetPage();
displayChangeRate();
