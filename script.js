//your JS code here. If required.

function getNumbers() {
	return new Promise((reslove) => {
		setTimeout(() => reslove([1,2,3,4]), 3000);
});	
}

getNumbers()
.then((numbers) =>{
	return new Promise((resolve) =>{
		const even = numbers.filter((num) => num%2===0);
		document.getElementById('output').textContent = "Even Numbers: + evens.join(', ');   "
	setTimeout(() => resolve(even), 1000);
	})
})

.then((evens) =>{
	const multiplied = evens.map((num) => num*2);
	setTimeout(() =>{
		document.getElementById('output').textContent = "Multiplied Numbers:" + multiplied.join(',');
		
	}, 2000);
})

