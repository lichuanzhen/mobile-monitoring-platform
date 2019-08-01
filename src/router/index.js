import Vue from 'vue'
import Router from 'vue-router'
import Body from '@/components/Body'
import HomePage from '@/page/home/Homepage'
import HomeDigitScene from '@/page/digitScene/HomeDigitScene'
import HomeIntelligentMonitoring from '@/page/intelligentMonitoring/HomeIntelligentMonitoring'
import ProjectCoordination from '@/page/projectCoordination/ProjectCoordination'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Body',
    component: Body,
    redirect: '/homePage',
    children: [{
      path: '/homePage',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/homeDigitScene',
      name: 'HomeDigitScene',
      component: HomeDigitScene
    },
    {
      path: '/homeIntelligentMonitoring',
      name: 'HomeIntelligentMonitoring',
      component: HomeIntelligentMonitoring
    },
    {
      path: '/projectCoordination',
      name: 'ProjectCoordination',
      component: ProjectCoordination
    }
    ]
  }

  ]
})
