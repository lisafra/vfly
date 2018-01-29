<template>
    <section class="component-detail">
        <h3 class="component-name"><span>icon</span></h3>
        <div class="component-use-example">
            <ul class="example-item">
                <li class="icon-item" v-for="(icon, key) in iconListData" :key="key">
                    <Icon slot="icon" :type="icon"></Icon>
                    <span class="icon-name">{{icon}}</span>
                </li>
            </ul>
        </div>
    </section>
</template>
<script>
    import VfButton from "../../src/components/button/button";

    export default {
        components: {VfButton},
        data () {
            return {
                iconListData: [
                    'close',
                    'close1',
                    'clear',
                    'plus',
                    'minus',
                    'check',
                    'checked',
                    'success',
                    'camera',
                    'trash1',
                    'warn',
                    'explain',
                    'reserve',
                    'circle',
                    'radio',
                    'serch',
                    'refresh',
                    'arrow-right',
                    'arrow-left',
                    'lock',
                    'switch-off',
                    'switch-on',
                    'user',
                    'people1',
                    'cry',
                    'purse',
                    'hongbao',
                    'record',
                    'tel',
                    'home',
                    'turn_right',
                    'turn_left'
                ]
            }
        },
        mounted () {},
        methods: {
        }
    }
</script>

<style lang="less" scoped>

</style>