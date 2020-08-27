/*
 * @description:shims-vue.d.ts
 * @author : Fineley.R.Fang(方欣芮)
 * @LastEditors: Fineley.R.Fang(方欣芮)
 * @LastEditTime: 2020-08-27 09:54
*/
declare module '*.vue' {
  import { ComponentOptions } from 'vue';
  const componentOptions:ComponentOptions
  export default  componentOptions
}
