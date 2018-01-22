// es6 polyfill
import 'core-js/fn/array/find';
import 'core-js/fn/array/find-index';

import Button from './components/button';
import Icon from './components/Icon';
import Message from './components/message';
import Toast from "./components/Toast";

const components = {
    Button,
    Message,
    Icon
};

const install = function(Vue, opts = {}) {
    if (install.installed) return;

    Object.keys(components).forEach(key => {
        Vue.component(components[key].name, components[key]);
    });
    Vue.prototype.$Message = Message;
    Vue.prototype.$Toast = Toast;
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

const API = {
    version: process.env.VERSION, // eslint-disable-line no-undef
    install,
    ...components
};

module.exports.default = module.exports = API;   // eslint-disable-line no-undef
