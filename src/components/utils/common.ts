import { Color } from 'fabric';

export function getRandomColor(): string {
	let r = parseInt((Math.random() * 0xffffff).toString()).toString(16);
	for (let i = r.length; i < 6; i++) {
		r += '0';
	}
	let c = new Color(r);
	return c.toRgb();
}
