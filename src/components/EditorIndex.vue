<template>
	<div>
		<div class="option-wrap">
			<div class="btn" @click="actionEvent('iTextBox')">TextBox</div>
			<div class="empty"></div>
			<div class="btn btnBorder" @click="actionEvent('clearCanvas')">clearCanvas</div>
			<div class="empty"></div>
			<div class="btn btnBorder" @click="actionEvent('bold')">Bold</div>
			<div class="btn" @click="actionEvent('italic')">Italic</div>
			<div class="btn" @click="actionEvent('underline')">Underline</div>
			<div class="btn" @click="actionEvent('color')">Red</div>
		</div>
		<div class="wrap" id="canvas-box">
			<div class="c-box"><canvas ref="canvasRef" class="cvs" id="canvas"></canvas></div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { FabricUtils } from './utils/FabricUtils';
import { onMounted, ref } from 'vue';
import { Canvas, Text } from 'fabric';

let context = ref();
onMounted(() => {
	context.value = new FabricUtils(document.getElementById('canvas') as HTMLCanvasElement);
	actionEvent('iTextBox');
});

const actionEvent = (type: string) => {
	const ctx = context.value;
	const app = ctx.app;
	if (type && ctx) {
		let activeObject = null;
		let shape = null;
		let txt = `白鹤滩-浙江±800千伏特高压直流输电工程(下称白浙线)是全球首个混合级联特高压直流工程，在世界上首次研发“常规直流+柔性直流”的混合级联特高压直流输电技术，集成特高压直流输电大容量、远距离、低损耗，以及柔性直流输电控制灵活、系统支撑能力强的优势，示范引领意义重大。"`;
		txt = txt.repeat(5);
		switch (type) {
			case 'iTextBox':
				shape = ctx.createITextBox(txt, { left: 0, top: 100 });
				app.add(shape);
				app.renderAll();
				break;

			case 'clearCanvas':
				app.clear();
				break;
			case 'bold':
				activeObject = app.getActiveObject() as Text;
				activeObject?.setSelectionStyles({ fontWeight: 'bold' }, 0);
				app.renderAll();
				break;
			case 'italic':
				activeObject = app.getActiveObject() as Text;
				activeObject?.setSelectionStyles({ fontStyle: 'italic' }, 0);
				app.renderAll();
				break;
			case 'underline':
				activeObject = app.getActiveObject() as Text;
				activeObject?.setSelectionStyles({ underline: true }, 0);
				app.renderAll();
				break;
			case 'color':
				activeObject = app.getActiveObject() as Text;

				activeObject?.setSelectionStyles({ fill: 'red' }, 0);
				app.renderAll();
				break;
		}
	}
};
</script>

<style scoped lang="less">
.wrap {
	//border: 1px solid #000;
	//width: 1123px;
	//height: 794px;
	display: flex;
	flex-direction: column;
}
.option-wrap {
	margin-left: 200px;
	display: flex;
	flex-direction: row;
	.btn {
		padding: 8px;
		border: 1px solid #ddd;
		cursor: pointer;
		user-select: none;
		width: fit-content;
		flex: none;
	}
}

.box {
	display: flex;
	justify-content: flex-start;
	align-items: center;
	text-align: center;
}

.empty {
	cursor: default;
	user-select: none;
	padding: 8px;
	border: none;
}

.btn:not(:nth-child(1)):not(.btnBorder) {
	border-left: none;
}
</style>

<style>
.c-box {
	border: 1px dashed red;
}
</style>
