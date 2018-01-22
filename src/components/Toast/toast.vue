<template>
  <transition :name="transitionType[position]">
    <div :class="prefixCls + '-wrap'" :style="wrapStyle" v-show="visible">
      <div :class="customClass">
        <Icon :type="icon" v-if="icon"></Icon>
        <p :class="prefixCls + '__text'">{{ message }}</p>
      </div>
    </div>
  </transition>
</template>

<script>
    import prefixCls from '../../config/classprefix'
    export default {
        name: 'VfToast',
        props: {
            message: String,
            icon: String,
            className: {
                type: String,
                default: ''
            },
            position: String
        },

        data() {
            return {
                visible: false,
                prefixCls: prefixCls.VfToast,
                transitionType: {
                    top: "move-up",
                    middle: "fade",
                    bottom: "move-down",
                }
            };
        },
        computed: {
            wrapStyle () {
                let crossStyle = {
                    'top': 'flex-start',
                    'bottom': 'flex-end'
                }
                return `align-items: ${crossStyle[this.position]};`
            },
            customClass() {
                var classes = [this.prefixCls];
                classes.push(this.className);
                if (this.icon) classes.push(`${this.prefixCls}-icon`)
                return classes.join(' ');
            }
        }
    };
</script>