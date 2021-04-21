import router from './router'
import store from './store'
import { setPageTitle } from './utils/tools'
import { getToken } from './utils/auth'
import storage from './utils/storage'


const whiteList = ['/login', '/401', '/404', '/403'] // no redirect whitelist
router.beforeEach(async(to, from, next) => {

  const token = getToken()
  // set page title
  document.title = setPageTitle(to.meta.title)
  if(!token) {
    if(to.path=='/login'){
      next()
    }else{
      next({name: 'Login'});
    }
  }else {
    next()
  }
})
router.afterEach(() => {
})
