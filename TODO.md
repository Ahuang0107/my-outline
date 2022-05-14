# todo

- [ ] 需要加入`styled-normalize`来重置一些元素的样式
- [ ] storybook也需要应用同样的全局样式来做组件展示，目前有部分全局样式是直接写在`index.html`的head里的，所以可以直接copy到.storybook的preview-head.
  html里，但是之后加了styled-normalize的话，这部分全局样式要怎么同样apply到storybook上呢？
- [ ] 没有弄明白为什么用`styled`inheritance一个函数组件，不能覆盖它的样式，加了forwardRef也不行，明明跟outline的源代码是一样的。
