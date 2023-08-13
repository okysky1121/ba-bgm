import _ from 'lodash';
import { toTime, type Time } from './time';

export type Music = {
	title: string;
	composer: string;
	length: Time;
	youtube_id: string;
};

export const toMusic = (data: string[]) => {
	return {
		title: data[0],
		composer: data[1],
		length: toTime(Number(data[2])),
		youtube_id: data[3]
	} as Music;
};

export const toMusics = (data: string[]) => _.map(_.chunk(data, 4), toMusic);
