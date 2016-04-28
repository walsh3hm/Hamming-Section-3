var compute;

// this is a function that takes two strands
// of nucleotides and uses them to compute
// the Hamming distance
compute = function(s1, s2) {

	// if the strands are of unequal length
	if (s1.length !== s2.length) {
		// then thow an error
		throw new Error('DNA strands must be of equal length.');
	}

	// initialize output variable for Hamming distance
	// default is zero, i.e. strands are identical
	var dist = 0;

	// compute the Hamming distance
	// iterate over every pair of letters in the
	// two strands
	for (var i = 0; i < s1.length; i += 1) {
		// if the i'th character in strand 1 is NOT
		// equal to the i'th character in strand 2
		if (s1.charAt(i) !== s2.charAt(i)) {
			// add 1 to the distance
			dist += 1;
		}
	}

	// return the Hamming distance
	return dist;
};

module.exports = {
	compute: compute
};