module.exports = {

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
     //在rules中添加自定义规则
	 //关闭组件命名规则
     "vue/multi-word-component-names":"off",
  },
}
