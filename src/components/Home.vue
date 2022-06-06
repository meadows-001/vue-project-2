<template>
  <span>
    <header>
      <nav-bar-root cor="blue-grey darken-3">
        <li>
          <router-link to="/publications">Publicações</router-link>
        </li>
        <span v-if="!user">
          <li><router-link to="/login">Login</router-link></li>
          <li><router-link to="/register">Cadastrar-se</router-link></li>
        </span>
        <li v-if="user">
          <router-link to="/user">{{ user.user.name }}</router-link>
        </li>
        <li v-if="user"><a @click="sair()">Sair</a></li>
      </nav-bar-root>
    </header>

    <div class="container">
      <div class="row">
        <div class="col s12 m8 l8">
          <img class="responsive-img" src="static/img/library.jpg" alt="">
        </div>
        <h4>Funcionalidades</h4>
        <div class="col s12 m4 l4">
          <strong>Usuário</strong>
          <ul class="collection">
            <li class="collection-item">Cadastro</li>
            <li class="collection-item">Login</li>
            <li class="collection-item">Detalhes</li>
          </ul>
          <strong>Publicações</strong>
          <ul class="collection">
            <li class="collection-item">Cadastro</li>
            <li class="collection-item">Listagem</li>
            <li class="collection-item">Detalhes</li>
            <li class="collection-item">Atualização</li>
            <li class="collection-item">Exclusão</li>
          </ul>
        </div>
      </div>
    </div>
    <footer-root />
  </span>
</template>

<script>
import NavBarRoot from '@/components/layouts/NavBarRoot'
import FooterRoot from '@/components/layouts/FooterRoot'
export default {
  name: 'Home',
  components: {
    NavBarRoot,
    FooterRoot
  },
  data () {
    return {
      user: false
    }
  },
  mounted () {
    let user = localStorage.getItem('user')
    if (user) {
      this.user = JSON.parse(user)
    }
  },
  methods: {
    sair () {
      localStorage.clear()
      this.user = false
      this.$router.push('/')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h4 {
  font-weight: normal;
  color: #42b983;
}
img {
  height: 76vh;
}
</style>
