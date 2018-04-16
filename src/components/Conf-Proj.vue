<template>
  <v-data-table
    :headers="headers"
    :items="projects"
    class="elevation-1"
  >
    <template slot="items" slot-scope="props">
      <td>{{ props.item.id }}</td>
      <td class="text-xs-right">{{ props.item.source }}</td>
      <td class="text-xs-right">{{ props.item.link }}</td>
      <td class="text-xs-right">{{ props.item.title }}</td>
      <td class="text-xs-right">{{ props.item.category }}</td>
    </template>
  </v-data-table>
</template>

<script>
  export default {
    data () {
      return {
        email: '',
        password: '',
        dialog: false,
        headers: [
          {
            text: 'id',
            align: 'left',
            sortable: false,
            value: 'id'
          },
          { text: 'Source', value: 'source' },
          { text: 'Lien', value: 'link' },
          { text: 'Titre', value: 'title' },
          { text: 'Categories', value: 'category' }
        ]
      }
    },
    computed: {
      user () {
        return this.$store.getters.user
      },
      error () {
        return this.$store.getters.error
      },
      loading () {
        return this.$store.getters.loading
      },
      projects () {
        return this.$store.getters.getProjects
      }
    },
    watch: {
      user (value) {
        if (value !== null && value !== undefined) {
          this.$router.push('/config')
        }
      }
    },
    methods: {
      toto () {
        this.dialog = !this.dialog
        console.log(!this.dialog)
      },
      jumptoprojects () {
        this.$router.push('/conf-proj')
      },
      backtomain () {
        this.$router.push('/config')
      },
      onSignin () {
        this.$store.dispatch('signUserIn', {email: this.email, password: this.password})
      },
      onDismissed () {
        this.$store.dispatch('clearError')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* @import url(https://fonts.googleapis.com/css?family=Roboto:300); */

</style>
