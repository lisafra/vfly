<template>
    <div class="container">
        <nav>
            <ul>
                <li><router-link to="/button">Button</router-link></li>
                <li><router-link to="/message">Message</router-link></li>
            </ul>
        </nav>
        <router-view></router-view>
    </div>
</template>
<script>
    module.exports = {
        data: function() {
            return {

            }
        },
        mounted: function() {

        },
        beforeDestroy: function() {

        },
        methods: {

        }
    }
</script>
<style lang="less">
    @import "../src/styles/index.less";
    body{
        background-color: #fff;
    }
    nav { margin-bottom: 40px; padding: 10px 40px}
    ul { display: flex; flex-wrap: wrap; }
    li { display: inline-block; }
    li + li { border-left: solid 1px #bbb; padding-left: 10px; margin-left: 10px; }
    /*.container{ padding: 10px 40px 0; }*/
    li a{
        color: @second-text-dark-color;
    }
    .v-link-active { color: #bbb; }
    .router-link-active {
        color: @theme-color;
    }
</style>
