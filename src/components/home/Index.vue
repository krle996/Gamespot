<template>
    <div>
        <app-featured/>
        <app-content/>
    </div>
</template>

<script>
import Featured from './Featured.vue';
import Content from './Content.vue';

export default {
    components: {
        'app-featured': Featured,
        'app-content': Content
    }
}
</script>