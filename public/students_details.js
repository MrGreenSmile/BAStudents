//status 최대는 ★5 lv.90

let = students_details = [
{"name":"츠카츠키 리오", "variant":"normal",
"status":{
	"hp":[3664, 30119], "atk":[268, 3056], "def":[109, 599], "heal":[1803, 6202],
	"accuracy":714, "evation":1151, "critical":238, "critical":20000, "penetration":0, "stability":1201,
	"range":1000, "cost":700, "cost_max":0, "effectiveness":20000, "cc":100, "cc_resist":100, "atk_speed":10000, "speed":200,
	"buff_retention":10000, "debuff_retention":10000,
}, "skills":{
	"normal":{},
	"ex":[{
	"name":"빅 시스터", "cost":2,
	"content":`EX 스킬 즉시 드로우 후 아군 1인의 EX 스킬 카드 복제 (복제 카드 사용 <em>1회</em>까지)
	대상의 공격력 <em>{values1}%</em> 증가 (<em>20</em>초간)
	(복제 카드는 대상의 EX 스킬 카드 상태를 따라감)
	(복제 카드의 코스트는 대상 EX 스킬의 기본 코스트에서 1만큼 감소한 값을 가짐) (최소 0)`,
		"values1":{
			"target":"friendly", "target_num":"1", "type":"buff",
			"stats":[35.4, 38.1, 43.4, 46.1, 51.4],
		}
	}],"basic":[{
	"name":"유일한 진실",
	"content":`<em>30초</em>마다 적 1인에게 방어력 <em>{debuff}%</em> 감소 (<em>19초</em>간)
	공격력 <em>{damage}%</em> 대미지`,
		"values1":{
			"debuff":[19.6, 19.6, 19.6, 21.5, 21.5, 21.5, 23.5, 23.5, 23.5, 25.5],
			"damage":[185, 195, 204, 223, 232, 241, 260, 269, 278, 297]
		}
	}],"enhance":[{
	"name":"별을 쫓는 자",
	"content":`공격력 <em>{buff}%</em> 증가`,
		"values":{
			"buff":[14, 14.7, 15.4, 18.2, 18.9, 19.6, 22.4, 23.1, 23.8, 26.6]
		}
	}],"sub":[{
	"name":"아방가르드",
	"content":`아군의 공격력 <em>{buff}%</em> 증가`,
		"values":{
			"buff":[9.1, 9.5, 10, 11.8, 12.3, 12.7, 14.5, 15, 15.5, 17.3]
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
					"buff01":{"status":{
						"tag":"buff_retention",
						"config":[1000, 1050, 1100, 1300, 1350, 1400, 1600, 1650, 1700, 1900]
					}},
					"buff1":{"status":{
						"tag":"atk",
						"config":[14, 14.7, 15.4, 18.2, 18.9, 19.6, 22.4, 23.1, 23.8, 26.6]
					}}
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
},{
"name":"우시오 노아", "variant":"normal",
"status":{
	"hp":[2498, 31653], "atk":[132, 1511], "def":[19, 108], "heal":[1660, 5710],
	"accuracy":100, "evation":1090, "critical":201, "critical":20000, "penetration":0, "stability":988,
	"range":550, "cost":700, "cost_max":0, "effectiveness":20000, "cc":100, "cc_resist":100, "atk_speed":10000, "speed":200,
	"buff_retention":10000, "debuff_retention":10000,
}, "skills":{
	"normal":{
		"load":15, "shots":1,
		"ready_sec":0.83, "shot_sec":0.67, "delay_sec":1.33, "reload_sec":1.83
	},
	"ex":[{
	"name":"기록의 생명은 속도랍니다", "cost":3,
	"content":`지정한 적 1인에게 집중 공격 (<em>40초</em>간)
	방어력 <em>{debuff}%</em> 감소 (<em>40초</em>간)`,
		"values":{
			"debuff":{"min":"21.3", "max":"40.5"}
		}
	}],"basic":[{
	"name":"허점 발견!",
	"content":`<em>30초</em>마다 적 1인에게 공격력 <em>{damage}%</em> 대미지`,
		"values":{
			"damage":{"min":"399", "max":"758"}
		}
	}],"enhance":[{
	"name":"서기의 여유",
	"content":`최대 체력 <em>{buff}%</em> 증가`,
		"values":{
			"buff":{"min":"14", "max":"26.6"}
		}
	}],"sub":[{
	"name":"서기의 고집",
	"content":`기본 스킬 사용 시 해로운 효과 유지력 <em>{buff}%</em> 증가 (<em>13초</em>간)`,
		"values":{
			"buff":{"min":"16.9", "max":"32.1"}
		}
	}]},
"signature":{
	"name":"서기의 결단",
	"summary":`노아가 사용하는 컨버전 키트가 부착된 권총.
개머리판을 길게 늘여 견착하면 기관단총처럼 빠른 연사로 적을 제압할 수 있다.
`,
	"brk_thr":{
		"t2":{"summary":"강화 스킬 <em>서기의 여유</em>를 <em>서기의 여유+</em>로 강화",
			"skill":{"idx":"enhance", "name":"서기의 여유+",
				"content":`
					공격력 <em>{buff01}</em> 증가
					추가로 최대 체력 <em>{buff1}%</em> 증가
				`,
				"values":{
					"buff01":{"status":{
						"tag":"atk",
						"config":[130, 137, 143, 169, 175, 182, 208, 214, 221, 270]
					}},
					"buff1":{"status":{
						"tag":"atk",
						"config":[14, 14.7, 15.4, 18.2, 18.9, 19.6, 22.4, 23.1, 23.8, 26.6]
					}}
				}
			}},
		"t3":{"summary":"실내 지형 전투력을 SS로 강화", 
			"field":"D/B/SS"
			},
		"t4":{"summary":"신비 특효 10% 가산",
			"status":["effectiveness", 1000]
			}
	},
},
}, "uniqueItem":{
	"name":"",
	"summary":``
},
}
]
