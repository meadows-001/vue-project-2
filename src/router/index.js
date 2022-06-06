import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
// publications
import PublicationsList from '@/components/Publications/List'
import PublicationsCreate from '@/components/Publications/Create'
import PublicationShow from '@/components/Publications/Show'
import PublicationUpdate from '@/components/Publications/Update'
// users
import UsersLogin from '@/components/Users/Login'
import UsersRegister from '@/components/Users/Register'
import ShowUser from '@/components/Users/ShowUser'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Home', component: Home },
    // publications
    { path: '/publications', name: 'PublicationsList', component: PublicationsList },
    { path: '/publications/new', name: 'PublicationsCreate', component: PublicationsCreate },
    { path: '/publication/:id', name: 'PublicationShow', component: PublicationShow },
    { path: '/publication/:id/edit', name: 'PublicationUpdate', component: PublicationUpdate },
    // users
    { path: '/login', name: 'UsersLogin', component: UsersLogin },
    { path: '/user', name: 'ShowUser', component: ShowUser },
    { path: '/register', name: 'UsersRegister', component: UsersRegister }
  ]
})
