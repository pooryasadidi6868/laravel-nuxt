<template>
<div>
    <v-row  justify="center">
        <v-col v-for="(topic,index) in topics" :key='index' cols="4" >
            <v-card elevation="15">
               <nuxt-link :to="{name:'topics-id',params:{id:topic.id}}">
                   <v-card-title>{{topic.title}}</v-card-title>
               </nuxt-link>
               <v-img></v-img>

                <h2>{{topic.user.name}}</h2>
                <v-card-text v-for="(content,index) in topic.posts" :key="index">
                    <h1>{{content.body}}</h1>
                </v-card-text>
             
                <nuxt-link :to="{name:'topics-edit',params:{id:topic.id}}">
                   <v-card-actions>
                       <v-btn block color="light-blue accent-2">edit</v-btn>
                   </v-card-actions>
                </nuxt-link> 
                   <v-card-actions>
                       <v-btn @click="deleteTopic(topic.id)" block outlined color="red">delete</v-btn>
                   </v-card-actions>
              
            </v-card>
           
        </v-col>


    <!-- pagination -->
    </v-row >
 
         <v-row  justify="center">
            <v-col class="mt-20" cols="12">
                  <div class="text-center">
                    <v-pagination
                    v-model="meta.current_page"
                    @input="loadMore"
                    :length="meta.last_page"
                    :total-visible="5"
                    ></v-pagination>
                  </div>
            </v-col>
        </v-row>
</div>
     
</template>

<script>
import axios from 'axios';
export default {
        
        data(){
            return{
                topics:[],
                links:[],
                meta:[]
            }
        },

        
          async asyncData ({ $axios }) {
              const {data,links,meta} = await $axios.$get(`/topics`)
              return {
                  topics:data,
                  links:links,
                  meta
              
              } 
             
          
          },
              methods: {
                         async loadMore() {
                             let {data} =  await this.$axios.$get(`/topics?page=${this.meta.current_page}`)
                                 return this.topics = {...data}
                         },
                          async deleteTopic(id){
                               await this.$axios.$delete(`/topics/${id}`)
                                    this.$router.go({path:'/topics'})
                          } 

                         },

                      
          
}
</script>