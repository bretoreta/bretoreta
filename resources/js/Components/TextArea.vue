<script setup>
    import { onMounted, ref } from 'vue';
    
    defineProps({
        modelValue: String,
        rows: {
            type: Number,
            default: 4
        },
    });
    
    defineEmits(['update:modelValue']);
    
    const input = ref(null);
    
    onMounted(() => {
        if (input.value.hasAttribute('autofocus')) {
            input.value.focus();
        }
    });
    
    defineExpose({ focus: () => input.value.focus() });
    </script>
    
    <template>
        <textarea
            ref="input"
            :rows="rows"
            class="border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
        ></textarea>
    </template>