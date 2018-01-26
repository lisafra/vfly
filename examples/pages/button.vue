<template>
    <div>
        <vf-button text="click" @click="fnShowToast">
        </vf-button>
        <vf-button plain radius text="button" class="my-botton">
        </vf-button>
        <vf-button plain radius text="button">
            <Icon slot="icon" type="warn"></Icon>
        </vf-button>
        <vf-button class="goods" size="large" :type="selected ? 'primary' : 'default'" plain radius @click="selected = !selected">
            button
            <p slot="desc">hello</p>
        </vf-button>
        <vf-button text="button" long="full" size="large" style="margin: 10px 0">
        </vf-button>
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
                    icon: 'success',
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
    .goods{
        padding: 2rem 4rem;
    }
</style>
