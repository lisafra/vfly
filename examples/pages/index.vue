<template>
    <nav class="nav">
        <ul>
            <li class="component-item" v-for="(path, key) in navData" :key="key">
                <router-link :to="'/' + path">
                    {{ path }}
                    <Icon class="arrow-right" type="arrow-right"></Icon>
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: "index",
        data () {
            return {
                navData: [
                    'button',
                    'toast',
                    'icon'
                ]
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "../../src/styles/index.less";
    .nav {
        padding: @10px @10px @1px * 50;
        font-size: @16px;
        background-color: @white;
        .component-item {
            margin: @5px 0;
            padding: @10px;
            line-height: @line-height-16;
            .border-bottom-1px(@border-dark-color);
            .arrow-right {
                float: right;
                color: @second-text-dark-color;
            }
        }
    }
</style>