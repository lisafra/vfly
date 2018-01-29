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
                    <vf-button long="normal" plain @click="fnIconToast('success')">success icon</vf-button>
                </p>
                <p>
                    <vf-button long="normal" plain @click="fnIconToast('warn')">warn icon</vf-button>
                </p>
            </div>
            <div class="example-item">
                <p class="example-desc">long text</p>
                <p>
                    <vf-button long="normal" plain @click="fnlongTextToast">long text</vf-button>
                </p>
                <p>
                    <vf-button long="normal" plain @click="fnlonglongTextToast">long long text</vf-button>
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
            fnIconToast (iconName) {
                this.$Toast({
                    icon: iconName,
                    message: iconName
                })
            },
            fnlongTextToast () {
                this.$Toast({
                    message: 'this is a long text test'
                })
            },
            fnlonglongTextToast () {
                this.$Toast({
                    message: 'this is a long long text example'
                })
            }
        }
    }
</script>

<style lang="less" scoped>
</style>