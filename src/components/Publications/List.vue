<template lang="html">
  <publication-template>
    <span slot="principal">
      <div class="row">
        <h3>Lista de Publicações</h3>
        <router-link class="btn waves-effect waves-light right teal" to="/publications/new">
          Nova Publicação
        </router-link>
      </div>

      <div class="row">
        <div class="card horizontal teal lighten-4 col s12 m5 l5 offset-m1 offset-l1" v-for="publication in publications" :key="publication.id">
          <div class="card-image">
            <img class="responsive-img" src="https://lorempixel.com/180/330/nature/6">
          </div>
          <div class="card-stacked">
            <div class="card-content">
              <div>
                <b>{{publication.title}}</b>
              </div>
              <div>
                {{publication.short_description}}
              </div>
            </div>
            <div class="card-action">
              <router-link class="center-align" :to="{ name:'PublicationShow', params: { id: publication.id }}">Detalhes</router-link>
            </div>
          </div>
        </div>
      </div>
    </span>
  </publication-template>
</template>

<script>
import PublicationTemplate from '@/components/templates/PublicationTemplate'
import Publications from '@/services/publications'
export default {
  name: 'PublicationsList',
  components: {
    PublicationTemplate
  },
  data () {
    return {
      publications: [],
      token: ''
    }
  },
  mounted () {
    if (localStorage.getItem('user') === null) {
      this.$router.push('/login')
      return
    }
    this.list()
  },
  methods: {
    getToken () {
      let user = JSON.parse(localStorage.getItem('user'))
      this.token = user.token
    },
    list () {
      this.getToken()
      Publications.list(this.token).then(res => {
        this.publications = res.data.data // 1º data -> Axios | 2º data -> Laravel
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
</style>
