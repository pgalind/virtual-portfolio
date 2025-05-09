export const ToMMYYYYFormat = (datetimeStr) => {
	console.log(datetimeStr);
	const date = new Date(datetimeStr); // Convert ISO string (2025-02-28T19:02:00.000Z) to Date
	if (isNaN(date)) throw new Error("Invalid date format from Sanity");

	const month = String(date.getMonth() + 1).padStart(2, "0"); // pad with 0 if month number is one character
	const year = date.getFullYear();
	return `${month}/${year}`;
};
