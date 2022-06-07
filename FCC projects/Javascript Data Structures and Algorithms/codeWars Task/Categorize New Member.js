// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// Input
// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

// Output
// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

// Example
// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

// ****************** step  *******************
// 1- Loop through the 2 dimensional Array.
// 2- check if the value at index[0] or first index is >= 55 and index[1] or second index is greater than 7.
// 3- if above level evaluates to true return Senior else return open membership.


// ### solution 1 #######
// membership placement function
function opegnOrSenior(arr) {
    let placedMembership = [];

    for(let i=0; i<arr.length; i+=1){
        // console.log(arr[i][0]);
        arr[i][0] >= 55 && arr[i][1] > 7 ? placedMembership.push("Senior"): placedMembership.push("Open");
    }
console.log(placedMembership);
}

// openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]);//['Open', 'Senior', 'Open', 'Senior'])
// openOrSenior([[3, 12],[55,1],[91, -2],[53, 23]]),//['Open', 'Open', 'Open', 'Open'])
// openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]])//,['Senior', 'Open', 'Open', 'Open'])


// ############ soluton 2 ###

function openOrSenior(arr) {
    return arr.map(([age, handicap]) => age >= 55 && handicap > 7 ? "Senior" : "Open");
}
console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]));//['Open', 'Senior', 'Open', 'Senior'])
