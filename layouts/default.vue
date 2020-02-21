<template>
  <v-app light>
     <v-app-bar
      app
      dark
      absolute
      color="cyan"
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      

      <nuxt-link to="/">  <v-toolbar-title>کیبورد</v-toolbar-title> </nuxt-link>
     

      <v-spacer></v-spacer>
    
      <template v-if="!loggedIn">
      <nuxt-link to="/register">
          <v-btn icon>
             <v-icon>mdi-account-plus</v-icon>
          </v-btn>
      </nuxt-link>
     
      <nuxt-link to="/login">
        <v-btn icon>
          <v-icon>mdi-login-variant</v-icon>
        </v-btn>
      </nuxt-link>
      </template>

      <template v-if="loggedIn">
                 <nuxt-link to="/topics/create"><v-btn icon elevation="7" color="orange" text><v-icon>mdi-plus</v-icon></v-btn></nuxt-link> 
         <nuxt-link to="/topics"><v-btn elevation="7" color="white" text> تاپیک ها </v-btn></nuxt-link> 

         
         <v-toolbar-title class="ma-3">{{user.name}} خوش امدید</v-toolbar-title> 
         <v-btn @click="logout" text color="white"><v-icon>mdi-location-exit</v-icon></v-btn>
      </template>

       
    

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
   
   
    <v-footer
   
      app
      dark
      color="cyan"
    >
      <span style="margin:auto" class="text-center">&copy; طراحی شده توسط  poorya@sadidi6868@gmail</span>
    </v-footer>
  </v-app>
  
</template>

<script>
// import {mapGetters} from 'vuex'
// export default {
//   computed:{
//     ...mapGetters({
//       loggedIn:"auth/authenticated"
//     })
//   }
  
// }import { mapState } from 'vuex'

export default{

  methods:{
    logout(){
      this.$auth.logout();
    }
  }
}
</script>
