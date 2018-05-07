module.exports = {
	dateformat: date => {
		const yyyy = date.getFullYear();
		const mm =
			date.getMonth() + 1 > 10
				? date.getMonth() + 1
				: '0' + (date.getMonth() + 1);
		const dd = date.getDate() > 10 ? date.getDate() : '0' + date.getDate();

		return `${yyyy}-${mm}-${dd}`;
	},
};
