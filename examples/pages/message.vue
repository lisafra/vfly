<template>
    <div>
    </div>
</template>
<script>
    import VfButton from "../../src/components/button/button";

    export default {
        components: {VfButton},
        data () {
            return {
                selected: false
            }
        },
        mounted () {},
        methods: {
            fnShowToast () {
                this.$Toast({
                    message: 'hello world, this is my life',
                    // icon: 'success',
                    position: 'bottom'
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    .my-botton{
        color: #00ff00 !important;
        border-color: #00ff00 !important;
    }
</style>

