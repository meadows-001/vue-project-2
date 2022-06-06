<template lang="html">
  <publication-template>
    <span slot="principal">
      <div class="row">
        <h3>
          <router-link class="btn waves-effect waves-light left teal" to="/publications">
            <i class="material-icons">arrow_back</i>
          </router-link>
          Cadastro de Publicações
        </h3>

      </div>
      <div class="row">
        <form @submit.prevent.stop="create" class="col s12">
          <div class="row">
            <div class="input-field col s12 m12 l10">
              <input v-model="publications.title" id="title" name="title" type="text" class="validate">
              <label for="title">Título</label>
            </div>
          </div>

          <div class="row">
            <div class="input-field col s12 m12 l10">
              <textarea v-model="publications.short_description" id="short_description" name="short_description" class="materialize-textarea"></textarea>
              <label for="short_description">Descrição Curta</label>
            </div>
          </div>

          <div class="row">
            <div class="input-field col s12 m12 l10">
              <textarea v-model="publications.full_description" id="full_description" name="full_description" class="materialize-textarea"></textarea>
              <label for="full_description">Descrição Completa</label>
            </div>
          </div>

          <div class="row">
            <div class="input-field col s12 m12 l10">
              <input v-model="publications.author" id="author" name="author" type="text" class="validate">
              <label for="author">Autor</label>
            </div>
          </div>

          <div class="row">
            <div class="input-field col s12 m12 l10">
              <input v-model="publications.publication_year" id="publication_year" name="publication_year" type="number" class="validate">
              <label for="publication_year">Ano de Publicação</label>
            </div>
          </div>

          <div class="row">
            <div class="input-field col s12 m12 l10">
              <input v-model="publications.type" id="type" name="type" type="text" class="validate">
              <label for="type">Tipo</label>
            </div>
          </div>

          <div class="row">
            <div class="input-field col s12 m12 l10">
              <input v-model="publications.qtd_exemplaries" id="qtd_exemplaries" name="qtd_exemplaries" type="number" class="validate">
              <label for="qtd_exemplaries">Quantidade de Exemplares</label>
            </div>
          </div>

          <div class="row">
            <button class="waves-effect waves-light btn-large">
              <i class="material-icons left">send</i>
              Cadastrar
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
  name: 'PublicationsCreate',
  components: {
    PublicationTemplate
  },
  data () {
    return {
      publications: {},
      token: ''
    }
  },
  mounted () {
    if (localStorage.getItem('user') === null) {
      this.$router.push('/login')
    }
  },
  methods: {
    getToken () {
      let user = JSON.parse(localStorage.getItem('user'))
      this.token = user.token
    },
    create () {
      this.getToken()
      Publications.create(this.publications, this.token).then(res => {
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
