<script setup lang="ts">
import articles from "./data/articles";

const pageSize = ref(12);
const pageNumber = ref(1);
const loadedArticles = ref<Object[]>([]);

function paginate(array: Object[], pageSize: number, pageNumber: number) {
    return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
}

const loadArticles = computed(() => {
    const articlesToLoad = paginate(articles, pageSize.value, pageNumber.value);
    loadedArticles.value = [...loadedArticles.value, ...articlesToLoad];
    return loadedArticles.value;
});
</script>

<template>
    <div>
        <div class="mx-auto container py-16 sm:py-24 px-6 lg:px-8">
            <AnimationGrid
                :gridItems="loadArticles"
                :options="{ animateFrom: 'top', numberOfElements: 12, mode: 'random' }"
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
            <div class="mt-8 flex justify-center" v-if="loadArticles.length !== articles.length">
                <button
                    @click="pageNumber++"
                    type="button"
                    class="rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
                >
                    LOAD MORE ARTICLES
                </button>
            </div>
        </div>
    </div>
</template>
