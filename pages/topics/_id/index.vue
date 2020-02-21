<template>
<div>
     <h1 class="text-center">topic page</h1>
     <v-card>

         <v-card-title>{{topic.title}}</v-card-title>
         <v-card-actions class="float-left">
             <v-btn  icon>
                 <v-icon color="red">mdi-heart</v-icon>
                 <v-icon color="yellow lighten-4">mdi-star</v-icon>
             </v-btn>
         </v-card-actions>
     </v-card>
     
</div>
   
</template>

<script>
export default {
    data (){
        return{
            topic:''
        }
    },

    async asyncData({$axios,params}){
        let {data}= await $axios.$get(`/topics/${params.id}`)
        return {
            topic : data
        }
    }
}
</script>