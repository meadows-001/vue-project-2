<template lang="html">
  <auth-template>
    <span slot="principal">
      <h3 class="center">Página do Usuário</h3>
      <div class="col s12 m7 l7 img-left">
        <img class="responsive-img" src="static/img/library.jpg" alt="">
      </div>
      <div class="col s12 m5 l5">
        <ul class="collection">
          <li class="collection-item avatar">
            <i class="circle material-icons">person</i>
            <span class="title">Nome:</span> <b>{{ user.name }}</b>
          </li>
          <li class="collection-item avatar">
            <i class="circle material-icons">phone</i>
            <span class="title">Telefone:</span> <b>{{ user.phone }}</b>
          </li>
          <li class="collection-item avatar">
            <i class="circle material-icons">home</i>
            <span class="title">Endereço:</span> <b>{{ user.address }}</b>
          </li>
          <li class="collection-item avatar">
            <i class="circle material-icons">email</i>
            <span class="title">Email:</span> <b>{{ user.email }}</b>
          </li>
        </ul>
      </div>
    </span>
  </auth-template>
</template>

<script>
import AuthTemplate from '@/components/templates/AuthTemplate'
import UserService from '@/services/users'
export default {
  name: 'ShowUser',
  components: {
    AuthTemplate
  },
  data () {
    return {
      user: {},
      token: ''
    }
  },
  mounted () {
    if (localStorage.getItem('user') === null) {
      this.$router.push('/login')
      return
    }
    this.me()
  },
  methods: {
    getToken () {
      let user = JSON.parse(localStorage.getItem('user'))
      this.token = user.token
    },
    me () {
      this.getToken()
      UserService.me(this.token).then(res => {
        this.user = res.data.user
      })
    }
  }
}
</script>

<style lang="css" scoped>
h3 {
  font-weight: normal;
  color: #42b983;
}
img {
  height: 76vh;
}
.img-left {
  margin-bottom: 8%;
}
</style>
