<template lang="html">
  <auth-template>
    <span slot="principal">
      <h3>Cadastro</h3>
      <div class="col s12 m8 l8 img-left">
        <img class="responsive-img" src="static/img/library.jpg" alt="">
      </div>
      <div class="col s12 m4 l4">
        <form method="post" @submit.prevent="register()">
          <input type="text" placeholder="Nome" name="name" v-model="user.name">
          <input type="text" placeholder="Telefone" name="phone" v-model="user.phone">
          <input type="text" placeholder="Endereço" name="address" v-model="user.address">
          <input type="email" placeholder="E-mail" name="email" v-model="user.email">
          <input type="password" placeholder="Senha" name="password" v-model="user.password">
          <button type="submit" class="waves-effect waves-light btn btn">
            Cadastrar <i class="material-icons right">send</i>
          </button>
          <p>
            <strong>
              Já tem conta? <router-link class="waves-effect waves-teal teal lighten-3 btn-flat" to="/login">Faça Login</router-link>
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
  name: 'UsersRegister',
  components: {
    AuthTemplate
  },
  data () {
    return {
      user: {}
    }
  },
  methods: {
    register () {
      UserService.register(this.user).then(res => {
        if (res.data.token) {
          localStorage.setItem('user', JSON.stringify(res.data))
          this.$router.push('/')
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
