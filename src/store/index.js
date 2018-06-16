import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    items: [
      {
        id: "26416062",
        picUrl:
          "https://img3.doubanio.com/view/photo/m_ratio_poster/public/p2522069454.jpg",
        title: "侏罗纪世界2",
        rating: 7.2
      },
      {
        id: "25971649",
        picUrl:
          "https://img1.doubanio.com/view/photo/m_ratio_poster/public/p2522252598.jpg",
        title: "第七个小矮人",
        rating: null
      },
      {
        id: "26818314",
        picUrl:
          "https://img1.doubanio.com/view/photo/m_ratio_poster/public/p2523437699.jpg",
        title: "猛虫过江",
        rating: 3.1
      },
      {
        id: "27195080",
        picUrl:
          "https://img3.doubanio.com/view/photo/m_ratio_poster/public/p2524686290.jpg",
        title: "泄密者",
        rating: 6
      },
      {
        id: "26791910",
        picUrl:
          "https://img3.doubanio.com/view/photo/m_ratio_poster/public/p2522682953.jpg",
        title: "吃货宇宙",
        rating: null
      },
      {
        id: "27133303",
        picUrl:
          "https://img1.doubanio.com/view/photo/m_ratio_poster/public/p2520331478.jpg",
        title: "超时空同居",
        rating: 7.2
      },
      {
        id: "26942645",
        picUrl:
          "https://img1.doubanio.com/view/photo/m_ratio_poster/public/p2523632248.jpg",
        title: "厕所英雄",
        rating: 7.2
      },
      {
        id: "27069070",
        picUrl:
          "https://img3.doubanio.com/view/photo/m_ratio_poster/public/p2523364763.jpg",
        title: "哆啦A梦：大雄的金银岛",
        rating: 6.8
      },
      {
        id: "24773958",
        picUrl:
          "https://img3.doubanio.com/view/photo/m_ratio_poster/public/p2517753454.jpg",
        title: "复仇者联盟3：无限战争",
        rating: 8.4
      },
      {
        id: "26813286",
        picUrl:
          "https://img1.doubanio.com/view/photo/m_ratio_poster/public/p2521514148.jpg",
        title: "幸福马上来",
        rating: 3.6
      },
      {
        id: "26614893",
        picUrl:
          "https://img3.doubanio.com/view/photo/m_ratio_poster/public/p2522331945.jpg",
        title: "完美陌生人",
        rating: 8.6
      },
      {
        id: "30146980",
        picUrl:
          "https://img3.doubanio.com/view/photo/m_ratio_poster/public/p2522417650.jpg",
        title: "潜艇总动员：海底两万里",
        rating: 4
      },
      {
        id: "26775743",
        picUrl:
          "https://img1.doubanio.com/view/photo/m_ratio_poster/public/p2521694269.jpg",
        title: "快乐星球之三十六号",
        rating: null
      },
      {
        id: "26888820",
        picUrl:
          "https://img3.doubanio.com/view/photo/m_ratio_poster/public/p2523516430.jpg",
        title: "血十三",
        rating: null
      },
      {
        id: "26949264",
        picUrl:
          "https://img3.doubanio.com/view/photo/m_ratio_poster/public/p2521514516.jpg",
        title: "深海越狱",
        rating: 4.4
      },
      {
        id: "26997663",
        picUrl:
          "https://img3.doubanio.com/view/photo/m_ratio_poster/public/p2518852413.jpg",
        title: "寂静之地",
        rating: 6.4
      },
      {
        id: "26425435",
        picUrl:
          "https://img3.doubanio.com/view/photo/m_ratio_poster/public/p2522804951.jpg",
        title: "泡菜爱上小龙虾",
        rating: null
      },
      {
        id: "25900947",
        picUrl:
          "https://img3.doubanio.com/view/photo/m_ratio_poster/public/p2521436880.jpg",
        title: "游侠索罗：星球大战外传",
        rating: 7
      }
    ]
  },
  mutations: {
  }
})

export { store }