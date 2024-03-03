<script setup>
defineEmits(['deleteList'])
const props = defineProps(
    {
        title: {
            type: String,
            required: true
        },
        styleBtn: {
            type: [String, Array],
            required: true
        },

    },
)
const { title, styleBtn } = props
</script>

<template>
    <button @click="$emit('deleteList')" type="button" :class="styleBtn">
        {{ title }}
    </button>
</template>
