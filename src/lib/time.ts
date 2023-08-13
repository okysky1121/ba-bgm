export type Time = {
	hour: number;
	minute: number;
	second: number;
};

export const toTime = (sec: number) => {
	return {
		hour: (sec / 3600) | 0,
		minute: ((sec % 3600) / 60) | 0,
		second: sec % 60
	} as Time;
};
