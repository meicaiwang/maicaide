import Mock from 'mockjs';
var Random=Mock.Random;
	
Random.extend({
    xingzuo: function(date) {
        var constellations = ['白羊座', '金牛座', '双子座', '巨蟹座', '狮子座', '处女座', '天秤座', '天蝎座', '射手座', '摩羯座', '水瓶座', '双鱼座']
        return this.pick(constellations)
    }
})

var data=Mock.mock({
	"list|5-10":[
			{
				"pid|+1":0,
				"address":'@county(true)',
				"sfz":"@id()",
				'xz':'@xingzuo()'
			}
		]
})

Mock.mock('http://www.jingdong.com/api',data)
