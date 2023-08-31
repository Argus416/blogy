export const formateDate = (time: Date) => {
	const date = new Date(time);

	const options = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
		hour12: false,
	};
	return date.toLocaleDateString('en-EN', options as any);
};
