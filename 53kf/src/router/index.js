import Vue from 'vue'
import Router from 'vue-router'
import New from '@/components/new'
import voucherCenter from '@/components/voucherCenter'
import Product from '@/components/product'
import Order from '@/components/order'
import Agency from '@/components/agency'
import Money from '@/components/money'

//我的信息
import accountInformation from '@/components/new/accountInformation'
import personalInformation from '@/components/new/personalInformation'
import passwordModification from '@/components/new/passwordModification'
import workingManagement from '@/components/new/workingManagement'
import invoiceManagement from '@/components/new/invoiceManagement'
import loginTemplate from '@/components/new/loginTemplate'
import certification from '@/components/new/certification'
import shippingAddress from '@/components/new/shippingAddress'

//我的充值
import recharge from '@/components/voucher-center/recharge'
import withdraw from '@/components/voucher-center/withdraw'
import bill from '@/components/voucher-center/bill'
import rebate from '@/components/voucher-center/rebate'
import coupon from '@/components/voucher-center/coupon'

//我的产品
import allProducts from '@/components/products/allProducts'
import launchedProducts from '@/components/products/launchedProducts'
import unopenedProduc from '@/components/products/unopenedProduc'
import networkCenter from '@/components/products/networkCenter'

//我的订单
Vue.use(Router)
import newOrder from '@/components/order/newOrder'
import oldOrder from '@/components/order/oldOrder'

//我的代理
import memberAdd from '@/components/agency/memberAdd'
import memberView from '@/components/agency/memberView'
import moduleManage from '@/components/agency/moduleManage'
import commissionDetail from '@/components/agency/commissionDetail'
import actionList from '@/components/agency/actionList'
import attributionStatistics from '@/components/agency/attributionStatistics'
import abandonAgency from '@/components/agency/abandonAgency'

//我要赚钱
import beginPromotion from '@/components/money/beginPromotion'
import extendedMember from '@/components/money/extendedMember'
import openingStatistics from '@/components/money/openingStatistics'
import openingDetail from '@/components/money/openingDetail'

export default new Router({
    mode: 'history',
  routes: [
    {
      path: '/news',
      component: New,
      base:'53kf',
      children:[
        {
          path:'account-information',
          name:"account-information",
          component:accountInformation
        },
        {
          path:'personal-information',
          name:'personal-information',
          component:personalInformation
        },
        {
          path:'password-modification',
          name:'password-modification',
          component:passwordModification
        },
        {
          path:'working-management',
          name:'working-management',
          component:workingManagement
        },
        {
          path:'invoice-management',
          name:'invoice-management',
          component:invoiceManagement
        },
        {
          path:'login-template',
          name:'login-template',
          component:loginTemplate
        },
        {
          path:'certification',
          name:'certification',
          component:certification
        },
        {
          path:'shipping-address',
          name:'shipping-address',
          component:shippingAddress
        }
    ]
    },
    {
      path: '/voucher-center',
      component: voucherCenter,
      children:[
        {
          path:'recharge',
          name:'recharge',
          component:recharge
        },
        {
          path:'withdraw',
          name:'withdraw',
          component:withdraw
        },
        {
          path:'bill',
          name:'bill',
          component:bill
        },
        {
          path:'rebate',
          name:'rebate',
          component:rebate
        },
        {
          path:'coupon',
          name:'coupon',
          component:coupon
        }
      ]
    },
    {
      path: '/product',
      component: Product,
      children:[
        {
          path:'all-products',
          name:'all-products',
          component:allProducts
        },
        {
          path:'launched-products',
          name:'launched-products',
          component:launchedProducts
        },
        {
          path:'unopened-produc',
          name:'unopened-produc',
          component:unopenedProduc
        },
        {
          path:'network-center',
          name:'network-center',
          component:networkCenter
        }
      ]
    },
    {
      path: '/order',
      component: Order,
      children:[
        {
          path:'new-order',
          name:'new-order',
          component:newOrder
        },
        {
          path:'old-order',
          name:'old-order',
          component:oldOrder
        }
      ]
    },
    {
      path: '/agency',
      component: Agency,
      children:[
        {
          path:'member-add',
          name:'member-add',
          component:memberAdd
        },
        {
          path:'member-view',
          name:'member-view',
          component:memberView
        },
        {
          path:'module-manage',
          name:'module-manage',
          component:moduleManage
        },
        {
          path:'commission-detail',
          name:'commission-detail',
          component:commissionDetail
        },
        {
          path:'action-list',
          name:'action-list',
          component:actionList
        },
        {
          path:'attribution-statistics',
          name:'attribution-statistics',
          component:attributionStatistics
        },
        {
          path:'abandon-agency',
          name:'abandon-agency',
          component:abandonAgency
        }
      ]
    },
    {
      path: '/money',
      component: Money,
      children:[
        {
          path:'begin-promotion',
          name:'begin-promotion',
          component:beginPromotion
        },
        {
          path:'extended-member',
          name:'extended-member',
          component:extendedMember
        },
        {
          path:'opening-statistics',
          name:'opening-statistics',
          component:openingStatistics
        },
        {
          path:'opening-detail',
          name:'opening-detail',
          component:openingDetail
        }
      ]
    },
    { path: '*', redirect: '/news/account-information' }
  ]
})
