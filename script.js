function func(x, y) {
	if (y != 0) {
		x--
		y *= x
		// console.log(x, y)
		func(x, y)
	}
	return y
}

let a=1
console.log(func(3,a))