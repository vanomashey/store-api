var hmm = require( 'hmm' );

var    aModel = new hmm(
[ 'b', 'i', 'a' ],
'a', [ 'w', 'm', 'g', 'm' ], {
    'b': 0.375,
    'i':0.5,
    'a':0.125
}, {
    'b': {
        'b': 0.14,
        'i': 0.57,
        'a': 0.29
    },
    'i': {
        'i': 0.54,
        'a':0.46
    },
    'a': {
        'b': 0.2,
        'i': 0.3,
        'a':0.5
    }
}, {
    'b': {
        'w': 0.3,
        'm': 0.5,
        'g':0.1,
        'm':0.1
    },
    'i': {
        'w': 0.3,
        'm': 0.3,
        'g':0.2,
        'm':0.2
    },
    'a': {
        'w': 0.5,
        'm': 0.5
    }
}
);
/*
var    aModel = new hmm(
[ 'beer', 'icecream', 'apple' ],
'apple', [ 'weather', 'mood', 'gender', 'married' ], {
    'bear': 0.375,
    'icecream':0.5,
    'apple':0.125
}, {
    'beer': {
        'beer': 0.14,
        'icecream': 0.57,
        'apple': 0.29
    },
    'icecream': {
        'icecream': 0.54,
        'apple':0.46
    },
    'apple': {
        'beer': 0.2,
        'icecream': 0.3,
        'apple':0.5
    }
}, {
    'beer': {
        'weather': 0.3,
        'mood': 0.5,
        'gender':0.1,
        'married':0.1
    },
    'icecream': {
        'weather': 0.3,
        'mood': 0.3,
        'gender':0.2,
        'married':0.2
    },
    'apple': {
        'weather': 0.5,
        'mood': 0.5
    }
}
);

*/
//console.log( 'The probability that something white in a bottle is milk is ' +  ( aModel.generationProbability( ['weather'] ) * 100 ) + '%.' );
