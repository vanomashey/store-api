var DecisionTree = require('decision-tree');

function get_offer(customer){
    var state = [];
    state['jack'] = 
    {
        "last-beer": "0",
        "last-icecream": "1",
        "last-apple": "1",
        "weather": "1",
        "mood": "1",
        "gender": "0",
        "married": "1"
    };
    state['susan'] =
    {
        "last-beer": "1",
        "last-icecream": "1",
        "last-apple": "0",
        "weather": "0",
        "mood": "0",
        "gender": "1",
        "married": "0"
    };
    state['jim'] =
    {
        "last-beer": "1",
        "last-icecream": "0",
        "last-apple": "1",
        "weather": "0",
        "mood": "0",
        "gender": "0",
        "married": "0"
    };
    var current_state = state[customer];

    var offering = [];

    var training_data = [
        {"beer":"1", "icecream":"1", "apple":"1", "last-beer":"1", "last-icecream":"0", "last-apple":"1", "weather":"0", "mood":"1", "gender":"0", "married":"1"},
        {"beer":"0", "icecream":"1", "apple":"1", "last-beer":"1", "last-icecream":"1", "last-apple":"1", "weather":"1", "mood":"0", "gender":"0", "married":"1"},
        {"beer":"1", "icecream":"0", "apple":"1", "last-beer":"0", "last-icecream":"1", "last-apple":"1", "weather":"1", "mood":"1", "gender":"0", "married":"1"},
        {"beer":"0", "icecream":"1", "apple":"0", "last-beer":"1", "last-icecream":"1", "last-apple":"0", "weather":"0", "mood":"1", "gender":"1", "married":"0"},
        {"beer":"0", "icecream":"1", "apple":"0", "last-beer":"0", "last-icecream":"1", "last-apple":"0", "weather":"1", "mood":"0", "gender":"1", "married":"0"},
        {"beer":"0", "icecream":"1", "apple":"1", "last-beer":"0", "last-icecream":"1", "last-apple":"0", "weather":"1", "mood":"1", "gender":"1", "married":"0"},
        {"beer":"0", "icecream":"1", "apple":"1", "last-beer":"1", "last-icecream":"1", "last-apple":"0", "weather":"0", "mood":"1", "gender":"0", "married":"0"},
        {"beer":"0", "icecream":"0", "apple":"1", "last-beer":"0", "last-icecream":"1", "last-apple":"1", "weather":"1", "mood":"0", "gender":"0", "married":"0"},
        {"beer":"1", "icecream":"0", "apple":"0", "last-beer":"0", "last-icecream":"0", "last-apple":"1", "weather":"1", "mood":"1", "gender":"0", "married":"0"},
        {"beer":"0", "icecream":"1", "apple":"1", "last-beer":"0", "last-icecream":"1", "last-apple":"1", "weather":"0", "mood":"1", "gender":"1", "married":"1"},
        {"beer":"0", "icecream":"0", "apple":"1", "last-beer":"0", "last-icecream":"1", "last-apple":"1", "weather":"1", "mood":"0", "gender":"1", "married":"1"},
        {"beer":"0", "icecream":"0", "apple":"1", "last-beer":"0", "last-icecream":"0", "last-apple":"1", "weather":"1", "mood":"1", "gender":"1", "married":"1"}
        ];
    var features = ["last-beer", "last-icecream", "last-apple", "weather", "mood", "gender", "married"];

    var class_name = "beer";
    var dt = new DecisionTree(training_data, class_name, features);
    var predicted_class = dt.predict(current_state); 
    if (predicted_class == 1)
    {
        offering.push(class_name);
    }

    //-------------------------------
    class_name = "icecream";
    dt = new DecisionTree(training_data, class_name, features);
    predicted_class = dt.predict(current_state);
    if (predicted_class == 1)
    {
        offering.push(class_name);
    }

    //-------------------------------
    class_name = "apple";
    dt = new DecisionTree(training_data, class_name, features);
    predicted_class = dt.predict(current_state);
    if (predicted_class == 1)
    {
        offering.push(class_name);
    }

    return offering;
}

module.exports = {
    get_offer:get_offer
}



