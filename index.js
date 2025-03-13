function gameObject() {  //can we change this to const gameObject?
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}

function numPointsScored(playerName) {   
const data = gameObject();   
    for (let key in data) {
        console.log(key);

    console.log(data[key]["players"]);

    for (let player in data[key]["players"]) {
        if (player === playerName) {

       return data[key]["players"][playerName]["points"];  // return that player's points scored
        }
    }
}
}
console.log(numPointsScored("Brendan Hayword"))


function shoeSize(playerName) {   
    const data = gameObject();   
        for (let key in data) {
            console.log(key);
    
        console.log(data[key]["players"]);
    
        for (let player in data[key]["players"]) {
            if (player === playerName) {
    
           return data[key]["players"][playerName]["shoe"];
            }
        }
    }
    }

    function teamColors(teamName) {   
        const data = gameObject();   
            for (let key in data) {
                console.log(key);
        
            console.log(data[key]["teamName"]);
        
            for (let team of data[key]["teamName"]) {
                if (data[key]["teamName"] === teamName) {
        
               return data[key]["colors"]; 
                }
            }
        }
        }
console.log(teamColors("Charlotte Hornets"))


function teamNames() {   
    const data = gameObject();
    const names = [];
        for (let key in data) {
            names.push(data[key]["teamName"]); 
    return names;
}
}


function playerNumbers(teamName) {
    const data = gameObject(); // Retrieve the game data

    for (let key in data) {
        if (data[key]["teamName"] === teamName) {
            return Object.values(data[key]["players"]).map(player => player.number);
        }
    }
}
        console.log(playerNumbers("Charlotte Hornets"))

  
function playerStats(playerName) {
    const data = gameObject(); 

    for (let key in data) {
        if (playerName in data[key]["players"]) {
            return data[key]["players"][playerName];
        }
    }
}
    console.log(playerStats("Brendan Hayword"))


function bigShoeRebounds() {
    const data = gameObject(); 
    for (let key in data) {
        for (let players in data[key]["players"]) {
            const sizes = { ...data[key]["players"]["shoe"]}; 
    for (let maxSize in sizes) {
        return data[key]["players"]["rebounds"]
    };
        }
    }
}
bigShoeRebounds()


function mostPointsScored() {
const data = gameObject();
const players = { ...data.home.players, ...data.away.players };  
findMax(players.points)    // found online
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }

console.log("players"[max]);


function winningTeam() {
const data = gameObject();
    for (let key in data) {
        for (let points in data[key]["teams"]) {
            findMax(points["points"])}; 
        return data[key]["teams"];
    }
}
console.log(winningTeam());



function playerWithLongestName() {
    const data = gameObject();
    for (let key in data) {
    const players = { ...game.home.players, ...game.away.players };
map(players.playerName)
findMax(length.playerName)
}
}


// doesLongNameStealATon() = returns true if the player with the longest name has the most steals
// length.
// if max steals, return true
// else, return false