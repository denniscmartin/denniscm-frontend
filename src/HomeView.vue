<script>
import {defineComponent} from 'vue'
import axios from "axios";

export default defineComponent({
   name: "HomeView",
   data() {
      return {
         repos: []
      }
   },
   mounted() {
      this.getRepos()
   },
   methods: {
      getRepos() {
         const url = import.meta.env.VITE_API_URL
         axios
             .get(url + '/repos')
             .then(response => {
                const repos = response['data']['message']['repos']
                repos.sort((a, b) => new Date(b['created_at']) - new Date(a['created_at']))
                this.repos = repos
             })
             .catch(error => {
                console.log(error)
             })
      }
   }
})
</script>

<template>
   <div class="container py-5">

      <p>hey, i'm Dennis</p>
      <p>Here you can find information about me and my projects</p>
      <div class="d-flex justify-content-start">
         <a class="me-4" href="https://github.com/denniscmartin" target="_blank">Github</a>
         <a class="me-4" href="https://www.youtube.com/@denniscmartin" target="_blank">Youtube</a>
         <a href="https://demo.denniscm.com" target="_blank">Demos</a>
      </div>
      <hr class="divider">

      <div class="mt-5">
         <p>Projects</p>
         <table class="table">
            <thead>
            <tr>
               <th scope="col">Name</th>
               <th scope="col">Description</th>
               <th scope="col">Repo</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="repo in repos">
               <td>{{ repo['pk'] }}</td>
               <td>{{ repo['description'] }}</td>
               <td><a :href="repo['url']" target="_blank">Link</a></td>
            </tr>
            </tbody>
         </table>
      </div>
   </div>
</template>

<style scoped>

</style>