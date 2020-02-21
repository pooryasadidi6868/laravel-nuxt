import Vue from 'vue'


    const User = {
        install(Vue, options) {
            Vue.mixin({
                computed: {
                    loggedIn() {
                      return this.$auth.loggedIn
                    },
                    user() {
                      return this.$auth.user
                    }
                  },
            })
        }
    };

    Vue.use(User);