// 01: Sum Of Two in Array

//Idea: ใช้ loop เพื่อบวกเช็คว่าเท่ากับ target ให้ return true --- ถ้าเช็คทั้งหมดไม่มีตรงเลย ให้ return false

//ใช้ loop เพื่อ Check
// array[0] + array[1]---array[0] + array[2]---array[0] + array[3] + ...---array[0] + array[ตัวสุดท้ายใน array]
//                       array[1] + array[2]---array[1] + array[3] + ...---array[1] + array[ตัวสุดท้ายใน array]

//โดยถ้าบวกกันตรง target ---> ให้ return true;
//แต่ถ้าจบ loop ทั้งหมด ไม่ตรงเลย---> ให้ return false;

//------------------------------------------
//Parameter
//array จะเป็น array ที่ผู้ใช้ใส่เข้ามา
//target จะเป็นเชขที่ต้องการเช็คว่ามีค่าตรงไหม

function sumOfTwo(array, target) {
	for (i = 0; i < array.length; i++) {
		for (let j = i + 1; j < array.length; j++) {
			if (array[i] + array[j] === target) {
				return true;
			}
		}
	}
	return false;
}

//Check ว่า case ที่เราใส่ไปตรงกับ case ไหม
console.log(sumOfTwo([1, 3, 5, 7, 16, 4], 8)); //true
console.log(sumOfTwo([1, 3, 5, 7, 16, 4], 12)); //true
console.log(sumOfTwo([1, 3, 5, 7, 16, 4], 18)); //false
console.log(sumOfTwo([12, 17, 14, 11, 19, 8], 20)); //true
