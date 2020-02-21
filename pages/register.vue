<template>
   <v-row justify="center">
       <v-col md="6" sm="12" >
          <v-sheet elevation="12">

             <v-form  @submit.prevent="register" class="pa-8">
              <v-text-field v-model.trim="form.name" label="نام"></v-text-field>
              <p class="text-right caption red--text">error</p> 
              <v-text-field v-model.trim="form.email" label="ایمیل"></v-text-field>
              <p class="text-right caption red--text">error</p>
              <v-text-field v-model.trim="form.password" type="password" label="پسورد"></v-text-field>
              <v-btn color="cyan" type="submit">ثبت نام</v-btn>
              <v-btn text  color="cyan" class="float-left" type="submit">مرا به خاطر بسپار</v-btn>
              
            
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
         }
      }
   },
  

   computed:{
      async register(){
         await this.$axios.$post('register',this.form)
         await this.$auth.loginWith('local',{
            data:{
               email:this.form.email,
               password:this.form.password
            }
         })
         this.$router.push('/dashbord')
      }
   }

    
}
</script>