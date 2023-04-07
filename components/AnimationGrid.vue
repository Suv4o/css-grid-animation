<script setup lang="ts">
import { useAnimation } from "@/composables/useAnimation";
const { getTransitionDelay } = useAnimation();
useAnimation({ className: "grid-animation" });

const props = defineProps<{
    gridItems: Object[];
}>();

const attrs = useAttrs();
const { class: className } = attrs;
</script>

<template>
    <div :class="className">
        <div v-for="(gridItem, index) in gridItems" :key="index" class="group">
            <div
                class="grid-animation"
                :style="{
                    transitionDelay: getTransitionDelay({ index, mode: 'random' }),
                }"
            >
                <slot name="animation-grid-item" v-bind="gridItem"></slot>
            </div>
        </div>
    </div>
</template>

<style scoped>
.grid-animation {
    opacity: 0;
    filter: blur(5px);
    transform: translateX(30%);
    transition: all 0.8s ease;
}

.start-grid-animation {
    opacity: 1;
    filter: blur(0);
    transform: translateX(0);
    transition: all 0.8s ease;
}
</style>
