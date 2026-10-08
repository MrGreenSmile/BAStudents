let students = [
{"name":"츠카츠키 리오", "variant":"normal", "release":"2025.07.15",
"role":"서포터", "position":"SPECIAL","atk_type":"신비", "dfn_type":"탄력장갑", "field":"A/D/S", "fes":true,
"weapon":"HG", "equipments":["신발", "헤어핀", "손목시계"], "matterials":["디스코 콜간테", "수정 하니와"],
"signature":{
	"name":"입안자",
	"summary":`리오의 호신용 권총.
사격에 서툰 리오지만, 키보토스에서 총이 없다는 것은 비합리적이라는 이유로 소지중이다.
`,
	"brk_thr":{
		"t2":{"summary":"강화 스킬 <em>별을 쫓는 자</em>를 <em>별을 쫓는 자+</em>로 강화",
			"skill":{"idx":"enhance", "name":"별을 쫓는 자+",
				"content":`
					이로운 효과 유지력 <em>{buff01}</em> 증가
					추가로 공격력 <em>{buff1}%</em> 증가
				`,
				"values":{
					"buff01":{"min":"1000", "max":"1900"},
					"buff1":{"min":"14", "max":"26.6"}
				}
			}},
		"t3":{"summary":"실내 지형 전투력을 SS로 강화", 
			"field":"A/D/SS"
			},
		"t4":{"summary":"코스트 상한 +0.5"}
	},
},
"uniqueItem":{
	"name":"",
	"summary":``
},
"skills":{
	"ex":[{
	"name":"빅 시스터", "cost":2,
	"content":`EX 스킬 즉시 드로우 후 아군 1인의 EX 스킬 카드 복제 (복제 카드 사용 <em>1회</em>까지)
	대상의 공격력 <em>{buff}%</em> 증가 (<em>20</em>초간)
	(복제 카드는 대상의 EX 스킬 카드 상태를 따라감)
	(복제 카드의 코스트는 대상 EX 스킬의 기본 코스트에서 1만큼 감소한 값을 가짐) (최소 0)`,
		"values":{
			"buff":{"min":"35.4", "max":"51.4"}
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
	"tags":["퀵드로우", "공격력 증가"],
},{
"name":"우시오 노아", "variant":"normal", "release":"2023.03.28",
"role":"서포터", "position":"MIDDLE","atk_type":"신비", "dfn_type":"특수장갑", "field":"D/B/S", "fes":false,
"weapon":"HG", "equipments":["신발", "헤어핀", "부적"], "matterials":["파에스토스 원반", "에테르"],
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
					"buff01":{"min":"130", "max":"270"},
					"buff1":{"min":"14", "max":"26.6"}
				}
			}},
		"t3":{"summary":"실내 지형 전투력을 SS로 강화", 
			"field":"D/B/SS"
			},
		"t4":{"summary":"신비 특효 10% 가산"}
	},
},
"uniqueItem":{"name":"",
"summary":``
},
"skills":{
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
	"tags":["집중공격", "고즈", "예소드"],
},{
"name":"하야세 유우카", "variant":"normal", "release":"2021.11.09",
"role":"탱커", "position":"FRONT","atk_type":"폭발", "dfn_type":"중장갑", "field":"B/B/A", "fes":false,
"weapon":"SMG", "equipments":["신발", "배지", "부적"], "matterials":["님루드 렌즈", "안티키테라 장치"],
"signature":{
	"name":"로직 앤 리즌",
	"summary":`유우카가 사용하는 두 정의 기관단총.
유우카가 합리적이고 이성적인 판단을 내릴 때 도움을 준다.
`,
	"brk_thr":{
		"t2":{"summary":"강화 스킬 <em>최적해 도출</em>를 <em>최적해 도출+</em>로 강화",
			"skill":{"idx":"enhance", "name":"최적해 도출+",
				"content":`
					엄폐 성공률 <em>{buff01}</em> 증가
					추가로 방어력 <em>{buff1}%</em> 증가
				`,
				"values":{
					"buff01":{"min":"1000", "max":"1900"},
					"buff1":{"min":"14", "max":"26.6"}
				}
			}},
		"t3":{"summary":"시가지 지형 전투력을 A로 강화", 
			"field":"A/B/A"
			},
		"t4":{"summary":"폭발 특효 10% 가산"}
	},
},
"uniqueItem":{"name":"함수 계산기",
"summary":`유우카가 늘 몸에서 떼놓지 않는 함수 계산기.
뛰어난 암산 실력을 보유하고 있음에도 불구하고, 유우카는 언제나 완벽을 추구하기 위해 검산용으로 계산기를 사용하고 있다.
`,
	"tier":{
		"t1":"방어력 500 증가",
		"t2":{"summary":"기본 스킬 <em>IFF</em>을 <em>IFF+</em>로 강화",
			"skill":{"idx":"basic", "name":"IFF+",
				"content":`
					<em>15초</em>마다 적 1인에게 공격력 <em>{damage}%</em> 대미지
					자신의 회피 수치 <em>{buff}%</em> 증가 (<em>10초</em>간)
					`,
				"values":{
					"damage":{"min":"329", "max":"625"},
					"buff":{"min":"26", "max":"33.8"}
				}
			}
	}	}
},
"skills":{
	"ex":[{
	"name":"Q.E.D", "cost":3,
	"content":"치유력 <em>{shield}%</em> 보호막 (<em>{duration}초</em>간)",
		"values":{
			"shield":{"min":"190", "max":"248"},
			"duration":{"min":"15", "max":"25"}
		}
	}],"basic":[{
	"name":"I.F.F",
	"content":"<em>15초</em>마다 적 1인에게 공격력 <em>{damage}%</em> 대미지",
		"values":{
			"damage":{"min":"301", "max":"573"}
		}
	}],"enhance":[{
	"name":"최적해 도출",
	"content":"방어력 <em>{buff}%</em> 증가",
		"values":{
			"buff":{"min":"14", "max":"26.6"}
		}
	}],"sub":[{
	"name":"고속 암산",
	"content":"엄폐 시 치유력 <em>{heal}%</em> 회복 (쿨타임 <em>10초</em>)",
		"values":{
			"heal":{"min":"75", "max":"142"}
		}
	}]},
	"tags":["탱커", "회피탱", "보호막"],
},{
"name":"쿠로사키 코유키", "variant":"normal", "release":"2023.09.05",
"role":"딜러", "position":"BACK","atk_type":"신비", "dfn_type":"중장갑", "field":"S/D/B", "fes":false,
"weapon":"MG", "equipments":["장갑", "헤어핀", "손목시계"], "matterials":["보이니치 사본", "수정 하니와"],
"signature":{
	"name":"멀리<건>",
	"summary":`코유키가 당해온 온갖 수모를 함께 겪은 기관총.
바닷물에 빠진 적도 있어, 수리하는 과정에서 색이 바뀌었다. 성능과는 별개로, 사소한 것은 신경쓰지 않는 코유키를 닮아 튼튼하다.
`,
	"brk_thr":{
		"t2":{"summary":"강화 스킬 <em>기적을 믿나요?</em>를 <em>기적을 믿나요?+</em>로 강화",
			"skill":{"idx":"enhance", "name":"기적을 믿나요?+",
				"content":`
					공격력 <em>{buff01}</em> 증가
					추가로 공격력 <em>{buff1}%</em> 증가
				`,
				"values":{
					"buff01":{"min":"417", "max":"792"},
					"buff1":{"min":"14", "max":"26.6"}
				}
			}},
		"t3":{"summary":"시가지 지형 전투력을 SS로 강화", 
			"field":"SS/D/B"
			},
		"t4":{"summary":"신비 특효 10% 가산"}
	},
},
"uniqueItem":{"name":"승부 동전",
"summary":`코유키가 손수 구멍을 뚫은 동전.
오락기를 공짜로 쓰기 위한 용도였지만, 보안 기술의 발전으로 인해 현재는 무용지물이 되었다.
`,
	"tier":{
		"t1":"공격력 500 증가",
		"t2":{"summary":"기본 스킬 <em>하나? 혹은 둘!</em>을 <em>하나? 혹은 둘!+</em>로 강화",
			"skill":{"idx":"basic", "name":"하나? 혹은 둘!+",
				"content":`
					<em>30초</em>마다 적 1인에게 공격력 <em>{damage}%</em> 대미지
					대상 주변에 적이 있을 경우 최대 <em>3인</em>에게 동일한 대미지
					즉시 재장전
					기본 스킬로 적 6명 누적 처치 시 자신의 EX 스킬 코스트 <em>3</em> 감소 (EX 스킬 사용 <em>1회</em>까지)
					`,
				"values":{
					"damage":{"min":"243", "max":"463"},
					"buff":{"min":"26", "max":"33.8"}
				}
			}
	}	}
},
"skills":{
	"ex":[{
	"name":"뜻 밖의 변수", "cost":4,
	"content":`원형 범위 내의 적에게 무작위 폭탄 1개를 투척하여 대미지
		총탄: 공격력 <em>{bullet}%</em> 대미지
		전기장: 공격력 <em>{electric}%</em> 대미지
		화염: 공격력 <em>{flame}%</em> 대미지`,
		"values":{
			"bullet":{"min":"233", "max":"444"},
			"electric":{"min":"221", "max":"421"},
			"flame":{"min":"209", "max":"398"},
		}
	}],"basic":[{
	"name":"하나? 혹은 둘!",
	"content":`<em>30초</em>마다 적 1인에게 공격력 <em>{damage}%</em> 대미지
		대상 주변에 적이 있을 경우 최대 <em>2인</em>에게 동일한 대미지
		즉시 재장전`,
		"values":{
			"damage":{"min":"202", "max":"385"},
		}
	}],"enhance":[{
	"name":"기적을 믿나요?",
	"content":`공격력 <em>{buff}%</em> 증가`,
		"values":{
			"buff":{"min":"14", "max":"26.6"},
		}
	}],"sub":[{
	"name":"나비효과",
	"content":`EX 스킬 발동과 동시에 사용한 폭탄의 종류에 따라 공격력 증가 (<em>40초</em>간)
		총탄: 공격력 <em>{bullet}%</em> 증가
		전기장: 공격력 <em>{electric}%</em> 증가
		화염: 공격력 <em>{flame}%</em> 증가`,
		"values":{
			"bullet":{"min":"15.3", "max":"29.1"},
			"electric":{"min":"14.5", "max":"27.5"},
			"flame":{"min":"13.7", "max":"26"},
		}
	}]},
	"tags":["범위딜", "연타"],
},{
"name":"하야세 유우카", "variant":"gym", "release":"2023.04.26",
"role":"탱커", "position":"FRONT","atk_type":"신비", "dfn_type":"특수장갑", "field":"B/D/S", "fes":false,
"weapon":"SMG", "equipments":["신발", "가방", "목걸이"], "matterials":["님루드 렌즈", "위니페소키 스톤"],
"signature":{
	"name":"로직 앤 리즌",
	"summary":`유우카가 사용하는 두 정의 기관단총.
이번 황륜대제에서도 로직 앤 리즌은 유우카의 합리적이고 이성적인 판단을 대변한다.
`,
	"brk_thr":{
		"t2":{"summary":"강화 스킬 <em>수학적 경기전략</em>를 <em>수학적 경기전략+</em>로 강화",
			"skill":{"idx":"enhance", "name":"수학적 경기전략+",
				"content":`
					치유력 <em>{buff01}</em> 증가
					추가로 공격 속도 <em>{buff1}%</em> 증가
				`,
				"values":{
					"buff01":{"min":"606", "max":"1150"},
					"buff1":{"min":"14", "max":"26.6"}
				}
			}},
		"t3":{"summary":"실내 지형 전투력을 SS로 강화", 
			"field":"B/D/SS"
			},
		"t4":{"summary":"신비 특효 10% 가산"}
	},
},
"uniqueItem":{"name":"",
"summary":`
`},
"skills":{
	"ex":[{
	"name":"R.S.G!", "cost":3,
	"content":`지정한 위치로 이동 후 치유력 <em>{shield}%</em> 보호막 (<em>25초</em>간)
		깃발을 소환하여 자신을 제외한 아군 3인을 깃발 위치로 이동시키고, 깃발에 도착한 대상에게 치유력 <em>{shield}%</em> 보호막 (<em>25초</em>간)`,
		"values":{
			"shield":{"min":"168", "max":"320"},
		}
	}],"basic":[{
	"name":"수분 보충",
	"content":`
		<em>30초</em>마다 자신에게 보호막이 없을 경우 치유력 <em>{shield}%</em> 보호막 (<em>23초</em>간)
		보호막이 있을 경우 치유력 <em>{buff}%</em> 증가 (<em>90초</em>간)
		(치유력 증가 효과는 최대 <em>3회</em> 중첩)`,
		"values":{
			"shield":{"min":"115", "max":"220"},
			"buff":{"min":"12.3", "max":"23.4"},
		}
	}],"enhance":[{
	"name":"수학적 경기전략",
	"content":`공격 속도 <em>{buff}%</em> 증가`,
		"values":{
			"buff":{"min":"14", "max":"26.6"},
		}
	}],"sub":[{
	"name":"최적 동선 산출",
	"content":`이동 후 정지하면 신비 특효 <em>{buff}%</em> 가산 (<em>20초</em>간)`,
		"values":{
			"buff":{"min":"31.1", "max":"59.1"},
		}
	}]},
	"tags":["탱커", "아군 이동"],
},{
"name":"하야세 유우카", "variant":"pajamas", "release":"2025.06.10",
"role":"탱커", "position":"FRONT","atk_type":"폭발", "dfn_type":"중장갑", "field":"D/S/B", "fes":false,
"weapon":"SMG", "equipments":["신발", "가방", "목걸이"], "matterials":["님루드 렌즈", "고대 전지"],
"signature":{
	"name":"로직 앤 리즌",
	"summary":`유우카가 사용하는 두 정의 기관단총.
그녀의 합리와 이성을 증명해 온 두 자루의 총기도 만성적인 불면증만큼은 쫓을 수가 없었다.
`,
	"brk_thr":{
		"t2":{"summary":"강화 스킬 <em>달콤한 속잠</em>를 <em>달콤한 속잠+</em>로 강화",
			"skill":{"idx":"enhance", "name":"달콤한 속잠+",
				"content":`
					해로운 효과 유지력 <em>{buff01}</em> 증가
					추가로 최대 체력 <em>{buff1}%</em> 증가
				`,
				"values":{
					"buff01":{"min":"1000", "max":"1900"},
					"buff1":{"min":"14", "max":"26.6"}
				}
			}},
		"t3":{"summary":"야외 지형 전투력을 SS로 강화", 
			"field":"D/SS/B"
			},
		"t4":{"summary":"폭발 특효 10% 가산"}
	},
},
"uniqueItem":{"name":"",
"summary":`
`},
"skills":{
	"ex":[{
	"name":"위기일발 페로로 님", "cost":2,
	"content":`적 1인에게 공격력 <em>{damage}%</em> 대미지
		방어력 <em>{debuff_def}%</em> 감소 (<em>25초</em>간)
		대상이 경장갑인 경우 방어력 <em>{debuff_light}%</em> 감소 (<em>25초</em>간)`,
		"values":{
			"damage":{"min":"467", "max":"887"},
			"debuff_def":{"min":"16.1", "max":"23.3"},
			"debuff_light":{"min":"32.2", "max":"46.7"},
		}
	}],"basic":[{
	"name":"숙면을 위한 케어",
	"content":`<em>30초</em>마다 치유력 <em>{heal}%</em> 회복`,
		"values":{
			"heal":{"min":"72", "max":"115"},
		}
	}],"enhance":[{
	"name":"달콤한 속잠",
	"content":`최대 체력 <em>{buff}%</em> 증가`,
		"values":{
			"buff":{"min":"14", "max":"26.6"},
		}
	}],"sub":[{
	"name":"휴식 뒤의 나른함",
	"content":`회복 효과를 받을 때마다 방어력 <em>{buff}%</em> 증가 (<em>30초</em>간) (최대 7회까지 중첩)`,
		"values":{
			"buff":{"min":"3.6", "max":"6.7"},
		}
	}]},
	"tags":["탱커", "경장갑 방감"],
},{
"name":"우시오 노아", "variant":"pajamas", "release":"2025.06.10",
"role":"딜러", "position":"MIDDLE","atk_type":"관통", "dfn_type":"경장갑", "field":"B/S/D", "fes":false,
"weapon":"HG", "equipments":["장갑", "헤어핀", "손목시계"], "matterials":["머리가 자라는 인형", "파에스토스 원반"],
"signature":{
	"name":"서기의 결단",
	"summary":`노아가 사용하는 컨버전 키트가 부착된 권총.
문진으로도 사용할 수 있는 적당한 무게의 이 권총은 노아가 사랑하는 심야의 독서에 곁들이기에 걸맞다.
`,
	"brk_thr":{
		"t2":{"summary":"강화 스킬 <em>서기의 냉철함</em>를 <em>서기의 냉철함+</em>로 강화",
			"skill":{"idx":"enhance", "name":"서기의 냉철함+",
				"content":`
					공격력 <em>{buff01}</em> 증가
					추가로 공격력 <em>{buff1}%</em> 증가
				`,
				"values":{
					"buff01":{"min":"190", "max":"361"},
					"buff1":{"min":"14", "max":"26.6"}
				}
			}},
		"t3":{"summary":"야외 지형 전투력을 SS로 강화", 
			"field":"B/SS/D"
			},
		"t4":{"summary":"관통 특효 10% 가산"}
	},
},
"uniqueItem":{"name":"",
"summary":`
`},
"skills":{
	"ex":[{
	"name":"소등 후에는 조용히", "cost":5,
	"content":`적 1인에게 공격력 <em>{damage}%</em> 대미지
		추가로 약점 파악 효과 적용 (<em>20초</em>간)
		대상은 효과가 걸려있는 상태에서 피격 당할 때마다 노아(파자마)의 공격력의 <em>{additional_damage}%</em> 추가 대미지 (이 대미지는 치명 공격이 발동하지 않음)
		(최대 <em>240회</em>까지 적용)`,
		"values":{
			"damage":{"min":"759", "max":"1442"},
			"additional_damage":{"min":"17.6", "max":"33.4"},
		}
	},{
	"name":"쉿, 소등합니다.", "cost":3,
	"content":`적 1인에게 공격력 <em>{damage}%</em> 대미지
		추가로 약점 파악 효과 적용 (<em>20초</em>간)
		대상은 효과가 걸려있는 상태에서 피격 당할 때마다 노아(파자마) 공격력의 <em>{additional_damage}%</em> 추가 대미지 (이 대미지는 치명 공격이 발동하지 않음)
		(최대 <em>240회</em>까지 적용)`,
		"values":{
			"damage":{"min":"886", "max":"1683"},
			"additional_damage":{"min":"20.5", "max":"39"},
		}
	}],"basic":[{
	"name":"애착 베개",
	"content":`소등 후에는 조용히 <em>2회</em> 사용 시 코스트 회복력 <em>{cost}</em> 만큼 증가 (<em>30초</em>간)
		소등 후에는 조용히를 쉿, 소등합니다.로 변경 (EX 사용 1회까지)`,
		"values":{
			"cost":{"min":"423", "max":"803"},
		}
	}],"enhance":[{
	"name":"서기의 냉철함",
	"content":`공격력 <em>{buff}%</em> 증가`,
		"values":{
			"buff":{"min":"14", "max":"26.6"},
		}
	}],"sub":[{
	"name":"서기의 예리함",
	"content":`일반 공격 <em>10회</em>마다 관통 특효 <em>{buff}</em> 가산 (<em>10초</em>간)`,
		"values":{
			"buff":{"min":"46.8", "max":"88.9"},
		}
	}]},
	"tags":["메인딜", "누적대미지", "호버크래프트 2페"],
},{
"name":"쿠로사키 코유키", "variant":"pajamas", "release":"2026.07.14",
"role":"서포터", "position":"BACK","atk_type":"신비", "dfn_type":"경장갑", "field":"S/D/B", "fes":false,
"weapon":"MG", "equipments":["신발", "배지", "손목시계"], "matterials":["고대 전지", "만드라고라"],
"signature":{
	"name":"멀리<건>",
	"summary":`코유키와 함께 각종 수난을 헤쳐 온 기관총.
온갖 말썽을 터뜨리는 주인과 달리, 묵묵히 옆자리를 보좌하는 듬직함을 자랑한다. .......그냥 단순히 별생각이 없는 것일 수도 있지만.
`,
	"brk_thr":{
		"t2":{"summary":"강화 스킬 <em>밤샘의 미학</em>를 <em>밤샘의 미학+</em>로 강화",
			"skill":{"idx":"enhance", "name":"밤샘의 미학+",
				"content":`
					치명 대미지 <em>{buff01}</em> 증가
					추가로 공격력 <em>{buff1}%</em> 증가
				`,
				"values":{
					"buff01":{"min":"2000", "max":"3800"},
					"buff1":{"min":"14", "max":"26.6"}
				}
			}},
		"t3":{"summary":"시가지 지형 전투력을 SS로 강화", 
			"field":"SS/D/B"
			},
		"t4":{"summary":"코스트 상한 +0.5"}
	},
},
"uniqueItem":{"name":"",
"summary":`
`},
"skills":{
	"ex":[{
	"name":"이럴줄은 몰랐다구요!", "cost":3,
	"content":`아군 1인의 해로운 효과 1개 제거
		스트라이커 아군에게 치명 대미지 <em>{buff}%</em> 증가 (<em>30초</em>간)
		이번 스킬로 해로운 효과를 제거한 경우, 이 스킬의 치명 대미지 증가 효과 3배로 증가`,
		"values":{
			"buff":{"min":"8.1", "max":"15.4"},
		}
	}],"basic":[{
	"name":"와장창 혹은 우당탕",
	"content":`<em>40초</em>마다 부채꼴범위 내의 적에게 공격력 <em>{damage}%</em> 대미지
		초대형 대상에게 공격력 <em>{additional_damage}%</em> 추가 대미지`,
		"values":{
			"damage":{"min":"234", "max":"444"},
			"additional_damage":{"min":"93.6", "max":"177"},
		}
	}],"enhance":[{
	"name":"밤샘의 미학",
	"content":`공격력 <em>{buff}%</em> 증가`,
		"values":{
			"buff":{"min":"14", "max":"26.6"},
		}
	}],"sub":[{
	"name":"파자마 효과",
	"content":`아군의 이동속도 <em>{buff}%</em> 증가`,
		"values":{
			"buff":{"min":"9.1", "max":"17.3"},
		}
	}]},
	"tags":["시로&쿠로", "디버프 해제", "이속 버프"],
},{
"name":"스나오오카미 시로코", "variant":"normal", "release":"2021.11.09",
"role":"딜러", "position":"MIDDLE","atk_type":"폭발", "dfn_type":"경장갑", "field":"S/B/D", "fes":false,
"weapon":"AR", "equipments":["모자", "헤어핀", "손목시계"], "matterials":["파에스토스 원반", "보이니치 사본"],
"signature":{
	"name":"WHITE FANG 465",
	"summary":`시로코가 애용하는 돌격소총.
늘 꼼꼼하게 정비해 두기 때문에 어떤 상황에서도 준비 만전이다.
`,
	"brk_thr":{
		"t2":{"summary":"강화 스킬 <em>약점 노리기</em>를 <em>약점 노리기+</em>로 강화",
			"skill":{"idx":"enhance", "name":"약점 노리기+",
				"content":`
					치명 수치 <em>{buff01}</em> 증가
					추가로 치명 수치 <em>{buff1}%</em> 증가
				`,
				"values":{
					"buff01":{"min":"100", "max":"190"},
					"buff1":{"min":"14", "max":"26.6"}
				}
			}},
		"t3":{"summary":"시가지 지형 전투력을 SS로 강화", 
			"field":"SS/B/D"
			},
		"t4":{"summary":"폭발 특효 10% 가산"}
	},
},
"uniqueItem":{"name":"시로코의 드론",
"summary":`시로코가 늘 휴대하고 다니는 드론.
시로코 본인은 운동할 때 쓰는 촬영용 드론이라고 주장하지만, 촬영과 상관없는 여러 '부가 장치'가 장착되어 있다.
`,
	"tier":{
		"t1":"치명 대미지 500 증가",
		"t2":{"summary":"기본 스킬 <em>수류탄 투척</em>을 <em>수류탄 투척+</em>으로 강화",
			"skill":{"idx":"basic", "name":"수류탄 투척+",
				"content":`
					<em>25초</em>마다 원형 범위 내의 적에게 공격력 <em>{damage}%</em> 대미지
					`,
				"values":{
					"damage":{"min":"290", "max":"551"}
				}
			}
	}	}
},
"skills":{
	"ex":[{
	"name":"드론 소환 : 화력 지원", "cost":2,
	"content":`적 1인에게 공격력 <em>{damage}%</em> 대미지`,
		"values":{
			"damage":{"min":"400", "max":"760"},
		}
	}],"basic":[{
	"name":"수류탄 투척",
	"content":`<em>25초</em>마다 원형 범위 내의 적에게 공격력 <em>{damage}%</em> 대미지`,
		"values":{
			"damage":{"min":"193", "max":"368"},
		}
	}],"enhance":[{
	"name":"약점 노리기",
	"content":`치명 수치 <em>{buff}%</em> 증가`,
		"values":{
			"buff":{"min":"14", "max":"26.6"},
		}
	}],"sub":[{
	"name":"고속 연사",
	"content":`일반 공격 시 <em>20%</em> 확률로 공격속도 <em>{buff}%</em> 증가. (<em>30초</em>간) (쿨타임 <em>25초</em>)`,
		"values":{
			"buff":{"min":"30.2", "max":"57.4"},
		}
	}]},
	"tags":["연타", "타켓전환"],
},{
"name":"타카나시 호시노", "variant":"normal", "release":"2021.11.09",
"role":"딜러", "position":"FRONT","atk_type":"관통", "dfn_type":"중장갑", "field":"D/S/B", "fes":false,
"weapon":"SG", "equipments":["신발", "가방", "부적"], "matterials":["네브라 디스크", "님루드 렌즈"],
"signature":{
	"name":"호루스의 눈+진압 방패 '아이언 호루스'",
	"summary":`호시노가 애용하는 심플한 디자인의 산탄총.
게으름 부리길 좋아하는 호시노이지만 총기의 상태만큼은 언제나 완벽하다.
`,
	"brk_thr":{
		"t2":{"summary":"강화 스킬 <em>대책위원회의 부장</em>를 <em>대책위원회의 부장+</em>로 강화",
			"skill":{"idx":"enhance", "name":"대책위원회의 부장+",
				"content":`
					방어력 <em>{buff01}</em> 증가
					추가로 방어력 <em>{buff1}%</em> 증가
				`,
				"values":{
					"buff01":{"min":"200", "max":"380"},
					"buff1":{"min":"14", "max":"26.6"}
				}
			}},
		"t3":{"summary":"야외 지형 전투력을 SS로 강화", 
			"field":"D/SS/B"
			},
		"t4":{"summary":"관통 특효 10% 가산"}
	},
},
"uniqueItem":{"name":"어디서든 입장권",
"summary":`호시노가 "어디서든 꿈나라로 입장할 수 있다"라고 주장하는 베개.
호시노의 말대로 굉장히 부드럽고 푹신하지만, 지금은 같은 제품을 구할 수 없다고 한다.
`,
	"tier":{
		"t1":"치명 대미지 저항률 2000 증가",
		"t2":{"summary":"기본 스킬 <em>응급 치료</em>을 <em>응급 치료+</em>으로 강화",
			"skill":{"idx":"basic", "name":"응급 치료+",
				"content":`
					체력 <em>30%</em> 이하 시 치유력 <em>{heal}%</em> 지속 회복, 치명 대미지 저항률 <em>{buff}</em> 가산 (<em>20초</em>간) (전투 당 <em>2회</em>)
					`,
				"values":{
					"heal":{"min":"137", "max":"260"},
					"buff":{"min":"15.79", "max":"30"}
				}
			}
	}	}
},
"skills":{
	"ex":[{
	"name":"전술 진압", "cost":4,
	"content":`부채꼴 범위 내의 적에게 공격력 <em>{damage}%</em> 대미지
		{additional_effect}
		`,
		"values":{
			"damage":{"min":"435", "max":"697"},
			"additional_effect":{"min":"", "max":"기절 (<em>1.4초</em>간)"}
		}
	}],"basic":[{
	"name":"응급 치료",
	"content":`체력 <em>30%</em> 이하 시 치유력 <em>{heal}%</em> 지속 회복 (<em>20초</em>간) (전투 당 <em>1회</em>)`,
		"values":{
			"heal":{"min":"100", "max":"191"}
		}
	}],"enhance":[{
	"name":"대책 위원회의 부장",
	"content":`방어력 <em>{buff}%</em> 증가`,
		"values":{
			"buff":{"min":"14", "max":"26.6"}
		}
	}],"sub":[{
	"name":"진압 숙련",
	"content":`EX 스킬 사용 중 치유력 <em>{shield}%</em> 보호막`,
		"values":{
			"shield":{"min":"108", "max":"205"}
		}
	}]},
	"tags":["기절", "서브딜", "탱커"],
},{
"name":"쿠로미 세리카", "variant":"normal", "release":"2021.11.09",
"role":"딜러", "position":"MIDDLE","atk_type":"폭발", "dfn_type":"경장갑", "field":"A/D/A", "fes":false,
"weapon":"SG", "equipments":["신발", "가방", "부적"], "matterials":["파에스토스 원반", "에테르"],
"signature":{
	"name":"신시어리티",
	"summary":`세리카가 아르바이트를 나갈 때 늘 휴대하는 돌격소총.
세리카의 성실함을 증명하듯 언제나 깨끗이 정비되어 있다.
`,
	"brk_thr":{
		"t2":{"summary":"강화 스킬 <em>알바생의 근성</em>를 <em>알바생의 근성+</em>로 강화",
			"skill":{"idx":"enhance", "name":"알바생의 근성+",
				"content":`
					공격력 <em>{buff01}</em> 증가
					추가로 방어력 <em>{buff1}%</em> 증가
				`,
				"values":{
					"buff01":{"min":"339", "max":"643"},
					"buff1":{"min":"14", "max":"26.6"}
				}
			}},
		"t3":{"summary":"야외 지형 전투력을 B로 강화", 
			"field":"A/B/A"
			},
		"t4":{"summary":"폭발 특효 10% 가산"}
	},
},
"uniqueItem":{"name":"세리카의 스포츠 백",
"summary":`세리카의 검은색 스포츠 백.
공부용, 아르바이트용, 운동용, 정비용... 뭐든 집어넣고 꺼낼 수 있는 만능 가방이다.
`,
	"tier":{
		"t1":"공격 속도 500 증가, 공격력 500 증가",
		"t2":{"summary":"기본 스킬 <em>조준 사격</em>을 <em>조준 사격+</em>으로 강화",
			"skill":{"idx":"basic", "name":"조준 사격+",
				"content":`
					<em>25초</em>마다 적 1인에게 공격력 <em>{damage}%</em> 대미지
					`,
				"values":{
					"damage":{"min":"335", "max":"638"}
				}
			}
	}	}
},
"skills":{
	"ex":[{
	"name":"걸리적거리잖아!", "cost":2,
	"content":`즉시 재장전
		공격력 <em>{buff}%</em> 증가 (<em>30초</em>간)`,
		"values":{
			"buff":{"min":"35.6", "max":"67.7"}
		}
	}],"basic":[{
	"name":"조준 사격",
	"content":`<em>25초</em>마다 적 1인에게 공격력 <em>{damage}%</em> 대미지`,
		"values":{
			"damage":{"min":"223", "max":"425"}
		}
	}],"enhance":[{
	"name":"알바생의 근성",
	"content":`공격력 <em>{buff}%</em> 증가`,
		"values":{
			"buff":{"min":"14", "max":"26.6"}
		}
	}],"sub":[{
	"name":"대책위의 분노",
	"content":`EX 스킬 사용 시 공격속도 <em>{buff}%</em> 증가 (<em>30초</em>간)`,
		"values":{
			"buff":{"min":"20.1", "max":"38.3"}
		}
	}]},
	"tags":["평타딜", "카이텐져", "서브딜", "공속"],
},{
"name":"이자요이 노노미", "variant":"normal", "release":"2021.11.09",
"role":"딜러", "position":"BACK","atk_type":"관통", "dfn_type":"경장갑", "field":"A/A/D", "fes":false,
"weapon":"MG", "equipments":["모자", "헤어핀", "손목시계"], "matterials":["네브라 디스크", "에테르"],
"signature":{
	"name":"미니 No.5",
	"summary":`노노미가 사용하는 기관총.
<미니 No.5>라는 이름과 어울리지 않게 그 무게는 절대 가볍지 않다.
`,
	"brk_thr":{
		"t2":{"summary":"강화 스킬 <em>떽~이에요!</em>를 <em>떽~이에요!+</em>로 강화",
			"skill":{"idx":"enhance", "name":"떽~이에요!+",
				"content":`
					치명 대미지 <em>{buff01}</em> 증가
					추가로 치명 대미지 <em>{buff1}%</em> 증가
				`,
				"values":{
					"buff01":{"min":"2000", "max":"3800"},
					"buff1":{"min":"14", "max":"26.6"}
				}
			}},
		"t3":{"summary":"실내 지형 전투력을 B로 강화", 
			"field":"A/A/B"
			},
		"t4":{"summary":"관통 특효 10% 가산"}
	},
},
"uniqueItem":{"name":"비밀 버킷 리스트",
"summary":`노노미가 남몰래 작성 중인 노트.
언젠가 대책위원회의 멤버들과 함께 하고 싶은 일들이 적혀 있다.
`,
	"tier":{
		"t1":"공격력 500 증가, 명중 수치 500 증가",
		"t2":{"summary":"기본 스킬 <em>짜안~☆</em>을 <em>짜안~☆+</em>으로 강화",
			"skill":{"idx":"basic", "name":"짜안~☆+",
				"content":`
					<em>30초</em>마다 공격력 <em>{buff1}%</em>, 명중 수치 <em>{buff2}</em> 증가 (<em>20초</em>간)
					`,
				"values":{
					"buff1":{"min":"22.3", "max":"42.4"},
					"buff2":{"min":"19.3", "max":"36.7"}
				}
			}
	}	}
},
"skills":{
	"ex":[{
	"name":"혼날 시간이에요~♣", "cost":5,
	"content":`부채꼴 범위 내의 적에게 공격력 <em>{damage}%</em> 대미지`,
		"values":{
			"damage":{"min":"432", "max":"821"}
		}
	}],"basic":[{
	"name":"짜안~☆",
	"content":`<em>30초</em>마다 공격력 <em>{buff}%</em> 증가 (<em>20초</em>간)`,
		"values":{
			"buff":{"min":"21.8", "max":"41.4"}
		}
	}],"enhance":[{
	"name":"떽~이에요!",
	"content":`치명 대미지 <em>{buff}%</em> 증가`,
		"values":{
			"buff":{"min":"14", "max":"26.6"}
		}
	}],"sub":[{
	"name":"깨끗하게 청소해요~♧",
	"content":`공격 시 대형 대상에게 공격력 <em>{buff}%</em> 추가 대미지`,
		"values":{
			"buff":{"min":"6.7", "max":"12.8"}
		}
	}]},
	"tags":["범위딜", "스테이지"],
},{
"name":"오쿠소라 아야네", "variant":"normal", "release":"2021.11.09",
"role":"힐러", "position":"SPECIAL","atk_type":"관통", "dfn_type":"경장갑", "field":"D/A/A", "fes":false,
"weapon":"HG", "equipments":["신발", "헤어핀", "목걸이"], "matterials":["네브라 디스크", "볼프세크 강철"],
"signature":{
	"name":"상식적 수단",
	"summary":`귀여운 디자인의 권총.
아야네 앞에서 상식적인 말과 행동만 한다면 볼 일은 거의 없다.
`,
	"brk_thr":{
		"t2":{"summary":"강화 스킬 <em>자기계발</em>를 <em>자기계발+</em>로 강화",
			"skill":{"idx":"enhance", "name":"자기계발+",
				"content":`
					치유력 <em>{buff01}</em> 증가
					추가로 치유력 <em>{buff1}%</em> 증가
				`,
				"values":{
					"buff01":{"min":"942", "max":"1790"},
					"buff1":{"min":"14", "max":"26.6"}
				}
			}},
		"t3":{"summary":"시가지 지형 전투력을 B로 강화", 
			"field":"B/A/A"
			},
		"t4":{"summary":"코스트 상한 +0.5"}
	},
},
"uniqueItem":{"name":"꽃 모양 머리핀",
"summary":`아야네가 거의 언제나 하고 있는 머리핀.
그 수수하고 평범한 부분이, 특히 마음에 들었다는 모양이다.`
},
"skills":{
	"ex":[{
	"name":"특급 송달 : 전투 지원품", "cost":4,
	"content":`원형 범위 내의 아군에게 치유력 <em>{heal}%</em> 회복`,
		"values":{
			"heal":{"min":"118", "max":"224"}
		}
	}],"basic":[{
	"name":"학습 지원",
	"content":`<em>30초</em>마다 원형 범위 내의 아군에게 치명 저항력 <em>{buff}%</em> 증가`,
		"values":{
			"buff":{"min":"15.5", "max":"29.4"}
		}
	}],"enhance":[{
	"name":"자기 계발",
	"content":`치유력 <em>{buff}%</em> 증가`,
		"values":{
			"buff":{"min":"14", "max":"26.6"}
		}
	}],"sub":[{
	"name":"사기 충전",
	"content":`아군의 최대 체력 <em>{buff}%</em> 증가`,
		"values":{
			"buff":{"min":"9.1", "max":"17.3"}
		}
	}]},
	"tags":["범위힐"],
},{
"name":"쿠로미 세리카", "variant":"new_year", "release":"2022.08.23",
"role":"서포터", "position":"SPECIAL","atk_type":"관통", "dfn_type":"특수장갑", "field":"C/C/S", "fes":false,
"weapon":"HG", "equipments":["신발", "가방", "손목시계"], "matterials":["파에스토스 원반", "네브라 디스크"],
"signature":{
	"name":"신시어리티",
	"summary":`세리카가 아르바이트를 나갈 때 늘 휴대하는 돌격소총.
무녀 아르바이트 또한 예외가 아닌지라, 새해맞이 행사장에서 난동을 피우는 문제아들을 조용히 만드는 데에도 쓰인다.`,
	"brk_thr":{
		"t2":{"summary":"강화 스킬 <em>무녀 알바생의 고집</em>을 <em>무녀 알바생의 고집+</em> 강화",
			"skill":{"idx":"enhance", "name":"무녀 알바생의 고집+",
				"content":`공격력 <em>{buff1}</em>
					추가로 공격력 <em>{buff2}%</em> 증가
				`,
				"values":{
					"buff1":{"min":"248", "max":"470"},
					"buff2":{"min":"14", "max":"26.6"}
				}
			}},
		"t3":{"summary":"실내 지형 전투력을 SS로 강화", 
			"field":"C/C/SS"
			},
		"t4":{"summary":"코스트 상한 +0.5"}
	},
},
"uniqueItem":{"name":"",
"summary":`
`},
"skills":{
	"ex":[{
	"name":"아르바이트에 방해야!", "cost":3,
	"content":`아치형 범위 내의 적에게 공격력 <em>{damage}%</em> 대미지
치명 대미지 <em>{debuff}%</em> 감소 (<em>30초</em>간)`,
		"values":{
			"damage":{"min":"247", "max":"395"},
			"debuff":{"min":"21.3", "max":"27.7"},
		}
	}],"basic":[{
	"name":"모두! 무녀가 응원해 줄게!",
	"content":`<em>40초</em>마다 원형 범위 내의 아군에게 공격력 <em>{buff}%</em> 증가 (<em>30초</em>간)`,
		"values":{
			"buff":{"min":"8.6", "max":"16.4"}
		}
	}],"enhance":[{
	"name":"무녀 알바생의 고집",
	"content":`공격력 <em>{buff}%</em> 증가`,
		"values":{
			"buff":{"min":"14", "max":"26.6"}
		}
	}],"sub":[{
	"name":"무녀 알바생의 집념",
	"content":`아군의 치명 대미지 저항률 <em>{buff}%</em> 증가`,
		"values":{
			"buff":{"min":"9.1", "max":"17.3"}
		}
	}]},
	"tags":["실내 헤세드", "뉴비"],
},{
"name":"타카나시 호시노", "variant":"armed/defensive", "release":"2025.01.23",
"role":"탱커", "position":"FRONT","atk_type":"신비", "dfn_type":"중장갑", "field":"A/S/D", "fes":true,
"weapon":"SG", "equipments":["모자", "가방", "손목시계"], "matterials":["네브라 디스크", "이스탄불 로켓"],
"signature":{
	"name":"호루스의 눈 + 진압 방패 '아이언 호루스'",
	"summary":`호시노가 애용하는 심플한 디자인의 산탄총.
호시노가 운용하는 무장 시스템의 핵심을 담당하고 있다.`,
	"brk_thr":{
		"t2":{"summary":"강화 스킬 <em>근거리 전투체계</em> 및 <em>전술 시야 확장</em>을 <em>근거리 전투체계+</em> 및 <em>전술 시야 확장+</em>으로 강화",
			"skill":{"idx":"enhance", "name":"근거리 전투체계+",
				"content":`
					공격력 <em>{buff01}</em>, 최대 체력 <em>{buff02}</em> 증가
					추가로 공격력 <em>{buff1}%</em>, 최대 체력 <em>{buff2}%</em> 증가
				`,
				"values":{
					"buff01":{"min":"117", "max":"169"},
					"buff02":{"min":"3830", "max":"5554"},
					"buff1":{"min":"11.2", "max":"16.2"},
					"buff2":{"min":"11.2", "max":"16.2"},
				}
			}},
		"t3":{"summary":"야외 지형 전투력을 SS로 강화", 
			"field":"A/SS/D"
			},
		"t4":{"summary":"신비 특효 10% 가산"}
	},
},
"uniqueItem":{"name":"",
"summary":`
`},
"skills":{
	"ex":[{
	"name":"방어태세 강화", "cost":4,
	"content":`지정한 위치로 이동 후 엄폐물의 역할을 하는 방패를 들어올려 엄폐 상태 부여 및 공격력 <em>{buff}%</em> 증가 (<em>40초</em>간)
호시노(무장) 최대 체력의 <em>{shield}%</em>를 엄폐물이 추가로 가집니다. (엄폐물의 방어 타입은 호시노(무장)과 동일합니다.)`,
		"values":{
			"buff":{"min":"82.5", "max":"156"},
			"shield":{"min":"39.5", "max":"69.1"},
		}
	}],"basic":[{
	"name":"플레이트 교체",
	"content":`<em>40초</em>마다 방탄 플레이트를 장착하여 받는 대미지량 <em>{buff}%</em> 감소 (방탄 플레이트는 <em>25회</em> 피격 시 해제)`,
		"values":{
			"buff":{"min":"12.7", "max":"24.1"}
		}
	}],"enhance":[{
	"name":"근거리 전투체계",
	"content":`공격력 <em>{buff1}%</em>, 최대 체력 <em>{buff2}%</em> 증가`,
		"values":{
			"buff1":{"min":"11.2", "max":"16.2"},
			"buff2":{"min":"11.2", "max":"16.2"},
		}
	}],"sub":[{
	"name":"유효한 전술",
	"content":`공격 시 <em>20%</em> 확률로 방어력 <em>{debuff}%</em> 감소 (<em>20초</em>간) (쿨타임 <em>5초</em>)`,
		"values":{
			"debuff":{"min":"10.1", "max":"19.3"}
		}
	}]},
	"tags":["엄폐 상태", "위치이동", "호크마", "예소드2페"],
},{
"name":"타카나시 호시노", "variant":"armed/offensive", "release":"2025.01.23",
"role":"딜러", "position":"FRONT","atk_type":"신비", "dfn_type":"중장갑", "field":"A/S/D", "fes":true,
"weapon":"SG", "equipments":["모자", "가방", "손목시계"], "matterials":["네브라 디스크", "이스탄불 로켓"],
"signature":{
	"name":"호루스의 눈 + 보조 권총",
	"summary":`호시노가 평소 사용하는 산탄총과 소중히 간직하고 있던 권총의 조합.
적극적인 공세로 적의 방어를 돌파할 때 운용한다.`,
	"brk_thr":{
		"t2":{"summary":"강화 스킬 <em>근거리 전투체계</em> 및 <em>전술 시야 확장</em>을 <em>근거리 전투체계+</em> 및 <em>전술 시야 확장+</em>으로 강화",
			"skill":{"idx":"enhance", "name":"전술 시야 확장+",
				"content":`
					공격력 <em>{buff01}</em> 증가
					추가로 일반 공격 사거리 <em>300</em>, 치명 대미지 <em>{buff}%</em> 증가
				`,
				"values":{
					"buff01":{"min":"390", "max":"741"},
					"buff1":{"min":"11.2", "max":"21.2"},
				}
			}},
		"t3":{"summary":"야외 지형 전투력을 SS로 강화", 
			"field":"A/SS/D"
			},
		"t4":{"summary":"신비 특효 10% 가산"}
	},
},
"uniqueItem":{"name":"",
"summary":`
`},
"skills":{
	"ex":[{
	"name":"집중 돌파", "cost":6,
	"content":`적 1인에게 공격력 <em>{damage1}%</em> 대미지
원형 범위 내의 적에게 공격력 <em>{damage2}%</em> 대미지`,
		"values":{
			"damage1":{"min":"78.5", "max":"149"},
			"damage2":{"min":"264", "max":"503"}
		}
	}],"basic":[{
	"name":"권총 속사",
	"content":`패스트 로딩 용 잔탄 수가 0이 될 시, 적 1인에게 공격력 <em>{damage}%</em> 대미지`,
		"values":{
			"damage":{"min":"211", "max":"400"}
		}
	}],"enhance":[{
	"name":"전술 시야 확장",
	"content":`일반 공격 사거리 <em>300</em>, 치명 대미지 <em>{buff}%</em> 증가`,
		"values":{
			"buff":{"min":"11.2", "max":"21.2"}
		}
	}],"sub":[{
	"name":"제압 사격",
	"content":`모든 공격이 적의 방어력을 <em>{through}%</em> 무시
공격력 <em>{buff}%</em> 증가
EX 스킬 및 기본 스킬 사용 시 즉시 재장전 후, 최초의 일반 공격은 부채꼴 범위 내의 적에게 공격력 <em>{damage}%</em> 대미지`,
		"values":{
			"through":{"min":"60", "max":"85"},
			"buff":{"min":"7.4", "max":"14"},
			"damage":{"min":"79", "max":"150"}
		}
	}]},
	"tags":["범위딜", "페로로질라"],
},{
"name":"스나오오카미 시로코", "variant":"riding", "release":"2022.03.30",
"role":"딜러", "position":"MIDDLE","atk_type":"신비", "dfn_type":"중장갑", "field":"S/B/D", "fes":false,
"weapon":"AR", "equipments":["장갑", "배지", "손목시계"], "matterials":["파에스토스 원반", "안티키테라 장치"],
"signature":{
	"name":"WHITE FANG 465",
	"summary":`시로코가 애용하는 돌격소총.
야외에서의 장거리 이동에도 문제가 없도록 다양한 정비와 개조가 이루어져 있다.`,
	"brk_thr":{
		"t2":{"summary":"강화 스킬 <em>속사</em>를 <em>속사+</em>로 강화",
			"skill":{"idx":"enhance", "name":"속사+",
				"content":`
					공격속도 <em>{buff01}</em> 증가
					추가로 공격속도 <em>{buff}%</em> 증가
				`,
				"values":{
					"buff01":{"min":"1400", "max":"2660"},
					"buff1":{"min":"14", "max":"26.6"},
				}
			}},
		"t3":{"summary":"시가지 지형 전투력을 SS로 강화", 
			"field":"SS/B/D"
			},
		"t4":{"summary":"신비 특효 10% 가산"}
	},
},
"uniqueItem":{"name":"",
"summary":`
`},
"skills":{
	"ex":[{
	"name":"라이딩 그레네이드", "cost":4,
	"content":`원형 범위 내의 적에게 공격력 <em>{damage}%</em> 대미지
공격력 <em>{debuff}%</em> 감소 (<em>10초</em>간)`,
		"values":{
			"damage":{"min":"431", "max":"690"},
			"debuff":{"min":"38.4", "max":"50"}
		}
	}],"basic":[{
	"name":"집중 사격",
	"content":`<em>40초</em>마다 직선 범위 내의 적에게 공격력 <em>{damage}%</em> 대미지`,
		"values":{
			"damage":{"min":"194", "max":"369"}
		}
	}],"enhance":[{
	"name":"속사",
	"content":`공격속도 <em>{buff}%</em> 증가`,
		"values":{
			"buff":{"min":"14", "max":"26.6"}
		}
	}],"sub":[{
	"name":"간파 사격",
	"content":`해로운 효과가 있는 적 공격 시 공격력 <em>{damage}%</em> 추가 대미지`,
		"values":{
			"damage":{"min":"3.8", "max":"7.3"}
		}
	}]},
	"tags":["범위딜", "공격력 감소", "호크마", "추가대미지"],
},{
"name":"스나오오카미 시로코*테러", "variant":"normal", "release":"2025.01.23",
"role":"딜러", "position":"MIDDLE","atk_type":"신비", "dfn_type":"특수장갑", "field":"D/S/A", "fes":true,
"weapon":"AR", "equipments":["모자", "배지", "손목시계"], "matterials":["로마 12면체", "토템폴"],
"signature":{
	"name":"BLACK FANG 465",
	"summary":`시로코가 애용하는 돌격소총.
오랫동안 사용해 온 듯 군데군데 수리된 흔적들이 남아있지만, 꼼꼼하게 정비해 왔기 때문에 사용하는 데는 아무런 문제가 없다.`,
	"brk_thr":{
		"t2":{"summary":"강화 스킬 <em>정밀한 조준</em>를 <em>정밀한 조준+</em>로 강화",
			"skill":{"idx":"enhance", "name":"정밀한 조준+",
				"content":`
					치명 대미지 <em>{buff01}</em> 증가
					추가로 공격력 <em>{buff}%</em> 증가
				`,
				"values":{
					"buff01":{"min":"2000", "max":"3800"},
					"buff1":{"min":"14", "max":"26.6"},
				}
			}},
		"t3":{"summary":"야외 지형 전투력을 SS로 강화", 
			"field":"D/SS/A"
			},
		"t4":{"summary":"신비 특효 10% 가산"}
	},
},
"uniqueItem":{"name":"",
"summary":`
`},
"skills":{
	"ex":[{
	"name":"화력 강화", "cost":3,
	"content":`드론 소환 (<em>40초</em>간)
		드론이 유지되는 동안 일반 공격이 공격력 <em>120%</em> 대미지를 주도록 변경
		치명 수치 <em>{buff1}%</em>, 치명 대미지 <em>{buff2}%</em> 증가 (<em>40초</em>간)
		자신에게 최대 체력의 <em>20%</em> 만큼 대미지 (해당 스킬로 시로코*테러는 퇴각하지 않습니다.)`,
		"values":{
			"buff1":{"min":"42", "max":"67.3"},
			"buff2":{"min":"71", "max":"134"}
		}
	}],"basic":[{
	"name":"수류탄 투척 · 개(改)",
	"content":`<em>40초</em>마다 적 1인에게 공격력 <em>{damage}%</em> 대미지
		EX 스킬 사용 시 드론 소환 : 교차 사격으로 스킬이 변경됩니다.`,
		"values":{
			"damage":{"min":"370", "max":"704"}
		}
	},{
	"name":"드론 소환 : 교차 사격",
	"content":`
		EX 스킬 사용 시 적 1인에게 공격력 <em>{damage}%</em> 대미지
		EX 스킬의 드론이 사라지면 수류탄 투척 · 개(改)로 스킬이 변경됩니다.
		`,
		"values":{
			"damage":{"min":"474", "max":"902"}
		}
	}],"enhance":[{
	"name":"정밀한 조준",
	"content":`공격력 <em>{buff}%</em> 증가`,
		"values":{
			"buff":{"min":"14", "max":"26.6"}
		}
	}],"sub":[{
	"name":"침착한 호흡",
	"content":`신비 특효 <em>{buff}%</em> 가산
시로코*테러의 현재 체력이 <em>1%</em> 이하 시 <em>15초</em> 동안 퇴각 유예 적용 (쿨타임 <em>90초</em>)
퇴각 유예 동안 체력을 전부 회복하지 못하면 즉시 퇴각`,
		"values":{
			"buff":{"min":"25.92", "max":"49.25"}
		}
	}]},
	"tags":["연타", "메인딜"],
},{
"name":"타카나시 호시노", "variant":"swimsuit", "release":"2023.01.31",
"role":"서포터", "position":"FRONT","atk_type":"폭발", "dfn_type":"특수장갑", "field":"S/A/D", "fes":true,
"weapon":"SG", "equipments":["신발", "가방", "부적"], "matterials":["네브라 디스크", "토템폴"],
"signature":{
	"name":"호루스의 눈",
	"summary":`여름 바다에 맞게끔 조율하여 가져온 호시노의 산탄총.
숲에 길을 열거나 벌레를 쫒는 등, 다양한 용도로 쓰기 좋게 손질되어 있다.`,
	"brk_thr":{
		"t2":{"summary":"강화 스킬 <em>더위 참기</em>를 <em>더위 참기+</em>로 강화",
			"skill":{"idx":"enhance", "name":"더위 참기+",
				"content":`
					방어력 <em>{buff01}</em>, 공격력 <em>{buff02}</em> 증가
					추가로 방어력 <em>{buff1}%</em>, 공격력 <em>{buff2}%</em> 증가
				`,
				"values":{
					"buff01":{"min":"160", "max":"232"},
					"buff02":{"min":"192", "max":"278"},
					"buff1":{"min":"11.2", "max":"16.2"},
					"buff2":{"min":"11.2", "max":"16.2"},
				}
			}},
		"t3":{"summary":"시가지 지형 전투력을 SS로 강화", 
			"field":"SS/A/D"
			},
		"t4":{"summary":"폭발 특효 10% 가산"}
	},
},
"uniqueItem":{"name":"",
"summary":`
`},
"skills":{
	"ex":[{
	"name":"수상 지원", "cost":6,
	"content":`자신을 중심으로 원형 범위 내에 있는 아군의 공격력 <em>{buff1}%</em> 증가, 폭발 특효 <em>{buff2}%</em> 가산 (<em>50초</em>간)`,
		"values":{
			"buff1":{"min":"26.5", "max":"38.5"},
			"buff2":{"min":"68.3", "max":"99"}
		}
	}],"basic":[{
	"name":"수상 습격",
	"content":`<em>40초</em>마다 적 1인에게 공격력 <em>{damage}%</em> 대미지
		치유력 <em>{heal}%</em> 만큼 자신 회복`,
		"values":{
			"damage":{"min":"283", "max":"454"},
			"heal":{"min":"75", "max":"97.6"}
		}
	}],"enhance":[{
	"name":"더위 참기",
	"content":`방어력 <em>{buff1}%</em>, 공격력 <em>{buff2}%</em> 증가`,
		"values":{
			"buff1":{"min":"11.2", "max":"16.2"},
			"buff2":{"min":"11.2", "max":"16.2"}
		}
	}],"sub":[{
	"name":"해변의 즐거움",
	"content":`EX 스킬이 지속되는 동안 코스트 회복력 <em>{cost}</em> 증가`,
		"values":{
			"cost":{"min":"360", "max":"684"}
		}
	}]},
	"tags":["공격력 버프", "폭발 특효", "코스트 회복력"],
},{
"name":"스나오오카미 시로코", "variant":"swimsuit", "release":"2024.01.23",
"role":"딜러", "position":"SPECIAL","atk_type":"신비", "dfn_type":"경장갑", "field":"B/S/D", "fes":false,
"weapon":"AR", "equipments":["모자", "가방", "손목시계"], "matterials":["파에스토스 원반", "로혼치 사본"],
"signature":{
	"name":"BLACK FANG 465",
	"summary":`바다에서도 애용되는 시로코의 돌격소총.
평소보다 신경 쓴 정비 덕에, 물기나 소금기에도 문제없다.`,
	"brk_thr":{
		"t2":{"summary":"강화 스킬 <em>묘하게 들뜬</em>를 <em>묘하게 들뜬+</em>으로 강화",
			"skill":{"idx":"enhance", "name":"묘하게 들뜬+",
				"content":`
					공격력 <em>{buff01}</em> 증가
					추가로 공격력 <em>{buff1}%</em> 증가
				`,
				"values":{
					"buff01":{"min":"365", "max":"694"},
					"buff1":{"min":"14", "max":"26.6"}
				}
			}},
		"t3":{"summary":"야외 지형 전투력을 SS로 강화", 
			"field":"B/SS/D"
			},
		"t4":{"summary":"코스트 상한 +0.5"}
	},
},
"uniqueItem":{"name":"",
"summary":`
`},
"skills":{
	"ex":[{
	"name":"월척이다", "cost":3,
	"content":`적 1인에게 방어력 <em>{debuff}%</em> 감소 (<em>30초</em>간)
		추가로 공격력 <em>{damage}%</em> 대미지`,
		"values":{
			"debuff":{"min":"18", "max":"34.2"},
			"damage":{"min":"588", "max":"1117"}
		}
	}],"basic":[{
	"name":"'마침 여기'",
	"content":`전투 시작 시 자신을 제외한 아군 치명 수치 <em>{buff}%</em> 증가 (<em>60초</em>간)
		EX 스킬 코스트 1 감소 (EX 스킬 사용 <em>1회</em>까지) (전투당 <em>1회</em>)`,
		"values":{
			"buff":{"min":"11.5", "max":"21.9"}
		}
	}],"enhance":[{
	"name":"묘하게 들뜬",
	"content":`공격력 <em>{buff}%</em> 증가`,
		"values":{
			"buff":{"min":"14", "max":"26.6"}
		}
	}],"sub":[{
	"name":"단련된 체력",
	"content":`아군의 코스트 회복력 <em>{cost}%</em> 증가`,
		"values":{
			"cost":{"min":"10.6", "max":"20.2"}
		}
	}]},
	"tags":["디버프", "방어력 감소", "코스트 회복"],
},{
"name":"이자요이 노노미", "variant":"swimsuit", "release":"2023.01.17",
"role":"딜러", "position":"BACK","atk_type":"폭발", "dfn_type":"특수장갑", "field":"S/D/B", "fes":false,
"weapon":"MG", "equipments":["모자", "헤어핀", "손목시계"], "matterials":["에테르", "로혼치 사본"],
"signature":{
	"name":"미니 No.5",
	"summary":`한여름에도 노노미 곁을 지키는 기관총.
시원하게 쏟아내는 탄환이 더위 또한 날려버린다.`,
	"brk_thr":{
		"t2":{"summary":"강화 스킬 <em>기다릴 수 없어요~♧</em>를 <em>기다릴 수 없어요~♧+</em>로 강화",
			"skill":{"idx":"enhance", "name":"기다릴 수 없어요~♧+",
				"content":`
					방어 관통 수치 <em>{buff01}</em> 증가
					추가로 공격속도 <em>{buff1}%</em> 증가
				`,
				"values":{
					"buff01":{"min":"360", "max":"684"},
					"buff1":{"min":"14", "max":"26.6"}
				}
			}},
		"t3":{"summary":"시가지 지형 전투력을 SS로 강화", 
			"field":"SS/D/B"
			},
		"t4":{"summary":"폭발 특효 10% 가산"}
	},
},
"uniqueItem":{"name":"",
"summary":`
`},
"skills":{
	"ex":[{
	"name":"시원해질 시간이에요~♣", "cost":6,
	"content":`적 1인에게 공격력 <em>{damage}%</em> 대미지
	장탄수 100 소모 시까지 일반 공격 딜레이를 <em>{cancel}</em> 무시하는 일반공격으로 변경
	즉시 재장전`,
		"values":{
			"damage":{"min":"695", "max":"1113"},
			"cancel":{"min":"2", "max":"4"}
		}
	}],"basic":[{
	"name":"다 같이 신나게!",
	"content":`<em>40초</em>마다 원형 범위 내의 아군에게 공격 속도 <em>{buff}%</em> 증가 (<em>30</em>초간)`,
		"values":{
			"buff":{"min":"11.4", "max":"21.6"}
		}
	}],"enhance":[{
	"name":"기다릴 수 없어요~♧",
	"content":`공격 속도 <em>{buff}%</em> 증가`,
		"values":{
			"buff":{"min":"14", "max":"26.6"}
		}
	}],"sub":[{
	"name":"차가울 거에요~!",
	"content":`EX 스킬로 일반 공격이 변경된 상태에서 일반 공격으로 적 공격 시 공격력 <em>{additional_damage}%</em> 추가 대미지`,
		"values":{
			"additional_damage":{"min":"10.9", "max":"20.9"}
		}
	}]},
	"tags":["메인딜", "예로니무스", "카이텐저 2페"],
},{
"name":"쿠로미 세리카", "variant":"swimsuit", "release":"2024.12.03",
"role":"딜러", "position":"SPECIAL","atk_type":"신비", "dfn_type":"중장갑", "field":"D/B/S", "fes":false,
"weapon":"AR", "equipments":["장갑", "가방", "손목시계"], "matterials":["에테르", "머리가 자라는 인형"],
"signature":{
	"name":"신시어리티",
	"summary":`휴가 중의 리조트까지 따라온 세리카의 돌격소총.
	휴가 중이라도 헤이해짐은 없다. 오히려 최고로 성실한 휴가를 즐기기 위해 최상의 상태를 유지한다.`,
	"brk_thr":{
		"t2":{"summary":"강화 스킬 <em>의욕 만만</em>을 <em>의욕 만만+</em>로 강화",
			"skill":{"idx":"enhance", "name":"의욕 만만+",
				"content":`
					공격력 <em>{buff01}</em> 증가
					추가로 공격속도 <em>{buff1}%</em> 증가
				`,
				"values":{
					"buff01":{"min":"380", "max":"721"},
					"buff1":{"min":"14", "max":"26.6"}
				}
			}},
		"t3":{"summary":"실내 지형 전투력을 SS로 강화", 
			"field":"D/B/SS"
			},
		"t4":{"summary":"코스트 상한 +0.5"}
	},
},
"uniqueItem":{"name":"",
"summary":`
`},
"skills":{
	"ex":[{
	"name":"성난 파도", "cost":6,
	"content":`원형 범위 내의 적에게 공격력 <em>{damage}%</em> 대미지`,
		"values":{
			"damage":{"min":"636", "max":"1210"}
		}
	}],"basic":[{
	"name":"퐁당퐁당, 퐁당!",
	"content":`<em>35초</em>마다 원형 범위 내의 적에게 공격력 <em>{damage}%</em> 대미지`,
		"values":{
			"damage":{"min":"101", "max":"187"}
		}
	}],"enhance":[{
	"name":"의욕 만만",
	"content":`공격력 <em>{buff}%</em> 증가`,
		"values":{
			"buff":{"min":"14", "max":"26.6"}
		}
	}],"sub":[{
	"name":"앗, 차가워!",
	"content":`아군의 치명 대미지 <em>{buff}%</em> 증가`,
		"values":{
			"buff":{"min":"9.1", "max":"17.3"}
		}
	}]},
	"tags":["범위딜"],
},{
"name":"오쿠소라 아야네", "variant":"swimsuit", "release":"2023.01.17",
"role":"TS", "position":"SPECIAL","atk_type":"관통", "dfn_type":"경장갑", "field":"D/S/B", "fes":false,
"weapon":"HG", "equipments":["장갑", "가방", "손목시계"], "matterials":["볼프세크 강철", "안티키테라 장치"],
"signature":{
	"name":"상식적 수단 + 강습형 건쉽 '물구름 호'",
	"summary":`사용되는 일이 없실 바라던 아야네의 권총.
	하지만 그 꿈은 매번 어처구니 없는 일로 깨어진다.`,
	"brk_thr":{
		"t2":{"summary":"강화 스킬 <em>자동 조준</em>을 <em>자동 조준+</em>로 강화",
			"skill":{"idx":"enhance", "name":"자동 조준+",
				"content":`
					치명 수치 <em>{buff01}</em> 증가
					추가로 치명 수치 <em>{buff1}%</em> 증가
				`,
				"values":{
					"buff01":{"min":"100", "max":"190"},
					"buff1":{"min":"14", "max":"26.6"}
				}
			}},
		"t3":{"summary":"시가지 지형 전투력을 SS로 강화", 
			"field":"A/S/B"
			},
		"t4":{"summary":"코스트 상한 +0.5"}
	},
},
"uniqueItem":{"name":"",
"summary":`
`},
"skills":{
	"ex":[{
	"name":"물구름 호, 출격합니다!", "cost":4,
	"content":`아야네가 물구름 호에 탑승하여 전투에 등장
	아야네 공격력의 <em>{handover_atk}%</em>를, 치명 수치의 <em>{handover_crt}%</em>를 물구름 호가 가진다. (<em>30초</em>간)
	물구름 호는 <em>12초</em>마다 '호우 미사일'을 발사하여 적 1인에게 공격력 <em>{damage}%</em> 대미지
	(이 공격은 적의 방어력을 <em>{ignore_dfs}%</em> 무시)
	(택티컬 서포트의 탑승물은 중복 등장 불가)
	`,
		"values":{
			"handover_atk":{"min":"12.5", "max":"47.5"},
			"handover_crt":{"min":"12.5", "max":"32.6"},
			"damage":{"min":"297", "max":"401"},
			"ignore_dfs":{"min":"68", "max":"84"}
		}
	}],"basic":[{
	"name":"공중지원",
	"content":`<em>30초</em>마다 적 1인에게 공격력 <em>{damage}%</em> 대미지
	(이 공격은 적의 방어력을 <em>{ignore_dfs}%</em> 무시)`,
		"values":{
			"damage":{"min":"148", "max":"215"},
			"ignore_dfs":{"min":"68", "max":"84"}
		}
	}],"enhance":[{
	"name":"자동조준",
	"content":`치명 수치 <em>{buff}%</em> 증가`,
		"values":{
			"buff":{"min":"14", "max":"26.6"}
		}
	}],"sub":[{
	"name":"전황파악",
	"content":`아군의 치명 대미지 <em>{buff}%</em> 증가`,
		"values":{
			"buff":{"min":"9.1", "max":"17.3"}
		}
	}]},
	"tags":["방어무시", "헬리콥터"],
},{
"name":"츠카츠키 리오", "variant":"armed", "release":"2026.05.26",
"role":"딜러", "position":"MIDDLE","atk_type":"폭발", "dfn_type":"특수장갑", "field":"S/B/D", "fes":false,
"weapon":"HG", "equipments":["모자", "헤어핀", "손목시계"], "matterials":["디스코 콜간테", "보이니치 사본"],
"signature":{
	"name":"입안자",
	"summary":`리오의 호신용 권총.
합리적인 슈트의 보조 덕분에, 보다 정확한 사격이 가능해졌다.`,
	"brk_thr":{
		"t2":{"summary":"강화 스킬 <em>진화 알고리즘</em>을 <em>진화 알고리즘+</em>으로 강화",
			"skill":{"idx":"enhance", "name":"진화 알고리즘+",
				"content":`
					치명 대미지 <em>{buff01}</em> 증가
					추가로 공격력 <em>{buff1}%</em> 증가
				`,
				"values":{
					"buff01":{"min":"2000", "max":"3800"},
					"buff1":{"min":"14", "max":"26.6"}
				}
			}},
		"t3":{"summary":"시가지 지형 전투력을 SS로 강화", 
			"field":"SS/B/D"
			},
		"t4":{"summary":"폭발 특효 10% 가산"}
	},
},
"uniqueItem":{"name":"",
"summary":`
`},
"skills":{
	"ex":[{
	"name":"전뇌의 힘", "cost":4,
	"content":`적 1인에게 공격력 <em>{damage}%</em> 대미지`,
		"values":{
			"damage":{"min":"1356", "max":"2576"}
		}
	}],"basic":[{
	"name":"파라미터 조정",
	"content":`<em>35초</em>마다 치명 대미지 <em>{buff}%</em> 증가 (<em>30초</em>간)`,
		"values":{
			"buff":{"min":"21.9", "max":"41.6"}
		}
	}],"enhance":[{
	"name":"진화 알고리즘",
	"content":`공격력 <em>{buff}%</em> 증가`,
		"values":{
			"buff":{"min":"14", "max":"26.6"}
		}
	}],"sub":[{
	"name":"메타휴리스틱",
	"content":`방어 타입이 경장갑인 대상 공격 시 <em>20%</em> 확률로 받는 특효 대미지량 <em>{buff}%</em> 가산 (<em>13초</em>간) (쿨타임 <em>5초</em>)`,
		"values":{
			"buff":{"min":"6.1", "max":"11.6"}
		}
	}]},
	"tags":["메인딜", "예로니무스", "카이텐저 2페"],
},{
"name":"아사기 무츠키", "variant":"normal", "release":"2021.11.09",
"role":"딜러", "position":"BACK","atk_type":"폭발", "dfn_type":"경장갑", "field":"A/A/D", "fes":false,
"weapon":"MG", "equipments":["모자", "헤어핀", "손목시계"], "matterials":["보이니치 사본", "에테르"],
"signature":{
	"name":"트릭 오어 트릭",
	"summary":`무츠키가 가지고 다니는 다목적 기관총.
재미있는 장난을 위해서라면 화력도 중요하다고 말한다.`,
	"brk_thr":{
		"t2":{"summary":"강화 스킬 <em>재미있게 놀자!</em>을 <em>재미있게 놀자!+</em>로 강화",
			"skill":{"idx":"enhance", "name":"재미있게 놀자!+",
				"content":`
					공격력 <em>{buff01}</em> 증가
					추가로 공격력 <em>{buff1}%</em> 증가
				`,
				"values":{
					"buff01":{"min":"228", "max":"434"},
					"buff1":{"min":"14", "max":"26.6"}
				}
			}},
		"t3":{"summary":"실내 지형 전투력을 B로 강화", 
			"field":"A/A/B"
			},
		"t4":{"summary":"폭발 특효 10% 가산"}
	},
},
"uniqueItem":{"name":"",
"summary":`
`},
"skills":{
	"ex":[{
	"name":"작열의 세레나데", "cost":4,
	"content":`3개의 원형 범위 내의 적에게 공격력 <em>{damage}%</em> 대미지`,
		"values":{
			"damage":{"min":"409", "max":"778"}
		}
	}],"basic":[{
	"name":"폭열의 아리아",
	"content":`<em>20초</em>마다 공격력 <em>{damage}%</em> 대미지 지뢰 3개 소환 (<em>15초</em>간)`,
		"values":{
			"damage":{"min":"334", "max":"635"}
		}
	}],"enhance":[{
	"name":"재미있게 놀자!",
	"content":`공격력 <em>{buff}%</em> 증가`,
		"values":{
			"buff":{"min":"14", "max":"26.6"}
		}
	}],"sub":[{
	"name":"신나게 가볼까?",
	"content":`일반 공격 시 <em>25%</em> 확률로 명중 수치 <em>{buff}%</em> 증가 (<em>30초</em>간) (쿨타임 <em>25초</em>)`,
		"values":{
			"buff":{"min":"30.2", "max":"57.4"}
		}
	}]},
	"tags":["서브딜", "지뢰"],
},{
"name":"리쿠하치마 아루", "variant":"normal", "release":"2021.11.09",
"role":"딜러", "position":"BACK","atk_type":"폭발", "dfn_type":"경장갑", "field":"S/B/D", "fes":false,
"weapon":"SR", "equipments":["모자", "헤어핀", "손목시계"], "matterials":["로혼치 사본", "토템폴"],
"signature":{
	"name":"와인레드・어드마이어",
	"summary":`아루가 평소에도 애지중지 아끼는 고풍스러운 디자인의 반자동 저격소총.
들고 있기만 해도 하드보일드한 느낌이 든다.`,
	"brk_thr":{
		"t2":{"summary":"강화 스킬 <em>사장님의 위엄</em>을 <em>사장님의 위엄+</em>로 강화",
			"skill":{"idx":"enhance", "name":"사장님의 위엄+",
				"content":`
					치명 대미지 <em>{buff01}</em> 증가
					추가로 치명 대미지 <em>{buff1}%</em> 증가
				`,
				"values":{
					"buff01":{"min":"2000", "max":"3800"},
					"buff1":{"min":"14", "max":"26.6"}
				}
			}},
		"t3":{"summary":"시가지 지형 전투력을 SS로 강화", 
			"field":"SS/B/D"
			},
		"t4":{"summary":"폭발 특효 10% 가산"}
	},
},
"uniqueItem":{"name":"아루의 엄청 귀중한 지갑",
"summary":`아루가 애용하는 고급 지갑.
질 좋은 소재로 만들어진 고급품이지만 오래 사용한 탓에 곳곳에 색이 바래고 흠집이 생겼다. 처음 흥신소를 차린 뒤 하루카, 카요코, 무츠키가 함께 돈을 모아 선물해 준 물건으로, 아루에게는 그 무엇과도 바꿀 수 없는 소중한 물건이다.`,
	"tier":{
		"t1":"명중 수치 150 증가",
		"t2":{"summary":"기본 스킬 <em>느와르 어택</em>을 <em>느와르 어택+</em>로 강화",
			"skill":{"idx":"basic", "name":"느와르 어택+",
				"content":`
					<em>25초</em>마다 적 1인에게 공격력 <em>{damage1}%</em> 대미지
					<em>100%</em> 확률로 원형 범위 내의 적에게 공격력 <em>{damage2}%</em> 대미지
					`,
				"values":{
					"damage1":{"min":"156", "max":"296"},
					"damage2":{"min":"256", "max":"487"}
				}
			}
	}	}
},
"skills":{
	"ex":[{
	"name":"하드보일드 샷", "cost":4,
	"content":`적 1인에게 공격력 <em>{damage1}%</em> 대미지
원형 범위 내의 적에게 공격력 <em>{damage2}%</em> 대미지`,
		"values":{
			"damage1":{"min":"274", "max":"521"},
			"damage2":{"min":"292", "max":"554"}
		}
	}],"basic":[{
	"name":"느와르 어택",
	"content":`<em>25초</em>마다 적 1인에게 공격력 <em>{damage1}%</em> 대미지
<em>50%</em> 확률로 원형 범위 내의 적에게 공격력 <em>{damage2}%</em> 대미지`,
		"values":{
			"damage1":{"min":"152", "max":"290"},
			"damage2":{"min":"251", "max":"476"}
		}
	}],"enhance":[{
	"name":"사장님의 위엄",
	"content":`치명 대미지 <em>{buff}%</em> 증가`,
		"values":{
			"buff":{"min":"14", "max":"26.6"}
		}
	}],"sub":[{
	"name":"무법자의 길",
	"content":`EX 스킬 사용 중 치명 수치 <em>{buff}%</em> 증가`,
		"values":{
			"buff":{"min":"20.1", "max":"38.3"}
		}
	}]},
	"tags":["메인딜", "폭발 보스전"],
},{
"name":"오니카타 카요코", "variant":"normal", "release":"2021.11.09",
"role":"서포터", "position":"MIDDLE", "atk_type":"폭발", "dfn_type":"중장갑", "field":"A/D/A", "fes":false,
"weapon":"HG", "equipments":["신발", "헤어핀", "목걸이"], "matterials":["보이니치 사본", "볼프세크 강철"],
"skills":{
	"ex":[{
	"name":"패닉 브링거", "cost":6,
	"content":`원형 범위 내의 적에게 공격력 <em>{damage}%</em> 대미지
	공포 (<em>{duration}초</em>간)
	`,
	"values":{
		"damage":{"min":"349", "max":"558"},
		"duration":{"min":"3.9", "max":"5.1"}
	}
	}],
	"basic":[{
	"name":"패닉샷",
	"content":`<em>20초</em>마다 적 1인에게 공격력 <em>{damage}%</em> 대미지
	<em>30%</em> 확률로 공포 (<em>3.6초</em>간)
	`,
	"values":{
		"damage":{"min":"132", "max":"252"}
	}
	}],
	"enhance":[{
	"name":"무서운 얼굴",
	"content":`군중 제어 강화력 <em>{buff}%</em> 증가
	`,
	"values":{
		"buff":{"min":"14", "max":"26.6"}
	}
	}],
	"sub":[{
	"name":"어쩔 수 없네",
	"content":`군중 제어 상태인 적 공격 시 공격력 <em>{additional_damage}%</em> 추가 대미지
	`,
	"values":{
		"additional_damage":{"min":"74.8", "max":"142"}
	}
	}]
},
"signature":{
	"name":"데몬스 로어",
	"summary":`카요코가 늘 휴대하고 다니는 권총.
	그 이름처럼 사격할 때마다 엄청난 굉음을 내기 때문에 실내에서는 꼭 소음기를 장착해야 한다.
	`,
	"brk_thr":{
		"t2":{"summary":"강화 스킬 <em>무서운 얼굴</em>을 <em>무서운 얼굴+</em>로 강화",
			"skill":{"idx":"enhance", "name":"무서운 얼굴+",
				"content":`
					군중 제어 강화력 <em>{buff01}</em> 증가
					추가로 군중 제어 강화력 <em>{buff1}%</em> 증가
				`,
				"values":{
					"buff01":{"min":"14", "max":"27"},
					"buff1":{"min":"14", "max":"26.6"}
				}
			}},
		"t3":{"summary":"야외 지형 전투력을 B로 강화", 
			"field":"A/B/A"
			},
		"t4":{"summary":"폭발 특효 10% 가산"}
	},
},
"uniqueItem":{
	"name":"",
	"summary":``
},
"tags":["상태이상", "공포"],
},{
"name":"이구사 하루카", "variant":"normal", "release":"2021.11.09",
"role":"탱커", "position":"FRONT", "atk_type":"폭발", "dfn_type":"경장갑", "field":"D/B/A", "fes":false,
"weapon":"SG", "equipments":["신발", "가방", "부적"], "matterials":["만드라고라", "볼프세크 강철"],
"skills":{
	"ex":[{
	"name":"펌프 패닝", "cost":4,
	"content":`부채꼴 범위 내의 적에게 공격력 <em>{damage}%</em> 대미지
	`,
	"values":{
		"damage":{"min":"821", "max":"1560"}
	}
	}],
	"basic":[{
	"name":"트리거 오버",
	"content":`<em>20초</em>마다 방어력 <em>{buff}%</em> 증가 (<em>20초</em>간)
	`,
	"values":{
		"buff":{"min":"18.9", "max":"36"}
	}
	}],
	"enhance":[{
	"name":"히, 힘내겠습니다!",
	"content":`최대 체력 <em>{buff}%</em> 증가
	`,
	"values":{
		"buff":{"min":"14", "max":"26.6"}
	}
	}],
	"sub":[{
	"name":"으아아아아아-?!",
	"content":`피격 시 <em>5%</em> 확률로 방어력 <em>{buff}%</em> 증가 (<em>15초</em>간) (쿨타임 <em>10초</em>)
	`,
	"values":{
		"buff":{"min":"18.1", "max":"34.4"}
	}
	}]
},
"signature":{
	"name":"블로우 어웨이",
	"summary":`벌레를 쫒는 데 사용되는 하루카의 산탄총.
	혹은 '벌레 같은 것'을 처리하는 데에도 사용된다.
	`,
	"brk_thr":{
		"t2":{"summary":"강화 스킬 <em>히, 힘내겠습니다!</em>을 <em>히, 힘내겠습니다!+</em>로 강화",
			"skill":{"idx":"enhance", "name":"히, 힘내겠습니다!+",
				"content":`
					최대 체력 <em>{buff01}</em> 증가
					추가로 최대 체력 <em>{buff1}%</em> 증가
				`,
				"values":{
					"buff01":{"min":"4853", "max":"9221"},
					"buff1":{"min":"14", "max":"26.6"}
				}
			}},
		"t3":{"summary":"시가지 지형 전투력을 B로 강화", 
			"field":"B/B/A"
			},
		"t4":{"summary":"폭발 특효 10% 가산"}
	},
},
"uniqueItem":{
	"name":"",
	"summary":``
},
"tags":["탱커", "뉴비"],
},{
"name":"리쿠하치마 아루", "variant":"new_year", "release":"2022.08.09",
"role":"딜러", "position":"BACK", "atk_type":"관통", "dfn_type":"특수장갑", "field":"D/B/S", "fes":false,
"weapon":"SR", "equipments":["모자", "헤어핀", "손목시계"], "matterials":["토템폴", "로혼치 사본"],
"skills":{
	"ex":[{
	"name":"하드보일드풍 하네츠키 샷", "cost":6,
	"content":`보유한 악행 1개당 스킬 코스트 <em>{cost}</em> 획득 (악행은 초기화됩니다.)
	적 1인에게 공격력 <em>{damage}%</em> 대미지, 대상 주변에 적이 있을 경우 튕기면서 공격력 <em>{damage}%</em> 대미지 (최대 11회)
	`,
	"values":{
		"cost":{"min":"0.5", "max":"0.7"},
		"damage":{"min":"179", "max":"340"}
	}
	}],
	"basic":[{
	"name":"느와르풍 하네츠키 어택",
	"content":`<em>30초</em>마다 원형 범위 내의 적에게 공격력 <em>{damage}%</em> 대미지
	`,
	"values":{
		"damage":{"min":"169", "max":"321"}
	}
	}],
	"enhance":[{
	"name":"사장님의 고져스한 기품",
	"content":`최대 체력 <em>{buff}%</em> 증가
	`,
	"values":{
		"buff":{"min":"14", "max":"26.6"}
	}
	}],
	"sub":[{
	"name":"사장님의 퍼펙트한 용병술",
	"content":`아군이 적 6명 처치 시 마다 악행 1개 적립, 악행은 최대 <em>{stack}</em>까지 중첩, 악행 1개당 방어력 <em>{debuff}%</em> 감소
	`,
	"values":{
		"stack":{"min":"3", "max":"6"},
		"debuff":{"min":"26.8", "max":"5.3"}
	}
	}]
},
"signature":{
	"name":"와인레드・어드마이어",
	"summary":`아루가 평소에도 애지중지 아끼는 고풍스러운 디자인의 반자동 저격소총.
	아루가 말하길, 새해를 맞이하며 연륜이 쌓인 만큼, 그 하드보일드함도 자신과 마찬가지로 더욱 레벨업했다는 모양이다.
	`,
	"brk_thr":{
		"t2":{"summary":"강화 스킬 <em>사장님의 고져스한 기품</em>을 <em>사장님의 고져스한 기품+</em>로 강화",
			"skill":{"idx":"enhance", "name":"사장님의 고져스한 기품+",
				"content":`
					공격 속도 <em>{buff01}</em> 증가
					추가로 최대 체력 <em>{buff1}%</em> 증가
				`,
				"values":{
					"buff01":{"min":"1400", "max":"2660"},
					"buff1":{"min":"14", "max":"26.6"}
				}
			}},
		"t3":{"summary":"실내 지형 전투력을 SS로 강화", 
			"field":"D/B/SS"
			},
		"t4":{"summary":"관통 특효 10% 가산"}
	},
},
"uniqueItem":{
	"name":"",
	"summary":``
},
"tags":["헤세드 1페"],
},{
"name":"아사기 무츠키", "variant":"new_year", "release":"2022.08.09",
"role":"딜러", "position":"BACK","atk_type":"신비", "dfn_type":"중장갑", "field":"D/S/B", "fes":false,
"weapon":"MG", "equipments":["장갑", "배지", "손목시계"], "matterials":["보이니치 사본", "안티키테라 장치"],
"skills":{
	"ex":[{
	"name":"신년의 심포니", "cost":2,
	"content":`아치형 범위 내의 적에게 공격력 <em>{damage}%</em> 대미지
	`,
	"values":{
		"damage":{"min":"159", "max":"302"}
	}
	}],
	"basic":[{
	"name":"소악마의 코러스",
	"content":`<em>50초</em>마다 직선 범위 내의 적에게 공격력 <em>{damage}%</em> 대미지
	소악마가 6중첩 상태일 경우 공격력 <em>{additional_damage}%</em> 추가 대미지
	`,
	"values":{
		"damage":{"min":"217", "max":"315"},
		"additional_damage":{"min":"117", "max":"169"}
	}
	}],
	"enhance":[{
	"name":"좀 더 즐겁게 노는 방법",
	"content":`공격력 <em>{buff}%</em> 증가
	`,
	"values":{
		"buff":{"min":"14", "max":"26.6"}
	}
	}],
	"sub":[{
	"name":"소악마의 귀여운 꿍꿍이",
	"content":`EX 스킬로 공격 시 대상이 3회 피해를 입을 때마다 소악마 1개 적립 (<em>56초</em>간)
	소악마는 최대 <em>6개</em>까지 중첩, 소악마 1개당 치명 대미지 <em>{buff}%</em> 증가
	`,
	"values":{
		"buff":{"min":"2.1", "max":"4.1"}
	}
	}]
},
"signature":{
	"name":"트릭 오어 트릿",
	"summary":`무츠키가 가지고 다니는 다목적 기관총.
	새해를 맞이해 꾸며 입은 만큼, 이번엔 얌전히 가방에 보관하고 있는 모양이지만, 언제든지 남을 골탕먹일 준비는 되어있다...고 무츠키는 웃으며 말한다.
	`,
	"brk_thr":{
		"t2":{"summary":"강화 스킬 <em>좀 더 즐겁게 노는 방법</em>을 <em>좀 더 즐겁게 노는 방법+</em>로 강화",
			"skill":{"idx":"enhance", "name":"좀 더 즐겁게 노는 방법+",
				"content":`
					방어 관통 수치 <em>{buff01}</em> 증가
					추가로 공격력 <em>{buff1}%</em> 증가
				`,
				"values":{
					"buff01":{"min":"360", "max":"684"},
					"buff1":{"min":"14", "max":"26.6"}
				}
			}},
		"t3":{"summary":"야외 지형 전투력을 SS로 강화", 
			"field":"D/SS/B"
			},
		"t4":{"summary":"신비 특효 10% 가산"}
	},
},
"uniqueItem":{
	"name":"",
	"summary":``
},
"tags":["광역", "서브딜", "고즈 1페"],
},{
"name":"오니카타 카요코", "variant":"new_year", "release":"2023.09.25",
"role":"서포터", "position":"MIDDLE", "atk_type":"신비", "dfn_type":"특수장갑", "field":"B/D/S", "fes":false,
"weapon":"HG", "equipments":["신발", "헤어핀", "부적"], "matterials":["볼프세크 강철", "아틀란티스 메달"],
"skills":{
	"ex":[{
	"name":"새해의 부적", "cost":2,
	"content":`자신을 제외한 아군 1인에게 신비 특효 <em>{buff}%</em> 가산 (<em>40초</em>간)
	부적 부여
	`,
	"values":{
		"buff":{"min":"48.8", "max":"92.8"}
	}
	}],
	"basic":[{
	"name":"고양이의 시간",
	"content":`<em>40초</em>마다 자신을 제외한 아군 1인에게 치명 수치 <em>{buff}</em>% 증가 (<em>25초</em>간)
	`,
	"values":{
		"buff":{"min":"20.8", "max":"39.5"}
	}
	}],
	"enhance":[{
	"name":"또 다른 오해",
	"content":`공격력 <em>{buff}%</em> 증가
	`,
	"values":{
		"buff":{"min":"14", "max":"26.6"}
	}
	}],
	"sub":[{
	"name":"보답 받는 인연",
	"content":`아군이 치명 공격 <em>200회</em> 성공 시 자신에게 공격력 <em>{buff1}%</em> 증가
	부적을 보유한 아군에게 신비 특효 <em>{buff2}%</em> 가산 (<em>50초</em>간)
	이후 아군의 부적을 모두 제거
	`,
	"values":{
		"buff1":{"min":"13.1", "max":"24.9"},
		"buff2":{"min":"22", "max":"41.9"}
	}
	}]
},
"signature":{
	"name":"데몬스 로어",
	"summary":`카요코가 늘 휴대하고 다니는 권총.
	사격할 때마다 엄청난 굉음을 내는 이 권총은 무례한 의뢰인을 쫒을 때뿐만 아니라, 새해의 액운을 쫒는 데에도 유용하게 쓰인다.
	`,
	"brk_thr":{
		"t2":{"summary":"강화 스킬 <em>또 다른 오해</em>을 <em>또 다른 오해+</em>로 강화",
			"skill":{"idx":"enhance", "name":"또 다른 오해+",
				"content":`
					이로운 효과 유지력 <em>{buff01}</em> 증가
					추가로 공격력 <em>{buff1}%</em> 증가
				`,
				"values":{
					"buff01":{"min":"1000", "max":"1900"},
					"buff1":{"min":"14", "max":"26.6"}
				}
			}},
		"t3":{"summary":"실내 지형 전투력을 SS로 강화", 
			"field":"B/D/SS"
			},
		"t4":{"summary":"신비 특효 10% 가산"}
	},
},
"uniqueItem":{
	"name":"",
	"summary":``
},
"tags":["신비 특효 버프"],
},{
"name":"이구사 하루카", "variant":"new_year", "release":"2023.09.25",
"role":"서포터", "position":"SPECIAL", "atk_type":"폭발", "dfn_type":"경장갑", "field":"D/S/D", "fes":false,
"weapon":"SG", "equipments":["신발", "가방", "손목시계"], "matterials":["만드라고라", "머리가 자라는 인형"],
"skills":{
	"ex":[{
	"name":"누가 허락했죠…!?", "cost":4,
	"content":`적 1인의 치명 저항력과 치명 대미지 저항률 <em>{debuff}%</em> 감소 (<em>50초</em>간)
	추가로 공격력 <em>{damage}%</em> 대미지
	`,
	"values":{
		"debuff":{"min":"21.8", "max":"41.5"},
		"damage":{"min":"182", "max":"345"}
	}
	}],
	"basic":[{
	"name":"확실하게 인사하기",
	"content":`<em>30초</em>마다 적 1인의 치명 대미지 저항률 <em>{debuff}%</em> 감소 (<em>20초</em>간)
	`,
	"values":{
		"debuff":{"min":"16.2", "max":"30.8"}
	}
	}],
	"enhance":[{
	"name":"용서못해용서못해",
	"content":`공격력 <em>{buff}%</em> 증가
	`,
	"values":{
		"buff":{"min":"14", "max":"26.6"}
	}
	}],
	"sub":[{
	"name":"모두를 위한 마음",
	"content":`아군의 코스트 회복력 <em>{cost}%</em> 증가
	`,
	"values":{
		"cost":{"min":"10.6", "max":"20.2"}
	}
	}]
},
"signature":{
	"name":"블로우 어웨이",
	"summary":`'벌레 같은 것'을 쫒는 데 사용되는 하루카의 산탄총.
	물론 진짜로 벌레를 처리하는 데에도 사용된다.
	`,
	"brk_thr":{
		"t2":{"summary":"강화 스킬 <em>용서못해용서못해</em>를 <em>용서못해용서못해+</em>로 강화",
			"skill":{"idx":"enhance", "name":"용서못해용서못해+",
				"content":`
					해로운 효과 유지력 <em>{buff01}</em> 증가
					추가로 공격력 <em>{buff1}%</em> 증가
				`,
				"values":{
					"buff01":{"min":"1000", "max":"1900"},
					"buff1":{"min":"14", "max":"26.6"}
				}
			}},
		"t3":{"summary":"야외 지형 전투력을 SS로 강화", 
			"field":"D/SS/D"
			},
		"t4":{"summary":"코스트 상한 +0.5"}
	},
},
"uniqueItem":{
	"name":"",
	"summary":``
},
"tags":["치명 디버프", "코스트 버프"],
},{
"name":"리쿠하치마 아루", "variant":"dress", "release":"2024.08.20",
"role":"서포터", "position":"BACK", "atk_type":"관통", "dfn_type":"중장갑", "field":"D/B/S", "fes":false,
"weapon":"SR", "equipments":["모자", "헤어핀", "목걸이"], "matterials":["이스탄불 로켓", "님루드 렌즈"],
"skills":{
	"ex":[{
	"name":"흥미로운 제안", "cost":3,
	"content":`자신을 제외한 아군 1인에게 치명 대미지 <em>{buff}%</em> 증가 (<em>30초</em>간)
	`,
	"values":{
		"buff":{"min":"47.7", "max":"83.4"}
	}
	}],
	"basic":[{
	"name":"유익한 거래",
	"content":`<em>50초</em>마다 자신을 제외한 체력이 가장 낮은 아군 1인에게 치유력 <em>{heal}%</em> 회복
	`,
	"values":{
		"heal":{"min":"79.8", "max":"151"}
	}
	}],
	"enhance":[{
	"name":"드레스 업",
	"content":`공격력 <em>{buff}%</em> 증가
	`,
	"values":{
		"buff":{"min":"14", "max":"26.6"}
	}
	}],
	"sub":[{
	"name":"유리한 거래",
	"content":`공격 시 <em>30%</em> 확률로 치명 저항력 <em>{debuff}%</em> 감소 (<em>13초</em>간) (쿨타임 <em>5초</em>)
	`,
	"values":{
		"debuff":{"min":"8", "max":"15.3"}
	}
	}]
},
"signature":{
	"name":"와인레드・어드마이어",
	"summary":`특별한 임무에도 떼어놓지 않는 아루의 반자동 저격소총.
	고풍스러운 자리와도 딱 맞는 디자인이다.
	`,
	"brk_thr":{
		"t2":{"summary":"강화 스킬 <em>드레스 업</em>를 <em>드레스 업+</em>로 강화",
			"skill":{"idx":"enhance", "name":"드레스 업+",
				"content":`
					공격력 <em>{buff01}</em> 증가
					추가로 공격력 <em>{buff1}%</em> 증가
				`,
				"values":{
					"buff01":{"min":"312", "max":"593"},
					"buff1":{"min":"14", "max":"26.6"}
				}
			}},
		"t3":{"summary":"실내 지형 전투력을 SS로 강화", 
			"field":"D/B/SS"
			},
		"t4":{"summary":"관통 특효 10% 가산"}
	},
},
"uniqueItem":{
	"name":"",
	"summary":``
},
"tags":["치명 대미지 버프", "서브힐"],
},{
"name":"아사기 무츠키", "variant":"dress", "release":"2026.09.15",
"role":"딜러", "position":"BACK","atk_type":"신비", "dfn_type":"중장갑", "field":"B/S/D", "fes":false,
"weapon":"MG", "equipments":["모자", "헤어핀", "손목시계"], "matterials":["볼프세크 강철", "디스코 콜간테"],
"skills":{
	"ex":[{
	"name":"폭연의 미뉴에트", "cost":6,
	"content":`적 1인에게 공격력 <em>{damage}%</em> 대미지
	`,
	"values":{
		"damage":{"min":"1740", "max":"3306"}
	}
	}],
	"basic":[{
	"name":"발밑을 조심해!",
	"content":`<em>30초</em>마다 원형 범위내의 적에게 치명 대미지 저항률 <em>{debuff}%</em> 감소 (<em>20초</em>간)
	원형 범위 내의 적에게 <em>1초</em>마다 공격력 <em>{damage}%</em> 대미지 (<em>10초</em>간)
	`,
	"values":{
		"debuff":{"min":"14", "max":"26.7"},
		"damage":{"min":"29.7", "max":"56.5"}
	}
	}],
	"enhance":[{
	"name":"더~ 재밌어질 거라구?",
	"content":`공격력 <em>{buff}%</em> 증가
	`,
	"values":{
		"buff":{"min":"14", "max":"26.6"}
	}
	}],
	"sub":[{
	"name":"모두 같이 놀자!",
	"content":`아군 스페셜 학생의 공격력 <em>{buff}%</em> 증가
	`,
	"values":{
		"buff":{"min":"14.2", "max":"27.1"}
	}
	}]
},
"signature":{
	"name":"트릭 오어 트릿",
	"summary":`무츠키가 가지고 다니는 다목적 기관총.
	재미있는 장난을 위해서라면 드레스 차림이라도 곁에서 떼 놓을 수 없다.
	`,
	"brk_thr":{
		"t2":{"summary":"강화 스킬 <em>더~ 재밌어질 거라구?</em>를 <em>더~ 재밌어질 거라구?+</em>로 강화",
			"skill":{"idx":"enhance", "name":"드레스 업+",
				"content":`
					방어 관통 수치 <em>{buff01}</em> 증가
					추가로 공격력 <em>{buff1}%</em> 증가
				`,
				"values":{
					"buff01":{"min":"360", "max":"684"},
					"buff1":{"min":"14", "max":"26.6"}
				}
			}},
		"t3":{"summary":"야외 지형 전투력을 SS로 강화", 
			"field":"B/SS/D"
			},
		"t4":{"summary":"코스트 상한 +0.5"}
	},
},
"uniqueItem":{
	"name":"",
	"summary":``
},
"tags":["일대일", "메인딜", "드럼통게 1페"],
},{
"name":"오니카타 카요코", "variant":"dress", "release":"2024.08.20",
"role":"딜러", "position":"MIDDLE", "atk_type":"관통", "dfn_type":"경장갑", "field":"S/B/D", "fes":false,
"weapon":"HG", "equipments":["모자", "헤어핀", "손목시계"], "matterials":["킴바야 유물", "보이니치 사본"],
"skills":{
	"ex":[{
	"name":"그림자 사격", "cost":5,
	"content":`적 1인에게 공격력 <em>{damage}%</em> 대미지 (이 공격은 적의 방어력을 <em>{ignore_dfs}%</em> 무시합니다.)
	자신이 잠입 행동 상태일 경우, 이 공격은 확정 치명으로 변경, 이후 자신의 잠입 행동 상태를 해제
	`,
	"values":{
		"damage":{"min":"762", "max":"1219"},
		"ignore_dfs":{"min":"48", "max":"64"}
	}
	}],
	"basic":[{
	"name":"되찾는 감각",
	"content":`<em>25초</em>마다 치명 대미지 <em>{buff}%</em> 증가 (<em>16초</em>간)
	`,
	"values":{
		"buff":{"min":"13.5", "max":"25.8"}
	}
	}],
	"enhance":[{
	"name":"암살자의 눈",
	"content":`치명 대미지 <em>{buff}%</em> 증가
	`,
	"values":{
		"buff":{"min":"14", "max":"26.6"}
	}
	}],
	"sub":[{
	"name":"잠입 행동",
	"content":`전술 입장 시 잠입 행동 상태가 되며, 공격을 받으면 잠입 행동 상태 해제
	잠입 행동이 해제된 뒤 10초 동안 공격을 받지 않으면 다시 잠입 행동 상태로 변경
	잠입 행동 상태일 경우 자신의 치명 대미지 <em>{buff}%</em> 증가
	`,
	"values":{
		"buff":{"min":"33.6", "max":"63.8"}
	}
	}]
},
"signature":{
	"name":"데몬스 로어",
	"summary":`카요코가 항상 소지하고 다니는 권총.
	소음기가 달려 있어, 비밀스러운 잠입 임무에도 실용적이다.
	`,
	"brk_thr":{
		"t2":{"summary":"강화 스킬 <em>암살자의 눈</em>를 <em>암살자의 눈+</em>로 강화",
			"skill":{"idx":"enhance", "name":"암살자의 눈+",
				"content":`
					치명 대미지 <em>{buff01}</em> 증가
					추가로 치명 대미지 <em>{buff1}%</em> 증가
				`,
				"values":{
					"buff01":{"min":"2000", "max":"3800"},
					"buff1":{"min":"14", "max":"26.6"}
				}
			}},
		"t3":{"summary":"시가지 지형 전투력을 SS로 강화", 
			"field":"SS/B/D"
			},
		"t4":{"summary":"관통 특효 10% 가산"}
	},
},
"uniqueItem":{
	"name":"",
	"summary":``
},
"tags":["메인딜", "방어무시"],
},{
"name":"이구사 하루카", "variant":"dress", "release":"2026.09.15",
"role":"딜러", "position":"FRONT", "atk_type":"폭발", "dfn_type":"경장갑", "field":"S/B/D", "fes":false,
"weapon":"SG", "equipments":["장갑", "헤어핀", "손목시계"], "matterials":["파에스토스 원반", "로마 12면체"],
"skills":{
	"ex":[{
	"name":"이 몸을 바쳐서", "cost":4,
	"content":`적 1인에게 공격력 <em>{damage}%</em> 대미지 (이 공격은 적의 방어력을 <em>{ignore_dfs}%</em> 무시합니다)
	자신에게 최대 체력의 <em>6.8%</em> 만큼 고정 대미지
	(해당 스킬로 하루카(드레스)는 퇴각하지 않습니다)
	`,
	"values":{
		"damage":{"min":"778", "max":"1245"},
		"ignore_dfs":{"min":"35", "max":"68"}
	}
	}],
	"basic":[{
	"name":"꽃이 피듯이",
	"content":`<em>35초</em>마다 공격력 <em>{buff}%</em> 증가 (<em>30초</em>간)
	치유력 <em>{heal}%</em> 회복 (현재 체력에 비례하여 회복량이 1~2배로 변경) (체력이 낮을 수록 회복량 증가)
	`,
	"values":{
		"buff":{"min":"20.7", "max":"39.4"},
		"heal":{"min":"68.2", "max":"129"}
	}
	}],
	"enhance":[{
	"name":"잡초의 염원",
	"content":`공격력 <em>{buff}%</em> 증가
	`,
	"values":{
		"buff":{"min":"14", "max":"26.6"}
	}
	}],
	"sub":[{
	"name":"사라져주세요사라져주세요!",
	"content":`피해를 입을 경우 용서 못해 1개 적립 (<em>30초</em>간) (쿨타임 <em>4초</em>)
	용서 못해는 최대 3개까지 중첩, 용서 못해 1개당 치명 대미지 <em>{buff}%</em> 증가
	`,
	"values":{
		"buff":{"min":"5.3", "max":"10.2"}
	}
	}]
},
"signature":{
	"name":"블로우 어웨이",
	"summary":`벌레 혹은 적들을 쫒아내는 데에 사용되는 하루카의 산탄총.
	물론 둘 사이의 차이는 거의 없다.
	`,
	"brk_thr":{
		"t2":{"summary":"강화 스킬 <em>잡초의 염원</em>를 <em>잡초의 염원+</em>로 강화",
			"skill":{"idx":"enhance", "name":"잡초의 염원+",
				"content":`
					치명 대미지 <em>{buff01}</em> 증가
					추가로 공격력 <em>{buff1}%</em> 증가
				`,
				"values":{
					"buff01":{"min":"2000", "max":"3800"},
					"buff1":{"min":"14", "max":"26.6"}
				}
			}},
		"t3":{"summary":"시가지 지형 전투력을 SS로 강화", 
			"field":"SS/B/D"
			},
		"t4":{"summary":"폭발 특효 10% 가산"}
	},
},
"uniqueItem":{
	"name":"",
	"summary":``
},
"tags":["메인딜", "드럼통게 2페"],
},{
"name":"쿠로다테 하루나", "variant":"normal", "release":"2021.11.09",
"role":"딜러", "position":"BACK", "atk_type":"신비", "dfn_type":"중장갑", "field":"S/D/B", "fes":false,
"weapon":"SR", "equipments":["모자", "헤어핀", "손목시계"], "matterials":["로혼치 사본", "만드라고라"],
"skills":{
	"ex":[{
	"name":"꿰뚫는 엘레강스", "cost":4, "cost_reduce":1,
	"content":`직선 범위 내의 적에게 공격력 <em>{damage}%</em> 대미지
	적을 관통할 때마다 대미지 <em>10%</em> 감소 (최대 <em>30%</em> 대미지)
	`,
	"values":{
		"damage":{"min":"506", "max":"887"}
	}
	}],
	"basic":[{
	"name":"폭발하는 엑조틱",
	"content":`<em>30초</em>마다 적 1인에게 공격력 <em>{damage}%</em> 대미지
	`,
	"values":{
		"damage":{"min":"200", "max":"380"}
	}
	}],
	"enhance":[{
	"name":"미식가의 기품",
	"content":`최대 체력 <em>{buff}%</em> 증가
	`,
	"values":{
		"buff":{"min":"14", "max":"26.6"}
	}
	}],
	"sub":[{
	"name":"미식가의 신중함",
	"content":`이동하지 않으면 공격력 <em>{buff}%</em> 증가
	`,
	"values":{
		"buff":{"min":"10", "max":"19.1"}
	}
	}]
},
"signature":{
	"name":"Ideal",
	"summary":`하루나가 다루는 우아한 느낌의 저격소총.
	그 스코프를 통해 바라보는 건 궁극의 미식에 이르기 위한 길이라고 본인은 주장한다.
	`,
	"brk_thr":{
		"t2":{"summary":"강화 스킬 <em>미식가의 기품</em>를 <em>미식가의 기품+</em>로 강화",
			"skill":{"idx":"enhance", "name":"미식가의 기품+",
				"content":`
					최대 체력 <em>{buff01}</em> 증가
					추가로 최대 체력 <em>{buff1}%</em> 증가
				`,
				"values":{
					"buff01":{"min":"3501", "max":"6652"},
					"buff1":{"min":"14", "max":"26.6"}
				}
			}},
		"t3":{"summary":"시가지 지형 전투력을 SS로 강화", 
			"field":"SS/D/B"
			},
		"t4":{"summary":"신비 특효 10% 가산"}
	},
},
"uniqueItem":{
	"name":"",
	"summary":``
},
"tags":["서브딜", "뉴비"],
}
]
