<script setup lang="ts">
import articles from "./data/articles";
</script>

<template>
    <div class="bg-white">
        <div class="mx-auto container py-16 sm:py-24 px-6 lg:px-8">
            <AnimationGrid
                :gridItems="articles"
                class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
            >
                <template #animation-grid-item="{ image, title }">
                    <div
                        class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8"
                    >
                        <img
                            :src="image"
                            :alt="title"
                            class="aspect-square w-full object-cover object-center group-hover:opacity-75"
                        />
                    </div>
                    <h3 class="mt-4 text-2xl font-medium text-gray-700">{{ title }}</h3>
                </template>
            </AnimationGrid>
        </div>
    </div>
</template>
