//create state
export  const state = ()=>({
       errors:{}
})
//create getters
export const getters={
    errors(state){
        return state.errors;
    }

}

//create mutation
export const mutations = {
    SET_ERRORS (state,errors) {
      state.errors=errors
    }
  }

//create action
export const actions={
    setErrors({commit},errors){
        commit("SET_ERRORS",errors)
    },

    clearErrors({ commit}){
        commit("SET_ERRORS",{})
    }
}
