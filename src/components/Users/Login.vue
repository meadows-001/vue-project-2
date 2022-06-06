<template lang="html">
  <auth-template>
    <span slot="principal">
      <h3>Login</h3>
      <div class="col s12 m8 l8 img-left">
        <img class="responsive-img" src="static/img/library.jpg" alt="">
      </div>
      <div class="col s12 m4 l4">
        <form method="post" @submit.prevent="login()">
          <input type="email" placeholder="E-mail" name="email" v-model="user.email">
          <input type="password" placeholder="Senha" name="password" v-model="user.password">
          <button type="submit" class="waves-effect waves-light btn btn">
            Entrar <i class="material-icons right">send</i>
          </button>
          <p>
            <strong>
              Não tem conta? <router-link class="waves-effect waves-teal teal lighten-3 btn-flat" to="/register">Cadastre-se</router-link>
            </strong>
          </p>
        </form>
      </div>
    </span>
  </auth-template>
</template>

<script>
import AuthTemplate from '@/components/templates/AuthTemplate'
import UserService from '@/services/users'
export default {
  name: 'UsersLogin',
  components: {
    AuthTemplate
  },
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      UserService.login(this.user).then(res => {
        if (res.data.token) {
          localStorage.setItem('user', JSON.stringify(res.data))
          this.$router.push('/')
        }
      }).catch(err => {
        if (err.response.status === 401) {
          alert('Erro! Usuário ou Senha Inválidos!')
        }
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
