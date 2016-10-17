var game = {
	player1: 0,
	player2: 0,
	winner: function(){
		if (game.player1 < game.player2) return "Player 2 is WINNING!!!" + "\n " + "P1: " + game.player1 + "   P2: " + game.player2
		if (game.player1 > game.player2) return "Player 1 is WINNING!!!" + "\n " + "P1: " + game.player1 + "   P2: " + game.player2
		return "I'ts a TIE!!!" + "\n " + "P1: " + game.player1 + "   P2: " + game.player2
	},

	rockPaperScissors: function(p1,p2){

		if (typeof p1=== "undefined"){
			p1 = Math.floor((Math.random() * 3) + 1);
		}else if (typeof p2=== "undefined"){
			p2 = Math.floor((Math.random() * 3) + 1);
		}else if (typeof p1 != "string" || typeof p2 != "string"){
		return "ERROR!!!"
		};

		if (p1 === 1) p1 = "ROCK"
		if (p1 === 2) p1 = "PAPER"
		if (p1 === 3) p1 = "SCISSORS"
		if (p2 === 1) p2 = "ROCK"
		if (p2 === 2) p2 = "PAPER"
		if (p2 === 3) p2 = "SCISSORS"

		console.log(p1.toUpperCase() + " <=== VS ===> " + p2.toUpperCase())

		if (p1.toUpperCase() === p2.toUpperCase()){
			return ("DRAW!!!" + "\n " + game.winner())

		}else if (p1.toUpperCase() === "PAPER" && p2.toUpperCase()  === "SCISSORS" ){
			game.player2 +=1
			return ("Player 2 WINS" + "\n " + game.winner())
		}else if (p1.toUpperCase() === "ROCK" && p2.toUpperCase()  === "PAPER"){
			game.player2 +=1
			return ("Player 2 WINS" + "\n " + game.winner())
		}else if (p1.toUpperCase() === "SCISSORS" && p2.toUpperCase()  === "ROCK"){
			game.player2 +=1
			return ("Player 2 WINS" + "\n " + game.winner())
		}else{
			game.player1 +=1
			return ("Player 1 WINS" + "\n " + game.winner())
		};
	}
};


