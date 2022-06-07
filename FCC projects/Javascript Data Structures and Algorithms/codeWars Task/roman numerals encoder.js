








function solution(num) {


	const romans  = {1000 : M, 900 : CM, D : 500, CD : 400, C : 100, XC : 90, L : 50, XL : 40, X : 10, IX : 9, V : 5, IV : 4, I : 1}

let result = ""

	for (const key in romans) {
		const counter = Math.floor(num / romans[key])

		if (counter !==0) {
			result += key.repeat(counter)
		}
		num %= romans[key]

		if(num === 0 )return result
	}
	return result
}

console.log(solution('IX'))
