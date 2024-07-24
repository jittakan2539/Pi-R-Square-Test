//03 Largest Number

//Idea:
// ต้องแปลงเลขใน array เป็น string แล้วเทียบว่า concatenation ตัวไหนให้ค่ามากกว่ากัน
//ใช้ string concatenation เพื่อเชื่อมเลขเข้าด้วยกัน

function largestNumber(array) {
	//แปลงเลขใน array ให้เป็น string ก่อร
	array = array.map((number) => number.toString());

	//เอาตัวเลขมาไล่ลำดับ โดยเปรียบว่า ตัวที่ Concatenate และได้ค่ามากกว่า จะอยู่ข้างหน้า
	array.sort((a, b) => b + a - (a + b));

	//พอเรียงกันแล้วก็เอาค่ามาต่อกัน
	return array.join("");
}

//ลอง Test cases
console.log(largestNumber([10, 2, 13, 7])); //"721310"
console.log(largestNumber([21, 36, 8, 45])); //"8453621"
