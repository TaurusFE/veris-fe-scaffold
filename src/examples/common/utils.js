/**
 * Created by zengjie on 2016/10/18.
 */
export default {
  getCurrentTime: function () {
    var date = new Date();
    var o = {
      'Y': date.getFullYear(),                 // 年份
      'M': date.getMonth() + 1,                 // 月份
      'd': date.getDate(),                    // 日
      'h': date.getHours(),                   // 小时
      'm': date.getMinutes(),                 // 分
      's': date.getSeconds()                 // 秒
    };
    return o.Y + '-' + o.M + '-' + o.d;
  }
};
