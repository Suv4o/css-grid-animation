<script setup lang="ts">
import { useAnimation } from "@/composables/useAnimation";
const { getTransitionDelay } = useAnimation();

interface Options {
    animateMoreThanOnce: boolean;
    animateFrom: "left" | "right" | "top" | "bottom" | "all";
    animationTravel: number;
    blur: number;
    mode: "staggered" | "random";
    numberOfElements: number;
}

const props = defineProps<{
    gridItems: Object[];
    options?: Options;
}>();

const options = computed(() => {
    return {
        animateMoreThanOnce: props?.options?.animateMoreThanOnce ?? false,
        animateFrom: props?.options?.animateFrom ?? "left",
        animationTravel: props?.options?.animationTravel ?? 30,
        blur: props?.options?.animationTravel ?? 5,
        mode: props?.options?.mode ?? "staggered",
        numberOfElements: props?.options?.numberOfElements ?? 9,
    };
});

useAnimation({ className: "grid-animation", animateMoreThanOnce: options.value.animateMoreThanOnce });

const numberOfElements = computed(() => {
    return options.value.numberOfElements;
});

const mode = computed(() => {
    return options.value.mode;
});

const blur = computed(() => {
    return `blur(${options.value.blur}px)`;
});

const translate = computed(() => {
    switch (options.value.animateFrom) {
        case "left":
            return `translateX(-${options.value.animationTravel}%)`;
        case "right":
            return `translateX(${options.value.animationTravel}%)`;
        case "top":
            return `translateY(-${options.value.animationTravel}%)`;
        case "bottom":
            return `translateY(${options.value.animationTravel}%)`;
        default:
            return `translateX(${options.value.animationTravel}%)`;
    }
});

const attrs = useAttrs();
const { class: className } = attrs;
</script>

<template>
    <div :class="className">
        <div v-for="(gridItem, index) in gridItems" :key="index" class="group">
            <div
                class="grid-animation"
                :style="{
                    transitionDelay: getTransitionDelay({ numberOfElements, index, mode }),
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
    filter: v-bind(blur);
    transform: v-bind(translate);
    transition: all 0.8s ease;
}

.start-grid-animation {
    opacity: 1;
    filter: blur(0);
    transform: translateX(0) translateY(0);
    transition: all 0.8s ease;
}
</style>
