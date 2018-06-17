import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    items: [{
      id: '26416062',
      picUrl: '/static/imgs/0.jpg',
      title: '侏罗纪世界2',
      rating: 7.2
    },
    {
      id: '25971649',
      picUrl: '/static/imgs/1.jpg',
      title: '第七个小矮人',
      rating: null
    },
    {
      id: '26818314',
      picUrl: '/static/imgs/2.jpg',
      title: '猛虫过江',
      rating: 3.1
    },
    { id: '27195080', picUrl: '/static/imgs/3.jpg', title: '泄密者', rating: 6 },
    {
      id: '26791910',
      picUrl: '/static/imgs/4.jpg',
      title: '吃货宇宙',
      rating: null
    },
    {
      id: '27133303',
      picUrl: '/static/imgs/5.jpg',
      title: '超时空同居',
      rating: 7.2
    },
    {
      id: '26942645',
      picUrl: '/static/imgs/6.jpg',
      title: '厕所英雄',
      rating: 7.2
    },
    {
      id: '27069070',
      picUrl: '/static/imgs/7.jpg',
      title: '哆啦A梦：大雄的金银岛',
      rating: 6.8
    },
    {
      id: '24773958',
      picUrl: '/static/imgs/8.jpg',
      title: '复仇者联盟3：无限战争',
      rating: 8.4
    },
    {
      id: '26813286',
      picUrl: '/static/imgs/9.jpg',
      title: '幸福马上来',
      rating: 3.6
    },
    {
      id: '26614893',
      picUrl: '/static/imgs/10.jpg',
      title: '完美陌生人',
      rating: 8.6
    },
    {
      id: '30146980',
      picUrl: '/static/imgs/11.jpg',
      title: '潜艇总动员：海底两万里',
      rating: 4
    },
    {
      id: '26775743',
      picUrl: '/static/imgs/12.jpg',
      title: '快乐星球之三十六号',
      rating: null
    },
    {
      id: '26888820',
      picUrl: '/static/imgs/13.jpg',
      title: '血十三',
      rating: null
    },
    {
      id: '26949264',
      picUrl: '/static/imgs/14.jpg',
      title: '深海越狱',
      rating: 4.4
    },
    {
      id: '26997663',
      picUrl: '/static/imgs/15.jpg',
      title: '寂静之地',
      rating: 6.4
    },
    {
      id: '26425435',
      picUrl: '/static/imgs/16.jpg',
      title: '泡菜爱上小龙虾',
      rating: null
    },
    {
      id: '25900947',
      picUrl: '/static/imgs/17.jpg',
      title: '游侠索罗：星球大战外传',
      rating: 7
    }]
  },
  mutations: {
  }
})

export { store }