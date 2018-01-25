<template>
    <div :class="classes" :style="style" @click="handleClick" ref="VfButton">
        <p :class="textStyle">
            <slot name="icon"></slot>
            <slot>{{text}}</slot>
        </p>
        <p :class="descStyle" v-if="showDescSlot">
            <slot name="desc"></slot>
        </p>
    </div>
</template>
<script>

    import prefixCls from '../../config/classprefix'
    export default {
        name: 'VfButton',
        props: {
            type: {
                type: String,
                default: 'primary',
                validator (value) {
                    return ['primary', 'default'].includes(value)
                }
            },
            long: {
                type: String,
                validator (value) {
                    return ['full', 'normal'].includes(value)
                }
            },
            size: {
                validator (value) {
                    return ['small', 'large'].includes(value)
                }
            },
            radius: {
                type: [String, Number, Boolean],
                default: 0
            },
            plain: Boolean,
            disabled: Boolean,
            color: String,
            text: String,
            desc: String,
            icon: String
    },
        data () {
            return {
                prefixCls: prefixCls.VfButton,
                buttonHeight: 0
            };
        },
        computed: {
            classes () {
                return [
                    `${this.prefixCls}`,
                    {
                        [`${this.prefixCls}-${this.type}`]: this.type,
                        [`${this.prefixCls}-${this.long}`]: this.long,
                        [`${this.prefixCls}-${this.size}`]: this.size,
                        [`${this.prefixCls}-plain`]: this.plain,
                        [`${this.prefixCls}-disabled`]: this.disabled
                    }
                ];
            },
            textStyle () {
                return `${this.prefixCls}__text`
            },
            descStyle () {
                return `${this.prefixCls}__desc`
            },
            style () {
                let styles = '';
                // 控制颜色
                if (this.color) {
                    let buttonColor = this.plain ? `color:${this.color}` : `background-color:${this.color}`
                    styles += `${buttonColor};border-color:${this.color};`
                }
                // 控制圆角
                let defaultRadius = typeof this.radius === 'number' ? this.radius : 4
                if (this.radius === 'half') {
                    defaultRadius = this.buttonHeight
                }
                styles += `border-radius:${defaultRadius}px`

                return styles
            },
            showDescSlot () {
                return this.desc || this.$slots.desc
            }
        },
        methods: {
            handleClick (event) {
                this.$emit('click', event);
            }
        },
        mounted () {
            console.log(this.$slots)
            this.$nextTick(() => {
               this.buttonHeight = this.$refs.VfButton.offsetHeight
            });
        }
    };
</script>
