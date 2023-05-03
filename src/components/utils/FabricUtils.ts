import { Canvas, Textbox } from 'fabric';

export class FabricUtils {
	createCanvas(dom: HTMLCanvasElement) {
		return new Canvas(dom, {
			width: 1123,
			height: 794,
			fireRightClick: true, // 启用右键，button的数字为3
			stopContextMenu: false, // 禁止默认右键菜单
			includeDefaultValues: false, // 指示toObject/toDatalessObject是否应该包含默认值，如果设置为false，则优先于对象值
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
