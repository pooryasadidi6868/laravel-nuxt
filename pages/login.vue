<template>
   <v-row justify="center">
       <v-col md="6" sm="12" >
          <v-sheet elevation="12">

             <v-form @submit.prevent="submit" class="pa-8">
              <v-text-field v-model.trim="form.email" label="ایمیل"></v-text-field>
              <p class="text-right caption red--text" v-if="errors.email">{{errors.email[0]}}</p>
              <v-text-field v-model.trim="form.password" label="پسورد"></v-text-field>
             <p class="text-right caption red--text" v-if="errors.password">{{errors.password[0]}}</p>
              <v-btn color="cyan" type="submit">ورود</v-btn>
              <nuxt-link to="/register"> 
                    <v-btn text color="cyan" class="float-left" type="submit">هنوز ثبت نام نکردی؟</v-btn>
              </nuxt-link>
            
            </v-form>
        </v-sheet>
          

       </v-col>
      
   </v-row>

</template>
<script>
export default {

   middleware:["guest"],
   data(){
      return{
         form:{
            email:'',
            password:''
         },
         errors:[],
      }
   },
    
    
    methods:{
    
   
    async submit(){
            try{
             await this.$auth.loginWith("local",{
             data:this.form
              })
              this.$router.push("/dashbord")
            }catch(error){
               this.errors=error.response.data.errors
            }

                
         }


    }
}
</script>