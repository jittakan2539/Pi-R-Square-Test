//04 Sum of Prime Number

//Idea:
//หาก่อนว่า Prime Number เช็คยังไง
//มี prime number อะไรบ้างจนถึงตัวเลข n
//เอาตัวเลข prime number มาบวกกัน

//----Check Prime Number-----
//1. number < 2 ไม่ใช่ prime number
//2. (number % 2 === 0) && (number > 2) ไม่ใช่ prime number --- เพราะ 2 คือ prime number
//3. check ตั้งแต่ 3 ถึง sqrt(number) ว่ามีตัวไหนหาร n ลง ตัวอีกไหม ถ้ามีก็ไม่ใช่ prime number

function sumOfPrime(number) {
	//-----Step 1: สร้าง array มาเช็ค prime number---โดยให้เป็น Array ของค่า true ทั้งหมดก่อน (assume ว่าเป็น prime หมด)
	//ใช้ Array(number+1) เพราะ array เริ่มตำแหน่งแรกที่ 0 --- ถ้าจะถึงตำแหน่ง n จะต้องมี n + 1 ตัว
	const isPrime = Array(number + 1).fill(true);
	isPrime[0] = isPrime[1] = false; // n < 2 ไม่ใช่ prime number

	//เลข 2 เป็น prime
	isPrime[2] = true;

	//เลขคู่ไม่เป็น prime
	if (number % 2 == 0 && number !== 2) {
		isPrime[number] = false;
	}

	//ไล่เช็คถึงแค่ square root ของ
	for (let i = 2; i * i <= number; i++) {
		//ไล่หาพหุคูณของ i โดยเริ่มจาก i^2 --- ไม่เป็น prime number
		for (let j = i * i; j <= number; j += i) {
			isPrime[j] = false;
		}
	}

	//-----Step 2: push prime number เข้า array
	const primes = [];
	for (let i = 2; i <= number; i++) {
		if (isPrime[i]) {
			primes.push(i);
		}
	}

	//-----Step 3: บวกค่า prime ทั้งหมดใน array
	let primeSum = primes.reduce(
		(accumulator, current) => accumulator + current,
		0
	);

	return primeSum;
}

//check case
console.log(sumOfPrime(10)); //17
console.log(sumOfPrime(59)); //440
