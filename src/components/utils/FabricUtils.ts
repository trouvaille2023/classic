import { Canvas, Textbox } from 'fabric';

export class FabricUtils {
	createCanvas(dom: HTMLCanvasElement) {
		return new Canvas(dom, {
			width: 1123,
			height: 794,
		});
	}

	createITextBox(inst: Canvas, txt = '请输入文本', opts = {}) {
		return new Textbox(txt, {
			fontSize: 30,
			width: 1000,
			left: 0,
			top: 50,
			splitByGrapheme: true, //换行
			...opts,
		});
	}
}
