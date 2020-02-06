import router from '@/router'
import { getToken } from '@/utils/auth.js'

const whiteList = ['/login', '/user/register', '/about']
const defaultRoutePath = '/'  // 登陆以后默认跳转的页面

router.beforeEach((to, from, next) => {
    let token = getToken()
    if (token) {
        /* has token */
        if (to.path === '/login') {
            next({ path: defaultRoutePath })
        } else {
            // if (store.getters.roles.length === 0) {
            //   // 如果是第一次登陆，就没有用户信息，则获取用户信息


            //     })
            // } else {
            //   // 已经存在用户信息，则直接登陆

            //   next()
            // }
            next()
        }
    } else {
        if (whiteList.includes(to.path)) {
            // 在免登录白名单，直接进入
            next()
        } else {
            next({ path: '/login', })
        }
    }
})