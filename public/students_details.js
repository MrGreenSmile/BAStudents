//status 최대는 ★5 lv.90

let = students_details = [
{"name":"츠카츠키 리오", "variant":"normal",
"status":{
	"hp":[3664, 30119], "atk":[268, 3056], "def":[109, 599], "heal":[1803, 6202],
	"accuracy":714, "evation":1151, "critical":238, "critical":20000, "penetration":0, "stability":1201,
	"range":1000, "cost":700, "cost_max":0, "Effectiveness":20000, "cc":100, "cc_resist":100, "atk_speed":10000, "speed":200,
	"buff_retention":10000, "debuff_retention":10000,
}, "skills":{
	"ex":[{
	"name":"빅 시스터", "cost":2,
	"content":`EX 스킬 즉시 드로우 후 아군 1인의 EX 스킬 카드 복제 (복제 카드 사용 <em>1회</em>까지)
	대상의 공격력 <em>{buff}%</em> 증가 (<em>20</em>초간)
	(복제 카드는 대상의 EX 스킬 카드 상태를 따라감)
	(복제 카드의 코스트는 대상 EX 스킬의 기본 코스트에서 1만큼 감소한 값을 가짐) (최소 0)`,
		"values":{
			"buff":{"min":35.4, "max":51.4}
		}
	}],"basic":[{
	"name":"유일한 진실",
	"content":`<em>30초</em>마다 적 1인에게 방어력 <em>{debuff}%</em> 감소 (<em>19초</em>간)
	공격력 <em>{damage}%</em> 대미지`,
		"values":{
			"debuff":{"min":"19.6", "max":"25.5"},
			"damage":{"min":"185", "max":"297"}
		}
	}],"enhance":[{
	"name":"별을 쫓는 자",
	"content":`공격력 <em>{buff}%</em> 증가`,
		"values":{
			"buff":{"min":"14", "max":"26.6"}
		}
	}],"sub":[{
	"name":"아방가르드",
	"content":`아군의 공격력 <em>{buff}%</em> 증가`,
		"values":{
			"buff":{"min":"9.1", "max":"17.3"}
		}
	}]},
"signature":{
	"tier":{
		"t2":{"summary":"강화 스킬 <em>별을 쫓는 자</em>를 <em>별을 쫓는 자+</em>로 강화",
			"skill":{"idx":"enhance", "name":"별을 쫓는 자+",
				"content":`
					이로운 효과 유지력 <em>{buff01}</em> 증가
					추가로 공격력 <em>{buff1}%</em> 증가
				`,
				"values":{
					"buff01":{"status":"buff_retention", "min":1000, "max":1900},
					"buff1":{"status":"atk", "min":14, "max":26.6}
				}
			}},
		"t3":{"summary":"실내 지형 전투력을 SS로 강화", 
			"field":"A/D/SS"
			},
		"t4":{"summary":"코스트 상한 +0.5",
			"status":["cost_max", 0.5]
			}
	},
}, "uniqueItem":{
	"name":"",
	"summary":``
},
},
]
