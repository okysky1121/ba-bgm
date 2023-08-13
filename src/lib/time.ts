export type Time = {
	hour: number;
	minute: number;
	second: number;
};

export const toTime = (sec: number) => {
	const second = sec % 60,
		minute = (sec - second) / 60,
		hour = (minute - (minute % 60)) / 60;

	return { second, minute: minute % 60, hour } as Time;
};
