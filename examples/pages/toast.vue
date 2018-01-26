<template>
    <section class="component-detail">
        <h3 class="component-name"><span>toast</span></h3>
        <div class="component-use-example">
            <div class="example-item">
                <p class="example-desc">position</p>
                <p>
                    <vf-button long="normal" plain @click="fnPosToast('top')">top</vf-button>
                </p>
                <p>
                    <vf-button long="normal" plain @click="fnPosToast('middle')">middle</vf-button>
                </p>
                <p>
                    <vf-button long="normal" plain @click="fnPosToast('bottom')">bottom</vf-button>
                </p>
            </div>
            <div class="example-item">
                <p class="example-desc">icon</p>
                <p>
                    <vf-button long="normal" plain @click="fnIconToast">success icon</vf-button>
                </p>
            </div>
        </div>
    </section>
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
            fnPosToast (position) {
                this.$Toast({
                    message: `hello, ${position}`,
                    position: position
                })
            },
            fnIconToast () {
                this.$Toast({
                    icon: 'success',
                    message: `success`
                })
            }
        }
    }
</script>

<style lang="less" scoped>
</style>