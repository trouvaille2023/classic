<script setup lang="ts">
import EditorIndex from './components/EditorIndex.vue';
</script>
<template>
	<div class="wrap-box">
		<div class="bottom">
			<EditorIndex />
		</div>
	</div>
</template>

<style lang="less" scoped>
.wrap-box {
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	.top {
		width: 100%;
		height: 100px;
		background-color: rgba(255, 255, 255, 0.18);
	}
	.bottom {
		width: 100%;
		display: flex;
		justify-content: center;
	}
}
</style>
