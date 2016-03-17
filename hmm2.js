var beer = 0,
icecream = 1,
apple = 2,
weather = 0,
mood = 1,
gender = 2,
marriage = 3;

var hmm = require('nodehmm'),
model = new hmm.Model();

var states = ['beer', 'icecream', 'apple'];

model.setStatesSize(states.length);

model.setStartProbability([0.375, 0.5, 0.125]);

// matrix A
model.setTransitionProbability([
[0.15, 0.57, 0.28], // healthy
[0, 0.55, 0.45], // fever
[0.2, 0.3, 0.5]
]);

// matrix B
model.setEmissionProbability([
[0.3, 0.5, 0.1, 0.1], //HEALTHY : {'normal': 0.5, 'cold': 0.4, 'dizzy': 0.1},
[0.3, 0.3, 0.2, 0.2],
[0.5, 0.5, 0, 0]  //FEVER : {'normal': 0.1, 'cold': 0.3, 'dizzy': 0.6}
]);

var result = hmm.viterbi(model, [weather, mood, gender, marriage]);
console.log(result); // [0,0,1]
result = result.map(function(r){return states[r]});
console.log(result);  // ['Healthy','Healthy','Fever']
