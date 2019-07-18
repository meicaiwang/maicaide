import Mock from 'mockjs';

var data=Mock.mock({
	"list|5-10":[
			{
				"pid|+1":0,
				"time":"@date()",
				'img':'@image("200x100")',
				"text":'@cparagraph()'	
			}
		]
})

Mock.mock('http://www.baidu.com/api',data)