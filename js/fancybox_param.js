/*=====================================================================
* FileName      : fancybox_param.styl
* Instructions  : fancybox自定义选项文件
* RelativePaths : 
* RelatedFiles  : [root]/_config.next.yml
*                 [root]/themes/next/source/js/third-party/fancybox.js
* see           : https://fancyapps.com/fancybox/
**=====================================================================*/

// ---------------------------------------------------------------
// fancybox问题一：预览图片结束后，背景背景布局改变导致页面抖动的情况
// ---------------------------------------------------------------
// $.fancybox.defaults.hideScrollbar = false; // 使右侧滚动条一直显示

// 之后的NexT主题好像没有引入jQuery，并且更新了fancybox版本，所以上面的$符号会报错，可以用下面的方式
Fancybox.defaults.hideScrollbar = false;

// ---------------------------------------------------------------
// fancybox问题二：预览图片结束后，可能会回到页面顶部
// ---------------------------------------------------------------
// 大概是新版本的NexT主题导致的，本人比较菜，尚未解决
