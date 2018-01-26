<template>
    <section class="component-detail">
        <h3 class="component-name"><span>button</span></h3>
        <div class="component-use-example">
            <div class="example-item">
                <p class="example-desc">type</p>
                <p>
                    <vf-button long="normal">primary</vf-button>
                </p>
                <p>
                    <vf-button type="default" long="normal">normal</vf-button>
                </p>
            </div>
            <div class="example-item">
                <p class="example-desc">long</p>
                <p>
                    <vf-button>default</vf-button>
                </p>
                <p>
                    <vf-button long="normal">normal</vf-button>
                </p>
                <p>
                    <vf-button long="full">full</vf-button>
                </p>
            </div>
            <div class="example-item">
                <p class="example-desc">radius</p>
                <p>
                    <vf-button>default</vf-button>
                    <vf-button radius>true</vf-button>
                    <vf-button :radius="8">8px radius</vf-button>
                </p>
                <p>
                    <vf-button radius="half" long="normal">half</vf-button>
                </p>
            </div>
            <div class="example-item">
                <p class="example-desc">plain</p>
                <p>
                    <vf-button long="normal" radius plain text="plain">
                        <Icon slot="icon" type="warn"></Icon>
                    </vf-button>
                </p>
                <p>
                    <vf-button type="default" long="normal" radius plain text="plain">
                        <Icon slot="icon" type="warn"></Icon>
                    </vf-button>
                </p>
            </div>
            <div class="example-item">
                <p class="example-desc">color</p>
                <p>
                    <vf-button long="normal" radius color="#1890ff">#1890ff</vf-button>
                </p>
                <p>
                    <vf-button long="normal" radius plain color="green">green</vf-button>
                </p>
            </div>
            <div class="example-item">
                <p class="example-desc">color</p>
                <p>
                    <vf-button long="normal" radius color="#1890ff" disabled>disabled</vf-button>
                </p>
                <p>
                    <vf-button long="normal" radius color="#52c41a" disabled>disabled</vf-button>
                </p>
                <p>
                    <vf-button long="normal" radius disabled>disabled</vf-button>
                </p>
                <p>
                    <vf-button type="default" long="normal" radius disabled>disabled</vf-button>
                </p>
            </div>
            <div class="example-item">
                <p class="example-desc">size</p>
                <p>
                    <vf-button size="small" radius>small: 12px</vf-button>
                    <vf-button radius>default: 14px</vf-button>
                    <vf-button size="large" radius>large: 16px</vf-button>
                </p>
            </div>
            <div class="example-item">
                <p class="example-desc">desc</p>
                <vf-button class="goods" :type="selected ? 'primary' : 'default'" plain radius @click="selected = !selected" desc="售价：￥80">￥100</vf-button>
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
        }
    }
</script>

<style lang="less" scoped>
    .my-botton{
        color: #00ff00 !important;
        border-color: #00ff00 !important;
    }
    .goods{
        padding: 1.5rem 3rem;
    }
</style>
