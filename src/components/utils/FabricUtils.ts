import { Canvas, Textbox } from 'fabric';

export class FabricUtils {
	public app: Canvas;

	constructor(dom: HTMLCanvasElement) {
		const app = new Canvas(dom, {
			width: 794,
			height: 1123,
		});
		this.app = app;
	}

	createITextBox(txt = '请输入文本', opts = {}) {
		return new Textbox(txt, {
			fontSize: 24,
			width: 794,
			left: 0,
			top: 50,
			splitByGrapheme: true, //换行
			fontFamily: 'kai',
			...opts,
		});
	}
}
