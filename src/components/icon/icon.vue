<template>
    <i :class="classes"></i>
</template>
<script>
    const prefixCls = 'vf-icon';

    export default {
        name: 'Icon',
        props: {
            type: String,
            className: String
        },
        computed: {
            classes () {
                return `
                    ${prefixCls}
                    icon-${this.type}
                    ${this.className}
                `;
            }
        }
    };
</script>
