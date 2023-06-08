<script>
import {defineComponent} from 'vue'

export default defineComponent({
   name: "HomeView"
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
         <p>Most used languages</p>
         <table class="table">
            <thead>
            <tr>
               <th scope="col">Name</th>
               <th scope="col">Number of public repos</th>
            </tr>
            </thead>
            <tbody>
            <tr>
               <td>Python</td>
               <td>46</td>
            </tr>
            </tbody>
         </table>
      </div>

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
            <tr>
               <td>finance-parser</td>
               <td>Serverless parser to extract information from financial reports using AWS Step Functions, AWS S3,
                  AWS Api Gateway, AWS Textract, AWS DynamoDB and Eventbridge</td>
               <td>Link</td>
            </tr>
            </tbody>
         </table>
      </div>
   </div>
</template>

<style scoped>

</style>