/**
 * Created by zengjie on 2016/10/31.
 * 提供业务间模块调用的组件需要注册到这个模块
 */

import {taurusConfig, taurusConstant} from 'aii-taurus';
// 设置服务调用的类型为HUB
taurusConfig.common.SERVICE_SWICTH = taurusConstant.SERVICE_INVOCATION_TYPE.RESTFUL;
/**
 * 这只是一个例子，请实际开发的时候以各业务功能需要导出的业务组件为主
 */
import Tselectuser from '../examples/common/select-user';

export {
  Tselectuser
};
