<template lang="html">
  <publication-template>
    <span slot="principal">
      <div class="row">
        <h3>Atualização de Publicações</h3>
        <router-link class="btn waves-effect waves-light left teal" :to="{ name:'PublicationShow', params: { user_id: publication.id }}">
          <i class="material-icons">arrow_back</i>
        </router-link>
      </div>
      <div class="row">
        <form @submit.prevent.stop="update(publication.id)" class="col s12">
          <div class="row">
            <div class="input-field col s12 m12 l10">
              <input v-model="publication.title" id="title" name="title" type="text" class="validate">
              <label for="title">Título</label>
            </div>
          </div>

          <div class="row">
            <div class="input-field col s12 m12 l10">
              <textarea v-model="publication.short_description" id="short_description" name="short_description" class="materialize-textarea"></textarea>
              <label for="short_description">Descrição Curta</label>
            </div>
          </div>

          <div class="row">
            <div class="input-field col s12 m12 l10">
              <textarea v-model="publication.full_description" id="full_description" name="full_description" class="materialize-textarea"></textarea>
              <label for="full_description">Descrição Completa</label>
            </div>
          </div>

          <div class="row">
            <div class="input-field col s12 m12 l10">
              <input v-model="publication.author" id="author" name="author" type="text" class="validate">
              <label for="author">Autor</label>
            </div>
          </div>

          <div class="row">
            <div class="input-field col s12 m12 l10">
              <input v-model="publication.publication_year" id="publication_year" name="publication_year" type="number" class="validate">
              <label for="publication_year">Ano de Publicação</label>
            </div>
          </div>

          <div class="row">
            <div class="input-field col s12 m12 l10">
              <input v-model="publication.type" id="type" name="type" type="text" class="validate">
              <label for="type">Tipo</label>
            </div>
          </div>

          <div class="row">
            <button class="waves-effect waves-light btn-large">
              <i class="material-icons left">send</i>
              Atualizar
            </button>
          </div>
        </form>
  </div>
    </span>
  </publication-template>
</template>

<script>
import PublicationTemplate from '@/components/templates/PublicationTemplate'
import Publications from '@/services/publications'
export default {
  name: 'PublicationUpdate',
  components: {
    PublicationTemplate
  },
  data () {
    return {
      publication: {},
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
    update (id) {
      this.getToken()
      Publications.update(id, this.publication, this.token).then(res => {
        this.$router.push(`/publication/${id}`)
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
