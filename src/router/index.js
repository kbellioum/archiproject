import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Agence from '@/components/Agence'
import HomeAgence from '@/components/HomeAgence'
import Pres from '@/components/Pres'
import Archi from '@/components/Archi'
import Design from '@/components/Design'
import Urba from '@/components/Urba'
import Gestpro from '@/components/Gestpro'
import Sculpt from '@/components/Sculpt'
import Projets from '@/components/Projets'
import ProjectDetail from '@/components/ProjectDetail'
import HomeProjet from '@/components/HomeProjet'
import Institu from '@/components/Institu'
import CentreCom from '@/components/CentreCom'
import Hospi from '@/components/Hospi'
import Educ from '@/components/Educ'
import Restau from '@/components/Restau'
import Touri from '@/components/Touri'
import Resid from '@/components/Resid'
import Urbapro from '@/components/Urbapro'
import Amenag from '@/components/Amenag'
import Conco from '@/components/Conco'
import Publication from '@/components/Publication'
import Carriere from '@/components/Carriere'
import Contact from '@/components/Contact'
import Nouveau from '@/components/Nouveau'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/agence',
      name: 'Agence',
      component: Agence,
      children: [
        {
          path: '/',
          name: 'agence',
          component: HomeAgence
        },
        {
          path: 'pres',
          name: 'Pres',
          component: Pres
        },
        {
          path: 'archi',
          name: 'Archi',
          component: Archi
        },
        {
          path: 'design',
          name: 'Design',
          component: Design
        },
        {
          path: 'urba',
          name: 'Urba',
          component: Urba
        },
        {
          path: 'gestpro',
          name: 'Gestpro',
          component: Gestpro
        },
        {
          path: 'sculpt',
          name: 'Sculpt',
          component: Sculpt
        }
      ]
    },
    {
      path: '/projets',
      name: 'Projets',
      component: Projets,
      children: [
        {
          path: '/',
          name: 'projet',
          component: HomeProjet
        },
        {
          path: 'institu',
          name: 'Institu',
          component: Institu
        },
        {
          path: 'centrecom',
          name: 'CentreCom',
          component: CentreCom
        },
        {
          path: 'hospi',
          name: 'Hospi',
          component: Hospi
        },
        {
          path: 'educ',
          name: 'Educ',
          component: Educ
        },
        {
          path: 'restau',
          name: 'Restau',
          component: Restau
        },
        {
          path: 'touri',
          name: 'Touri',
          component: Touri
        },
        {
          path: 'resid',
          name: 'Resid',
          component: Resid
        },
        {
          path: 'urbapro',
          name: 'Urbapro',
          component: Urbapro
        },
        {
          path: 'amenag',
          name: 'Amenag',
          component: Amenag
        },
        {
          path: 'conco',
          name: 'Conco',
          component: Conco
        },
        {
          path: 'detail/:id',
          name: 'projectdetail',
          component: ProjectDetail,
          props: true
        }
      ]
    },
    {
      path: '/pub',
      name: 'Publication',
      component: Publication
    },
    {
      path: '/carriere',
      name: 'Carriere',
      component: Carriere
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/nouveau',
      name: 'Nouveau',
      component: Nouveau
    }
  ],
  mode: 'history'
})
