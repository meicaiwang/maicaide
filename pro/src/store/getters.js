var getters={
	count1:function(state){
		if(state.count>10){
			return 'hello'
		}else{
			return  'hi'
			
		}
	}
}

export default getters;
