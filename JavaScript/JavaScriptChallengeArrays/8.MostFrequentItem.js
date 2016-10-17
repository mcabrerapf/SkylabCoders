//mostFrequentItem
function mostFrequentItem(things) {
    var freq = {};
    for (var i=0; i<things.length;i++) {
        var character = things[i];
        if (freq[character]) {
           freq[character]++;
        } else {
           freq[character] = 1;
        }
    }

    return freq;
};



var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
