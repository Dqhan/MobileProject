<template>
<div class="wrapper">
    <image :src="logo" class="logo" />
    <router-view />
</div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {}
    }
}
</script>
