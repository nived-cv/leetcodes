
// must find a better way to remove **

const isIsomorphic = (s,t) => {
	
	if(s.length !== t.length){
		return "error";
	}

	const map = {}
	let index = 0

	for(let letter of s){

		if(letter in map && map[letter] !== t[index]){
			return false
		}
	
		if(!(letter in map)){
			// **
			if(t.indexOf(t[index]) !== index){
				return false
			}
			map[letter] = t[index]
		}
		index++
	}

	return true
}

console.log(isIsomorphic("badc", "baba"))