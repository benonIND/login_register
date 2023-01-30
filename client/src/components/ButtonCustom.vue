
<script>
    export default {
        props: ['text','type', 'icon']
    }
</script>

<template>
    <button :type="type"><i :class="icon"></i> {{ text }}</button>
</template>