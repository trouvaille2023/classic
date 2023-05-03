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
			<canvas ref="canvasRef" id="canvas"></canvas>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { FabricUtils } from './utils/FabricUtils';
import { onMounted, ref } from 'vue';
import { Canvas, Text } from 'fabric';

const { createITextBox, createCanvas } = new FabricUtils();

let canvas = ref<Canvas>();
onMounted(() => {
	canvas.value = createCanvas(document.getElementById('canvas') as HTMLCanvasElement) as Canvas;
});

const actionEvent = (type: string) => {
	if (type && canvas.value) {
		let activeObject = null;
		let shape = null;
		let txt = `白鹤滩-浙江±800千伏特高压直流输电工程(下称白浙线)是全球首个混合级联特高压直流工程，在世界上首次研发“常规直流+柔性直流”的混合级联特高压直流输电技术，集成特高压直流输电大容量、远距离、低损耗，以及柔性直流输电控制灵活、系统支撑能力强的优势，示范引领意义重大。"`;

		switch (type) {
			case 'iTextBox':
				shape = createITextBox(canvas.value, txt, { left: 0, top: 100 });
				canvas.value.add(shape);
				canvas.value.renderAll();
				break;

			case 'clearCanvas':
				canvas.value.clear();
				break;
			case 'bold':
				activeObject = canvas.value.getActiveObject() as Text;
				activeObject?.setSelectionStyles({ fontWeight: 'bold' }, 0);
				canvas.value.renderAll();
				break;
			case 'italic':
				activeObject = canvas.value.getActiveObject() as Text;
				activeObject?.setSelectionStyles({ fontStyle: 'italic' }, 0);
				canvas.value.renderAll();
				break;
			case 'underline':
				activeObject = canvas.value.getActiveObject() as Text;
				activeObject?.setSelectionStyles({ underline: true }, 0);
				canvas.value.renderAll();
				break;
			case 'color':
				activeObject = canvas.value.getActiveObject() as Text;

				activeObject?.setSelectionStyles({ fill: 'red' }, 0);
				canvas.value.renderAll();
				break;
		}
	}
};
</script>

<style scoped lang="less">
.wrap {
	border: 1px solid #000;
	width: 1123px;
	height: 794px;
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
