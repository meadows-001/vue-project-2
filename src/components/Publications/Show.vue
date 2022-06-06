<template lang="html">
  <publication-template>
    <span slot="principal">
      <div class="col s12 m10 l10">
        <h3 class="header">
          <router-link class="btn waves-effect waves-light left teal" to="/publications">
            <i class="material-icons">arrow_back</i>
          </router-link>
          {{ publication.title }}
        </h3>
        <blockquote>{{ publication.short_description }}</blockquote>
        <div class="card horizontal">
          <div class="card-image">
            <img class="responsive-img" src="https://lorempixel.com/250/330/nature/6">
          </div>
          <div class="card-stacked">
            <div class="card-content">
              <div>
                <b>Autor:</b> {{publication.author}}
              </div>
              <div>
                <b>Ano de Publicação:</b> {{publication.publication_year}}
              </div>
              <div>
                <b>Tipo:</b> {{publication.type}}
              </div>
              <div>
                <b>Exemplares:</b> {{publication.count_exemplaries}}
              </div>
            </div>
            <div class="card-action">
              <router-link :to="{ name:'PublicationUpdate', params: { user_id: publication.id }}" class="waves-effect waves-light btn blue">
                <i class="material-icons">edit</i>
              </router-link>
              <button @click="destroy(publication.id)" class="waves-effect waves-light btn red">
                <i class="material-icons">delete_forever</i>
              </button>
            </div>
          </div>
        </div>
        <h5 class="header">Descrição:</h5>
        <div class="card-panel teal lighten-4">
          <span class="black-text">
            {{publication.full_description}}
          </span>
        </div>
      </div>
    </span>
  </publication-template>
</template>

<script>
import PublicationTemplate from '@/components/templates/PublicationTemplate'
import Publications from '@/services/publications'
export default {
  name: 'PublicationShow',
  components: {
    PublicationTemplate
  },
  data () {
    return {
      publication: [],
      token: ''
    }
  },
  mounted () {
    if (localStorage.getItem('user') === null) {
      this.$router.push('/login')
      return
    }
    this.show(this.$route.params.id)
  },
  methods: {
    getToken () {
      let user = JSON.parse(localStorage.getItem('user'))
      this.token = user.token
    },
    show (id) {
      this.getToken()
      Publications.show(id, this.token).then(res => {
        this.publication = res.data.data // 1º data -> Axios | 2º data -> Laravel
      })
    },
    destroy (id) {
      this.getToken()
      Publications.delete(id, this.token).then(res => {
        this.$router.push('/publications')
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
