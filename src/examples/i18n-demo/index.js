import {taurus} from 'aii-taurus';

const EMPTY_STRING = '';

new Vue({
  el: '#i18n_wrapper',
  data: function () {
    return {
      styleObject: {
        fontFamily: EMPTY_STRING
      }
    };
  },
  methods: {
    changeLang: function () {
      taurus.lang = (taurus.lang === 'cn') ? 'en' : 'cn';
      if (taurus.lang === 'cn') {
        this.styleObject.fontFamily = '微软雅黑';
      } else {
        this.styleObject.fontFamily = EMPTY_STRING;
      }
    }
  }
});
