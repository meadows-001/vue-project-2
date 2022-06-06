<template lang="html">
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

    <main>
      <div class="container">
        <div class="row">
          <slot name="principal" />
        </div>
      </div>
    </main>

    <footer-root />
  </span>
</template>

<script>
import NavBarRoot from '@/components/layouts/NavBarRoot'
import FooterRoot from '@/components/layouts/FooterRoot'
export default {
  name: 'AuthTemplate',
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

<style lang="css" scoped>
</style>
