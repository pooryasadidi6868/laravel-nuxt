
  <template>
   <v-row justify="center">
       <v-col md="6" sm="12" >
          <v-sheet elevation="12">

             <v-form @submit.prevent="create" class="pa-8">
              <v-text-field v-model="form.title" label="عنوان"></v-text-field>
              <p class="text-right caption red--text" v-if="errors.title">{{errors.title[0]}}</p>
              <v-text-field v-model.trim="form.body" label="متن"></v-text-field>
             <p class="text-right caption red--text" v-if="errors.body">{{errors.body[0]}}</p>
              <v-btn color="cyan" type="submit">ایجاد</v-btn>
             
            
            </v-form>
        </v-sheet>
          

       </v-col>
      
   </v-row>

</template>
<script>
export default {

   middleware:["auth"],
   data(){
      return{
         form:{
            title:'',
            body:''
         },
         errors:[],
      }
   },
    
    
    methods:{
    
   
    async create(){
            try{
              await this.$axios.$post("/topics",this.form) 
              this.$router.push("/topics")
            }catch(error){
               this.errors=error.response.data.errors
            }

                
         }


    }
}
</script>
