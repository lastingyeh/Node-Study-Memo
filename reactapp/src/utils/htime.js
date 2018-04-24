const htime = {
	getDiff: function(num) {
		const time = num
			? new Date(new Date().getTime() - num * 24 * 60 * 60 * 1000)
			: new Date();

		return this.parseTime(time);
	},
	parseTime: function(time) {
		const year = time.getFullYear();
		const month =
			time.getMonth() + 1 > 9 ? time.getMonth() + 1 : `0${time.getMonth() + 1}`;
		const day = time.getDay() > 9 ? time.getDay() : `0${time.getDay()}`;

		return `${year}-${month}-${day}`;
	},
};

export default htime;
