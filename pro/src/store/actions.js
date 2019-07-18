var actions={
	jian:function({commit}){
		setTimeout(function(){
			commit('jian')
		},2000)
	},
	login({commit},name){
		setTimeout(function(){
			commit('login',name)	
		},2000)
	}
}
export default actions;
