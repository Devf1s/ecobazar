const addTime = (hours: number, minutes: number, seconds: number) => 
	new Date(new Date().getTime() + hours * 60 * 60 * 1000 + minutes * 60 * 1000 + seconds * 1000);

export const targetTimes = {
	saleOfTheMonth: addTime(2, 18, 46),
	// ...
};