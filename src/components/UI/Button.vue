<template>
    <div>
        <router-link 
        v-if="type == 'link'"
        :to="linkTo"
        :class="['button_default', ...addClass]"
        >
        <slot/>
        </router-link>

        <div
        v-if="type === 'btn'"
        :class="['button_default', ...addClass]"
        @click="action"
        >
        <slot/>
        </div>
    </div>
</template>

<script>
export default {
    props:['linkTo', 'addClass', 'type', 'action']
}
</script>