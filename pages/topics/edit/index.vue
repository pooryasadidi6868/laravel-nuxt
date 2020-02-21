<template>
    <div>
        <h1 class="text-center">edit topic {{$route.params.id}}</h1>
         <v-row justify="center">
       <v-col md="6" sm="12" >
          <v-sheet elevation="12">

              <v-form @submit.prevent="update" class="pa-8">
              <v-text-field v-model="topic.title" label="عنوان">{{topic.title}}</v-text-field>
              <p class="text-right caption red--text" v-if="errors.title">{{errors.title[0]}}</p>
              <v-btn color="cyan" type="submit">ویرایش</v-btn>
             
            
            </v-form>
        </v-sheet>
          

       </v-col>
      
   </v-row>
    </div>
</template>

<script>

export default {
    data(){
        return{
            topic:{
                title:''
            },
            errors:[]
        }
    },

   async asyncData({$axios,params}){
       const {data}= await $axios.$get(`/topics/${params.id}`) 
       return{ topic : data}
   },

   methods:{
      async update(){
                    try{ 
                    await this.$axios.patch(`/topics/${this.$route.params.id}`,{
                        title:this.topic.title })
                        this.$router.push('/topics')
                        }catch(error){
                        this.errors=error.response.data.errors
                        }

                    }
           }
    
}
</script>