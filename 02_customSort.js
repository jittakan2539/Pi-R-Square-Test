//02 Custom Sort

//Idea: เนื่องจากใน array ใหม่ที่เรียงลำดับจากแบ่งฝั่ง ของ odd กับ even
//จึงจะแบ่งเป็น array ของ odd กับ even (โดยในแต่ละ array จะให้เลขเรียงลำดับ)
//จากนั้นใช้ spread operator เพื่อเหลือ array ตัวเดียว

function customSort(array) {
	//กำหนด array เปล่า
	let evens = [];
	let odds = [];

	for (i = 0; i <= array.length - 1; i++) {
		if (array[i] % 2 == 0) {
			evens.push(array[i]);
		} else {
			odds.push(array[i]);
		}
	}

	//เรียงลำดับจากน้อยไปมาก (ascending)
	evens = evens.sort((a, b) => a - b);
	odds = odds.sort((a, b) => a - b);

	return [...odds, ...evens];
}

//Check case
console.log(customSort([4, 2, 5, 7, 1, 6])); //[ 1, 5, 7, 2, 4, 6 ]
console.log(customSort([25, 40, 14, 91, 31, 22, 49, 13, 6])); //[13, 25, 31, 49, 91 ,6, 14, 22, 40]
