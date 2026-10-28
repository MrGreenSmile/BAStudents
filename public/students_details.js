//status 최대는 ★5 lv.90
//type==="buff" || "debuff" > duration, buff_type
//type==="damage" > duration=0 && buff_type='' || 참조 안함
//position!="special" > ['skills']['normal'] 참조 #일반 공격

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
	"desc":`대상의 EX 스킬을 즉시 드로우 및 코스트 1 감소.
		대상의 공격력 <em>{values2}%</em> 증가 (<em>20</em>초간)
	`,
	"content":`EX 스킬 즉시 드로우 후 아군 1인의 EX 스킬 카드 복제 (복제 카드 사용 <em>1회</em>까지)
	대상의 공격력 <em>{values2}%</em> 증가 (<em>20</em>초간)
	(복제 카드는 대상의 EX 스킬 카드 상태를 따라감)
	(복제 카드의 코스트는 대상 EX 스킬의 기본 코스트에서 1만큼 감소한 값을 가짐) (최소 0)`,
		"values1":{
			"target":"friendly", "target_num":"1", "type":"quick_draw", "duration":0, "buff_type":"0",
			"condition":[],
			"stats":[],
		},
		"values2":{
			"target":"friendly", "target_num":"1", "type":"buff", "duration":20, "buff_type":"atk",
			"condition":[],
			"stats":[35.4, 38.1, 43.4, 46.1, 51.4],
		}
	}],"basic":[{
	"name":"유일한 진실",
	"desc":`<em>30초</em>마다 적 1인에게 방어력 <em>{values1}%</em> 감소 (<em>19초</em>간)
	공격력 <em>{values2}%</em> 대미지`,
	"content":`<em>30초</em>마다 적 1인에게 방어력 <em>{values1}%</em> 감소 (<em>19초</em>간)
	공격력 <em>{values2}%</em> 대미지`,
		"values1":{
			"target":"enemy", "target_num":"1", "type":"debuff", "duration":19, "cooltime":30, "buff_type":"def",
			"condition":[],
			"stats":[19.6, 19.6, 19.6, 21.5, 21.5, 21.5, 23.5, 23.5, 23.5, 25.5],
		},
		"values2":{
			"target":"enemy", "target_num":"1", "type":"damage", "duration":0, "cooltime":30, "buff_type":"",
			"condition":[],
			"stats":[185, 195, 204, 223, 232, 241, 260, 269, 278, 297]
		}
	}],"enhance":[{
	"name":"별을 쫓는 자",
	"content":`공격력 <em>{values1}%</em> 증가`,
		"values1":{
			"target":"friendly", "target_num":"self", "type":"buff", "duration":0, "cooltime":0, "buff_type":"atk",
			"condition":[],
			"stats":[14, 14.7, 15.4, 18.2, 18.9, 19.6, 22.4, 23.1, 23.8, 26.6]
		}
	}],"sub":[{
	"name":"아방가르드",
	"content":`아군의 공격력 <em>{values1}%</em> 증가`,
		"values1":{
			"target":"friendly", "target_num":"all", "type":"buff", "duration":0, "cooltime":0, "buff_type":"atk",
			"condition":[],
			"stats":[9.1, 9.5, 10, 11.8, 12.3, 12.7, 14.5, 15, 15.5, 17.3]
		}
	}]},
"signature":{
	"tier":{
	"t2":{"summary":"강화 스킬 <em>별을 쫓는 자</em>를 <em>별을 쫓는 자+</em>로 강화",
		"skill":{"idx":"enhance", "name":"별을 쫓는 자+",
			"content":`
				이로운 효과 유지력 <em>{values1}</em> 증가
				추가로 공격력 <em>{values2}%</em> 증가
			`,
			"values1":{
				"target":"friendly", "target_num":"self", "type":"buff", "duration":0, "cooltime":0, "buff_type":"buff_retention",
				"condition":[],
				"stats":[1000, 1050, 1100, 1300, 1350, 1400, 1600, 1650, 1700, 1900]
			},
			"values2":{
				"target":"friendly", "target_num":"self", "type":"buff", "duration":0, "cooltime":0, "buff_type":"atk",
				"condition":[],
				"stats":[14, 14.7, 15.4, 18.2, 18.9, 19.6, 22.4, 23.1, 23.8, 26.6]
			}}
		},
	"t3":{"summary":"실내 지형 전투력을 SS로 강화", 
		"field":"A/D/SS"
		},
	"t4":{"summary":"코스트 상한 +0.5",
		"status":["cost_max", 0.5]
		}
	}
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
	방어력 <em>{values2}%</em> 감소 (<em>40초</em>간)`,
		"values1":{
			"target":"enemy", "target_num":"1", "type":"taunt", "duration":40, "buff_type":"",
			"condition":[],
			"stats":[],
		},
		"values2":{
			"target":"enemy", "target_num":"1", "type":"debuff", "duration":40, "buff_type":"def",
			"condition":[],
			"stats":[21.3, 24.5, 30.9, 34.1, 40.5],
		}
	}],"basic":[{
	"name":"허점 발견!",
	"content":`<em>30초</em>마다 적 1인에게 공격력 <em>{values1}%</em> 대미지`,
		"values1":{
			"target":"enemy", "target_num":"1", "type":"damage", "duration":0, "cooltime":30, "buff_type":"",
			"condition":[],
			"stats":[399, 419, 439, 519, 539, 559, 638, 658, 678, 758],
		}
	}],"enhance":[{
	"name":"서기의 여유",
	"content":`최대 체력 <em>{values1}%</em> 증가`,
		"values1":{
			"target":"friendly", "target_num":"self", "type":"buff", "duration":0, "cooltime":0, "buff_type":"hp",
			"condition":[],
			"stats":[14, 14.7, 15.4, 18.2, 18.9, 19.6, 22.4, 23.1, 23.8, 26.6]
		}
	}],"sub":[{
	"name":"서기의 고집",
	"content":`기본 스킬 사용 시 해로운 효과 유지력 <em>{values1}%</em> 증가 (<em>13초</em>간)`,
		"values1":{
			"target":"friendly", "target_num":"self", "type":"buff", "duration":13, "cooltime":0, "buff_type":"debuff_retention",
			"condition":["기본 스킬 사용 시"],
			"stats":[16.9, 17.7, 18.6, 22, 22.8, 23.6, 27, 27.9, 28.7, 32.1]
		}
	}]},
"signature":{
	"name":"서기의 결단",
	"summary":`노아가 사용하는 컨버전 키트가 부착된 권총.
개머리판을 길게 늘여 견착하면 기관단총처럼 빠른 연사로 적을 제압할 수 있다.
`,
	"tier":{
	"t2":{"summary":"강화 스킬 <em>서기의 여유</em>를 <em>서기의 여유+</em>로 강화",
		"skill":{"idx":"enhance", "name":"서기의 여유+",
			"content":`
				공격력 <em>{values1}</em> 증가
				추가로 최대 체력 <em>{values2}%</em> 증가
			`,
			"values1":{
				"target":"friendly", "target_num":"self", "type":"buff", "duration":0, "cooltime":0, "buff_type":"atk",
				"condition":[],
				"stats":[130, 137, 143, 169, 175, 182, 208, 214, 221, 270]
			},
			"values2":{
				"target":"friendly", "target_num":"self", "type":"buff", "duration":0, "cooltime":0, "buff_type":"hp",
				"condition":[],
				"stats":[14, 14.7, 15.4, 18.2, 18.9, 19.6, 22.4, 23.1, 23.8, 26.6]
			}}
		},
	"t3":{"summary":"실내 지형 전투력을 SS로 강화", 
		"field":"D/B/SS"
		},
	"t4":{"summary":"신비 특효 10% 가산",
		"status":["mystic_effectiveness", 1000]
		}
	}
}, "uniqueItem":{
	"name":"",
	"summary":``
},
},{
"name":"하야세 유우카", "variant":"normal",
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
	"name":"Q.E.D", "cost":3,
	"content":"치유력 <em>{values1}%</em> 보호막 (<em>{values2}초</em>간)",
		"values1":{
			"target":"friendly", "target_num":"self", "type":"sheild", "duration":40, "buff_type":"",
			"condition":[],
			"stats":[190, 219, 220, 245, 248],
		},
		"values2":{
			"target":"friendly", "target_num":"self", "type":"duration", "duration":0, "buff_type":"",
			"condition":[],
			"stats":[15, 15, 20, 20, 20],
		}
	}],"basic":[{
	"name":"I.F.F",
	"content":"<em>15초</em>마다 적 1인에게 공격력 <em>{values1}%</em> 대미지",
		"values1":{
			"target":"enemy", "target_num":"1", "type":"damage", "duration":0, "cooltime":15, "buff_type":"",
			"condition":[""],
			"stats":[301, 317, 332, 392, 407, 422, 483, 498, 513, 573]
		}
	}],"enhance":[{
	"name":"최적해 도출",
	"content":"방어력 <em>{values1}%</em> 증가",
		"values1":{
			"target":"friendly", "target_num":"self", "type":"buff", "duration":0, "cooltime":0, "buff_type":"def",
			"condition":[],
			"stats":[14, 14.7, 15.4, 18.2, 18.9, 19.6, 22.4, 23.1, 23.8, 26.6]
		}
	}],"sub":[{
	"name":"고속 암산",
	"content":"엄폐 시 치유력 <em>{heal}%</em> 회복 (쿨타임 <em>10초</em>)",
		"values1":{
			"target":"friendly", "target_num":"self", "type":"heal", "duration":0, "cooltime":0, "buff_type":"",
			"condition":["엄폐 시"],
			"stats":[75, 78.7, 82.5, 97.5, 101, 105, 120, 123, 127, 142]
		}
	}]},
"signature":{
	"name":"로직 앤 리즌",
	"summary":`유우카가 사용하는 두 정의 기관단총.
		유우카가 합리적이고 이성적인 판단을 내릴 때 도움을 준다.
		`,
	"tier":{
	"t2":{"summary":"강화 스킬 <em>최적해 도출</em>를 <em>최적해 도출+</em>로 강화",
		"skill":{"idx":"enhance", "name":"최적해 도출+",
			"content":`
				엄폐 성공률 <em>{buff01}</em> 증가
				추가로 방어력 <em>{buff1}%</em> 증가
			`,
			"values1":{
				"target":"friendly", "target_num":"self", "type":"buff", "duration":0, "cooltime":0, "buff_type":"block_rate",
				"condition":[],
				"stats":[1000, 1050, 1100, 1300, 1350, 1400, 1600, 1650, 1700, 1900]
			},
			"values2":{
				"target":"friendly", "target_num":"self", "type":"buff", "duration":0, "cooltime":0, "buff_type":"def",
				"condition":[],
				"stats":[14, 14.7, 15.4, 18.2, 18.9, 19.6, 22.4, 23.1, 23.8, 26.6]
			}}
		},
	"t3":{"summary":"시가지 지형 전투력을 A로 강화", 
		"field":"A/B/A"
		},
	"t4":{"summary":"폭발 특효 10% 가산",
		"status":["explosion_effectiveness", 1000]
		}
	}
}, "uniqueItem":{
	"name":"함수 계산기",
	"summary":`유우카가 늘 몸에서 떼놓지 않는 함수 계산기.
	뛰어난 암산 실력을 보유하고 있음에도 불구하고, 유우카는 언제나 완벽을 추구하기 위해 검산용으로 계산기를 사용하고 있다.
	`,
	"tier":{
	"t1":"방어력 500 증가",
	"t2":
		{"summary":"기본 스킬 <em>IFF</em>을 <em>IFF+</em>로 강화",
		"skill":{"idx":"basic", "name":"IFF+",
			"content":`
				<em>15초</em>마다 적 1인에게 공격력 <em>{damage}%</em> 대미지
				자신의 회피 수치 <em>{buff}%</em> 증가 (<em>10초</em>간)
				`,
			"values1":{
				"target":"enemy", "target_num":"1", "type":"damage", "duration":0, "cooltime":15, "buff_type":"",
				"condition":[""],
				"stats":[329, 345, 362, 428, 444, 461, 527, 543, 560, 625]
			},
			"values2":{
				"target":"friendly", "target_num":"self", "type":"buff", "duration":10, "cooltime":15, "buff_type":"evation",
				"condition":[],
				"stats":[26, 26, 26, 28.6, 28.6, 28.6, 31.2, 31.2, 31.2, 33.8]
			}
		}}
	}
},
}
]
