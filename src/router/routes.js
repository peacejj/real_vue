// 引入子路由
import Frame from '../frame/subroute.vue'
// 引用模板
import index from '../page/index.vue'
import content from '../page/content.vue'
// 引入子页面
import childI from '../page/child/i.vue'
import childY from '../page/child/y.vue'
import childE from '../page/child/e.vue'
// 配置路由
export default [
  {
    path: '/',
    component: index
  },
  {
    path: '/content',
    component: content
  },
  {
    path: '/child',
    component: Frame,
    children: [
      {path: '/', component: childI},
      {path: 'y', component: childY},
      {path: 'e', component: childE}
    ]
  }
]
