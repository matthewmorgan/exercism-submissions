////score is 1 unless specified
//var SCORE = {D : 2,G : 2,
//	B : 3, C : 3, M : 3, P : 3,
//	F : 4, H : 4, V : 4, W : 4, Y : 4,
//	K : 5,
//	J : 8, X : 8,
//	Q : 10, Z : 10
//};
//
//var Scrabble = module.exports = function(word){
//	return (word || "").toUpperCase().split("").reduce(function(previous, current){
//		return previous+(SCORE[current] || 1);
//	},0);
//};
//

function tryThis(){
	var result={};
	var otherResult = {'x':0};
	var start=(new Date()).getMilliseconds();
	for (var ii=0;ii<100000;ii++){
			var test=result['x'] || 0;
	}
	console.log((new Date()).getMilliseconds()-start);


	start=(new Date()).getMilliseconds();
	for (var ii=0;ii<100000;ii++){
		var test=otherResult['x'];
	}
	console.log((new Date()).getMilliseconds()-start);

}

tryThis();