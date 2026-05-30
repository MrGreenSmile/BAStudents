let students = [
{"name":"츠카츠키 리오",
"school":"밀레니엄 사이언스 스쿨", "club":"세미나",
"role":"서포터", "position":"SPECIAL","atk_type":"신비", "dfn_type":"탄력장갑", "field":"A/D/S", "fes":true,
"weapon":"HG", "equipments":["신발", "헤어핀", "손목시계"], "matterials":["디스코 콜간테", "수정 하니와"],
"signature":{
	"name":"입안자",
	"summary":`리오의 호신용 권총.
사격에 서툰 리오지만, 키보토스에서 총이 없다는 것은 비합리적이라는 이유로 소지중이다.
`},
"uniqueItem":{"name":"",
"summary":``
},
"skills":{
	"ex":[{
	"name":"빅 시스터", "cost":2,
	"content":`EX 스킬 즉시 드로우 후 아군 1인의 EX 스킬 카드 복제 (복제 카드 사용 <em>1회</em>까지)
대상의 공격력 <em>35.4%</em> 증가 (<em>20</em>초간)
(복제 카드는 대상의 EX 스킬 카드 상태를 따라감)
(복제 카드의 코스트는 대상 EX 스킬의 기본 코스트에서 1만큼 감소한 값을 가짐) (최소 0)`
	}],"basic":[{
	"name":"유일한 진실",
	"content":`<em>30초</em>마다 적 1인에게 방어력 <em>19.6%</em> 감소 (<em>19초</em>간)
공격력 <em>185%</em> 대미지`
	}],"enhance":[{
	"name":"별을 쫓는 자",
	"content":`공격력 <em>14%</em> 증가`
	}],"sub":[{
	"name":"아방가르드",
	"content":`아군의 공격력 <em>9.1%</em> 증가`
	}]},
	"tags":["퀵드로우", "공격력 증가"],
},{
"name":"우시오 노아",
"school":"밀레니엄 사이언스 스쿨", "club":"세미나",
"role":"서포터", "position":"MIDDLE","atk_type":"신비", "dfn_type":"특수장갑", "field":"D/B/S", "fes":false,
"weapon":"HG", "equipments":["신발", "헤어핀", "부적"], "matterials":["파에스토스 원반", "에테르"],
"signature":{
	"name":"서기의 결단",
	"summary":`노아가 사용하는 컨버전 키트가 부착된 권총.
개머리판을 길게 늘여 견착하면 기관단총처럼 빠른 연사로 적을 제압할 수 있다.
`}, "uniqueItem":{"name":"",
"summary":``
},
"skills":{
	"ex":[{
	"name":"기록의 생명은 속도랍니다", "cost":3,
	"content":`지정한 적 1인에게 집중 공격 (<em>40초</em>간)
방어력 <em>21.3%</em> 감소 (<em>40초</em>간)`
	}],"basic":[{
	"name":"허점 발견!",
	"content":`<em>30초</em>마다 적 1인에게 공격력 <em>399%</em> 대미지`
	}],"enhance":[{
	"name":"서기의 여유",
	"content":`최대 체력 <em>14%</em> 증가`
	}],"sub":[{
	"name":"서기의 고집",
	"content":`기본 스킬 사용 시 해로운 효과 유지력 <em>16.9%</em> 증가 (<em>13초</em>간)`
	}]},
	"tags":["집중공격", "고즈", "예소드"],
},{
"name":"하야세 유우카",
"school":"밀레니엄 사이언스 스쿨", "club":"세미나",
"role":"탱커", "position":"FRONT","atk_type":"폭발", "dfn_type":"중장갑", "field":"B/B/A", "fes":false,
"weapon":"SMG", "equipments":["신발", "배지", "부적"], "matterials":["님루드 렌즈", "안티키테라 장치"],
"signature":{
	"name":"로직 앤 리즌",
	"summary":`유우카가 사용하는 두 정의 기관단총.
유우카가 합리적이고 이성적인 판단을 내릴 때 도움을 준다.
`}, "uniqueItem":{"name":"함수 계산기",
"summary":`유우카가 늘 몸에서 떼놓지 않는 함수 계산기.
뛰어난 암산 실력을 보유하고 있음에도 불구하고, 유우카는 언제나 완벽을 추구하기 위해 검산용으로 계산기를 사용하고 있다.
`
},
"skills":{
	"ex":[{
	"name":"Q.E.D", "cost":3,
	"content":"치유력 <em>190%</em> 보호막 (<em>15초</em>간)"
	}],"basic":[{
	"name":"I.F.F",
	"content":"<em>15초</em>마다 적 1인에게 공격력 <em>301%</em> 대미지"
	}],"enhance":[{
	"name":"최적해 도출",
	"content":"방어력 <em>14%</em> 증가"
	}],"sub":[{
	"name":"고속 암산",
	"content":"엄폐 시 치유력 <em>75%</em> 회복 (쿨타임 <em>10초</em>)"
	}]},
	"tags":["탱커", "회피탱", "보호막"],
},{
"name":"쿠로사키 코유키",
"school":"밀레니엄 사이언스 스쿨", "club":"세미나",
"role":"딜러", "position":"BACK","atk_type":"신비", "dfn_type":"중장갑", "field":"S/D/B", "fes":false,
"weapon":"MG", "equipments":["장갑", "헤어핀", "손목시계"], "matterials":["보이니치 사본", "수정 하니와"],
"signature":{
	"name":"멀리<건>",
	"summary":`코유키가 당해온 온갖 수모를 함께 겪은 기관총.
바닷물에 빠진 적도 있어, 수리하는 과정에서 색이 바뀌었다. 성능과는 별개로, 사소한 것은 신경쓰지 않는 코유키를 닮아 튼튼하다.
`}, "uniqueItem":{"name":"승부 동전",
"summary":`코유키가 손수 구멍을 뚫은 동전.
오락기를 공짜로 쓰기 위한 용도였지만, 보안 기술의 발전으로 인해 현재는 무용지물이 되었다.
`
},
"skills":{
	"ex":[{
	"name":"뜻 밖의 변수", "cost":4,
	"content":`원형 범위 내의 적에게 무작위 폭탄 1개를 투척하여 대미지
총탄: 공격력 <em>233%</em> 대미지
전기장: 공격력 <em>221%</em> 대미지
화염: 공격력 <em>209%</em> 대미지`
	}],"basic":[{
	"name":"하나? 혹은 둘!",
	"content":`<em>30초</em>마다 적 1인에게 공격력 <em>202%</em> 대미지
대상 주변에 적이 있을 경우 최대 2인에게 동일한 대미지
즉시 재장전`
	}],"enhance":[{
	"name":"기적을 믿나요?",
	"content":`공격력 <em>14%</em> 증가`
	}],"sub":[{
	"name":"나비효과",
	"content":`EX 스킬 발동과 동시에 사용한 폭탄의 종류에 따라 공격력 증가 (<em>40초</em>간)
총탄: 공격력 <em>15.3%</em> 증가
전기장: 공격력 <em>14.5%</em> 증가
화염: 공격력 <em>13.7%</em> 증가`
	}]},
	"tags":["범위딜", "연타"],
},{
"name":"하야세 유우카(체육복)",
"school":"밀레니엄 사이언스 스쿨", "club":"세미나",
"role":"탱커", "position":"FRONT","atk_type":"신비", "dfn_type":"특수장갑", "field":"B/D/S", "fes":false,
"weapon":"SMG", "equipments":["신발", "가방", "목걸이"], "matterials":["님루드 렌즈", "위니페소키 스톤"],
"signature":{
	"name":"로직 앤 리즌",
	"summary":`유우카가 사용하는 두 정의 기관단총.
이번 황륜대제에서도 로직 앤 리즌은 유우카의 합리적이고 이성적인 판단을 대변한다.
`},
"uniqueItem":{"name":"",
"summary":`
`},
"skills":{
	"ex":[{
	"name":"R.S.G!", "cost":3,
	"content":`지정한 위치로 이동 후 치유력 <em>168%</em> 보호막 (<em>25초</em>간)
깃발을 소환하여 자신을 제외한 아군 3인을 깃발 위치로 이동시키고, 깃발에 도착한 대상에게 치유력 168% 보호막 (<em>25초</em>간)`
	}],"basic":[{
	"name":"수분 보충",
	"content":`
<em>30초</em>마다 자신에게 보호막이 없을 경우 치유력 <em>115%</em> 보호막 (<em>23초</em>간)
보호막이 있을 경우 치유력 <em>12.3%</em> 증가 (<em>90초</em>간)
(치유력 증가 효과는 최대 <em>3회</em> 중첩)`
	}],"enhance":[{
	"name":"수학적 경기전략",
	"content":`공격 속도 <em>14%</em> 증가`
	}],"sub":[{
	"name":"최적 동선 산출",
	"content":`이동 후 정지하면 신비 특효 <em>31.1%</em> 가산 (<em>20초</em>간)`
	}]},
	"tags":["탱커", "아군 이동"],
},{
"name":"하야세 유우카(파자마)",
"school":"밀레니엄 사이언스 스쿨", "club":"세미나",
"role":"탱커", "position":"FRONT","atk_type":"폭발", "dfn_type":"중장갑", "field":"D/S/B", "fes":false,
"weapon":"SMG", "equipments":["신발", "가방", "목걸이"], "matterials":["님루드 렌즈", "고대 전지"],
"signature":{
	"name":"로직 앤 리즌",
	"summary":`유우카가 사용하는 두 정의 기관단총.
그녀의 합리와 이성을 증명해 온 두 자루의 총기도 만성적인 불면증만큼은 쫓을 수가 없었다.
`},
"uniqueItem":{"name":"",
"summary":`
`},
"skills":{
	"ex":[{
	"name":"위기일발 페로로 님", "cost":2,
	"content":`적 1인에게 공격력 <em>467%</em> 대미지
방어력 <em>16.1%</em> 감소 (<em>25초</em>간)
대상이 경장갑인 경우 방어력 <em>32.2%</em> 감소 (<em>25초</em>간)`
	}],"basic":[{
	"name":"숙면을 위한 케어",
	"content":`<em>30초</em>마다 치유력 <em>72%</em> 회복`
	}],"enhance":[{
	"name":"달콤한 속잡",
	"content":`최대 체력 <em>14%</em> 증가`
	}],"sub":[{
	"name":"휴식 뒤의 나른함",
	"content":`회복 효과를 받을 때마다 방어력 <em>3.6%</em> 증가 (<em>30초</em>간) (최대 7회까지 중첩)`
	}]},
	"tags":["탱커", "경장갑 방감"],
},{
"name":"우시오 노아(파자마)",
"school":"밀레니엄 사이언스 스쿨", "club":"세미나",
"role":"딜러", "position":"MIDDLE","atk_type":"관통", "dfn_type":"경장갑", "field":"B/S/D", "fes":false,
"weapon":"HG", "equipments":["장갑", "헤어핀", "손목시계"], "matterials":["머리가 자라는 인형", "파에스토스 원반"],
"signature":{
	"name":"서기의 결단",
	"summary":`노아가 사용하는 컨버전 키트가 부착된 권총.
문진으로도 사용할 수 있는 적당한 무게의 이 권총은 노아가 사랑하는 심야의 독서에 곁들이기에 걸맞다.
`},
"uniqueItem":{"name":"",
"summary":`
`},
"skills":{
	"ex":[{
	"name":"소등 후에는 조용히", "cost":5,
	"content":`적 1인에게 공격력 <em>759%</em> 대미지
추가로 약점 파악 효과 적용 (<em>20초</em>간)
대상은 효과가 걸려있는 상태에서 피격 당할 때마다 노아(파자마)의 공격력의 17.6% 추가 대미지 (이 대미지는 치명 공격이 발동하지 않음)
(최대 <em>240회</em>까지 적용)`
	},{
	"name":"쉿, 소등합니다.", "cost":3,
	"content":`적 1인에게 공격력 <em>886%</em> 대미지
추가로 약점 파악 효과 적용 (<em>20초</em>간)
대상은 효과가 걸려있는 상태에서 피격 당할 때마다 노아(파자마) 공격력의 <em>20.5%</em> 추가 대미지 (이 대미지는 치명 공격이 발동하지 않음)
(최대 <em>240회</em>까지 적용)`
	}],"basic":[{
	"name":"애착 베개",
	"content":`소등 후에는 조용히 <em>2회</em> 사용 시 코스트 회복력 <em>423</em> 만큼 증가 (<em>30초</em>간)
소등 후에는 조용히를 쉿, 소등합니다.로 변경 (EX 사용 1회까지)`
	}],"enhance":[{
	"name":"서기의 냉철함",
	"content":`공격력 <em>14%</em> 증가`
	}],"sub":[{
	"name":"서기의 예리함",
	"content":`일반 공격 <em>10회</em>마다 관통 특효 <em>46.8%</em> 가산 (<em>10초</em>간)`
	}]},
	"tags":["호버크래프트", "2페이즈", "메인딜"],
},{
"name":"쿠로사키 코유키(파자마)",
"school":"밀레니엄 사이언스 스쿨", "club":"세미나",
"role":"서포터", "position":"BACK","atk_type":"신비", "dfn_type":"경장갑", "field":"S/D/B", "fes":false,
"weapon":"MG", "equipments":["신발", "배지", "손목시계"], "matterials":["고대 전지", "만드라고라"],
"signature":{
	"name":"멀리<건>",
	"summary":`코유키와 함께 각종 수난을 헤쳐 온 기관총.
온갖 말썽을 터뜨리는 주인과 달리, 묵묵히 옆자리를 보좌하는 듬직함을 자랑한다. .......그냥 단순히 별생각이 없는 것일 수도 있지만.
`},
"uniqueItem":{"name":"",
"summary":`
`},
"skills":{
	"ex":[{
	"name":"이럴줄은 몰랐다구요!", "cost":3,
	"content":`아군 1인의 해로운 효과 1개 제거
스트라이커 아군에게 치명 대미지 <em>8.1%</em> 증가 (<em>30초</em>간)
이번 스킬로 해로운 효과를 제거한 경우, 이 스킬의 침여 대미지 증가 효과 3배로 증가`
	}],"basic":[{
	"name":"와장창 혹은 우당탕",
	"content":`<em>40초</em>마다 부채꼴범위 내의 적에게 공격력 <em>234%</em> 대미지
초대형 대상에게 공격력 <em>93.6%</em> 추가 대미지`
	}],"enhance":[{
	"name":"밤샘의 미학",
	"content":`공격력 <em>14%</em> 증가`
	}],"sub":[{
	"name":"파자마 효과",
	"content":`아군의 이동속도 <em>91.%</em> 증가`
	}]},
	"tags":["시로&쿠로", "디버프 해제", "이속 버프"],
},{
"name":"스나오오카미 시로코",
"school":"아비도스 종합고등학교", "club":"아비도스 학생회",
"role":"딜러", "position":"MIDDLE","atk_type":"폭발", "dfn_type":"경장갑", "field":"S/B/D", "fes":false,
"weapon":"AR", "equipments":["모자", "헤어핀", "손목시계"], "matterials":["파에스토스 원반", "보이니치 사본"],
"signature":{
	"name":"WHITE FANG 465",
	"summary":`시로코가 애용하는 돌격소총.
늘 꼼꼼하게 정비해 두기 때문에 어떤 상황에서도 준비 만전이다.
`},
"uniqueItem":{"name":"시로코의 드론",
"summary":`시로코가 늘 휴대하고 다니는 드론.
시로코 본인은 운동할 때 쓰는 촬영용 드론이라고 주장하지만, 촬영과 상관없는 여러 '부가 장치'가 장착되어 있다.
`},
"skills":{
	"ex":[{
	"name":"드론 소환 : 화력 지원", "cost":2,
	"content":`적 1인에게 공격력 <em>400%</em> 대미지`
	}],"basic":[{
	"name":"수류탄 투척",
	"content":`<em>25초</em>마다 원형 범위 내의 적에게 공격력 <em>193%</em> 대미지`
	}],"enhance":[{
	"name":"약점 노리기",
	"content":`치명 수치 <em>14%</em> 증가`
	}],"sub":[{
	"name":"고속 연사",
	"content":`일반 공격 시 <em>20%</em> 확률로 공격속도 <em>30.2%</em> 증가. (<em>30초</em>간) (쿨타임 (<em>25초</em>)`
	}]},
	"tags":["연타", "타켓전환"],
},{
"name":"타카나시 호시노",
"school":"아비도스 종합고등학교", "club":"아비도스 학생회",
"role":"딜러", "position":"FRONT","atk_type":"관통", "dfn_type":"중장갑", "field":"D/S/B", "fes":false,
"weapon":"SG", "equipments":["신발", "가방", "부적"], "matterials":["네브라 디스크", "님루드 렌즈"],
"signature":{
	"name":"호루스의 눈+진압 방패 '아이언 호루스'",
	"summary":`호시노가 애용하는 심플한 디자인의 산탄총.
게으름 부리길 좋아하는 호시노이지만 총기의 상태만큼은 언제나 완벽하다.
`},
"uniqueItem":{"name":"어디서든 입장권",
"summary":`호시노가 "어디서든 꿈나라로 입장할 수 있다"라고 주장하는 베개.
호시노의 말대로 굉장히 부드럽고 푹신하지만, 지금은 같은 제품을 구할 수 없다고 한다.
`},
"skills":{
	"ex":[{
	"name":"전술 진압", "cost":4,
	"content":`부채꼴 범위 내의 적에게 공격력 <em>435%</em> 대미지`
	}],"basic":[{
	"name":"응급 치료",
	"content":`체력 <em>30%</em> 이하 시 치유력 <em>100%</em> 지속 회복 (<em>20초</em>간) (전투 당 <em>1회</em>)`
	}],"enhance":[{
	"name":"대책 위원회의 부장",
	"content":`방어력 <em>14%</em> 증가`
	}],"sub":[{
	"name":"진압 숙련",
	"content":`EX 스킬 사용 중 치유력 <em>108%</em> 보호막`
	}]},
	"tags":["기절", "서브딜", "탱커"],
},{
"name":"쿠로미 세리카",
"school":"아비도스 종합고등학교", "club":"아비도스 학생회",
"role":"딜러", "position":"MIDDLE","atk_type":"폭발", "dfn_type":"경장갑", "field":"A/D/A", "fes":false,
"weapon":"SG", "equipments":["신발", "가방", "부적"], "matterials":["파에스토스 원반", "에테르"],
"signature":{
	"name":"신시어리티",
	"summary":`세리카가 아르바이트를 나갈 때 늘 휴대하는 돌격소총.
세리카의 성실함을 증명하듯 언제나 깨끗이 정비되어 있다.
`},
"uniqueItem":{"name":"세리카의 스포츠 백",
"summary":`세리카의 검은색 스포츠 백.
공부용, 아르바이트용, 운동용, 정비용... 뭐든 집어넣고 꺼낼 수 있는 만능 가방이다.
`},
"skills":{
	"ex":[{
	"name":"걸리적거리잖아!", "cost":2,
	"content":`즉시 재장전
공격력 <em>35.6%</em> 증가 (<em>30초</em>간)`
	}],"basic":[{
	"name":"조준 사격",
	"content":`<em>25초</em>마다 적 1인에게 공격력 <em>223%</em> 대미지`
	}],"enhance":[{
	"name":"알바생의 근성",
	"content":`공격력 <em>14%</em> 증가`
	}],"sub":[{
	"name":"대책위의 분노",
	"content":`EX 스킬 사용 시 공격속도 <em>20.1%</em> 증가 (<em>30초</em>간)`
	}]},
	"tags":["평타딜", "카이텐져", "서브딜"],
},{
"name":"이자요이 노노미",
"school":"아비도스 종합고등학교", "club":"아비도스 학생회",
"role":"딜러", "position":"BACK","atk_type":"관통", "dfn_type":"경장갑", "field":"A/A/D", "fes":false,
"weapon":"MG", "equipments":["모자", "헤어핀", "손목시계"], "matterials":["네브라 디스크", "에테르"],
"signature":{
	"name":"미니 No.5",
	"summary":`노노미가 사용하는 기관총.
<미니 No.5>라는 이름과 어울리지 않게 그 무게는 절대 가볍지 않다.
`},
"uniqueItem":{"name":"비밀 버킷 리스트",
"summary":`노노미가 남몰래 작성 중인 노트.
언젠가 대책위원회의 멤버들과 함께 하고 싶은 일들이 적혀 있다.
`},
"skills":{
	"ex":[{
	"name":"혼날 시간이에요~♣", "cost":5,
	"content":`부채꼴 범위 내의 적에게 공격력 <em>432%</em> 대미지`
	}],"basic":[{
	"name":"짜안~☆",
	"content":`<em>30초</em>마다 공격력 <em>21.8%</em> 증가 (<em>20초</em>간)`
	}],"enhance":[{
	"name":"떽~이에요!",
	"content":`치명 대미지 <em>14%</em> 증가`
	}],"sub":[{
	"name":"깨끗하게 청소해요~♧",
	"content":`공격 시 대형 대상에게 공격력 <em>6.7%</em> 추가 대미지`
	}]},
	"tags":["범위딜", "스테이지"],
},{
"name":"오쿠소라 아야네",
"school":"아비도스 종합고등학교", "club":"아비도스 학생회",
"role":"힐러", "position":"SPECIAL","atk_type":"관통", "dfn_type":"경장갑", "field":"D/A/A", "fes":false,
"weapon":"HG", "equipments":["신발", "헤어핀", "목걸이"], "matterials":["네브라 디스크", "볼프세크 강철"],
"signature":{
	"name":"상식적 수단",
	"summary":`귀여운 디자인의 권총.
아야네 앞에서 상식적인 말과 행동만 한다면 볼 일은 거의 없다.
`},
"uniqueItem":{"name":"",
"summary":`
`},
"skills":{
	"ex":[{
	"name":"특급 송달 : 전투 지원품", "cost":4,
	"content":`원형 범위 내의 아군에게 치유력 <em>118%</em> 회복`
	}],"basic":[{
	"name":"학습 지원",
	"content":`<em>30초</em>마다 원형 범위 내의 아군에게 치명 저항력 <em>15.5%</em> 증가`
	}],"enhance":[{
	"name":"자기 계발",
	"content":`치유력 <em>14%</em> 증가`
	}],"sub":[{
	"name":"사기 충전",
	"content":`아군의 최대 체력 <em>9.1%</em> 증가`
	}]},
	"tags":["범위힐"],
},{
"name":"쿠로미 세리카(새해)",
"school":"아비도스 종합고등학교", "club":"아비도스 학생회",
"role":"서포터", "position":"SPECIAL","atk_type":"관통", "dfn_type":"특수장갑", "field":"C/C/S", "fes":false,
"weapon":"HG", "equipments":["신발", "가방", "손목시계"], "matterials":["파에스토스 원반", "네브라 디스크"],
"signature":{
	"name":"신시어리티",
	"summary":`세리카가 아르바이트를 나갈 때 늘 휴대하는 돌격소총.
무녀 아르바이트 또한 예외가 아닌지라, 새해맞이 행사장에서 난동을 피우는 문제아들을 조용히 만드는 데에도 쓰인다.
`},
"uniqueItem":{"name":"",
"summary":`
`},
"skills":{
	"ex":[{
	"name":"아르바이트에 방해야!", "cost":3,
	"content":`아치형 범위 내의 적에게 공격력 <em>247%</em> 대미지
치명 대미지 <em>21.3%</em> 감소 (<em>30초</em>간)`
	}],"basic":[{
	"name":"모두! 무녀가 응원해 줄게!",
	"content":`<em>40초</em>마다 원형 범위 내의 아군에게 공격력 <em>8.6%</em> 증가 (<em>30초</em>간)`
	}],"enhance":[{
	"name":"무녀 알바생의 고집",
	"content":`공격력 <em>14%</em> 증가`
	}],"sub":[{
	"name":"무녀 알바생의 집념",
	"content":`아군의 치명 대미지 저항률 <em>9.1%</em> 증가`
	}]},
	"tags":["실내 헤세드", "뉴비"],
},{
"name":"타카나시 호시노(무장)(방어형)",
"school":"아비도스 종합고등학교", "club":"아비도스 학생회",
"role":"탱커", "position":"FRONT","atk_type":"신비", "dfn_type":"중장갑", "field":"A/S/D", "fes":true,
"weapon":"SG", "equipments":["모자", "가방", "손목시계"], "matterials":["네브라 디스크", "이스탄불 로켓"],
"signature":{
	"name":"호루스의 눈 + 진압 방패 '아이언 호루스'",
	"summary":`호시노가 애용하는 심플한 디자인의 산탄총.
호시노가 운용하는 무장 시스템의 핵심을 담당하고 있다.
`},
"uniqueItem":{"name":"",
"summary":`
`},
"skills":{
	"ex":[{
	"name":"방어태세 강화", "cost":4,
	"content":`지정한 위치로 이동 후 엄폐물의 역할을 하는 방패를 들어올려 엄폐 상태 부여 및 공격력 <em>82.5%</em> 증가 (<em>40초</em>간)
호시노(무장) 최대 체력의 <em>39.5%</em>를 엄폐물이 추가로 가집니다. (엄폐물의 망어 타입은 호시노(무장)과 동일합니다.)`
	}],"basic":[{
	"name":"플레이트 교체",
	"content":`<em>40초</em>마다 방탄 플레이트를 장착하여 받는 대미지량 <em>12.7%</em> 감소 (방탄 플레이트는 <em>25회</em> 피격 시 해제)`
	}],"enhance":[{
	"name":"근거리 전투체계",
	"content":`공격력 <em>11.2%</em>, 최대 체력 <em>11.2%</em> 증가`
	}],"sub":[{
	"name":"유효한 전술",
	"content":`공격 시 <em>20%</em> 확률로 방어력 <em>10.1%</em> 감소 (<em>20초</em>간) (쿨타임 <em>5초</em>)`
	}]},
	"tags":["엄폐 상태", "위치이동", "호크마", "예소드2페"],
},{
"name":"타카나시 호시노(무장)(공격형)",
"school":"아비도스 종합고등학교", "club":"아비도스 학생회",
"role":"딜러", "position":"FRONT","atk_type":"신비", "dfn_type":"중장갑", "field":"A/S/D", "fes":true,
"weapon":"SG", "equipments":["모자", "가방", "손목시계"], "matterials":["네브라 디스크", "이스탄불 로켓"],
"signature":{
	"name":"호루스의 눈 + 보조 권총",
	"summary":`호시노가 평소 사용하는 산탄총과 소중히 간직하고 있던 권총의 조합.
적극적인 공세로 적의 방어를 돌파할 때 운용한다.
`},
"uniqueItem":{"name":"",
"summary":`
`},
"skills":{
	"ex":[{
	"name":"집중 돌파", "cost":6,
	"content":`적 1인에게 공격력 <em>78.5%</em> 대미지
원형 범위 내의 적에게 공격력 <em>264%</em> 대미지`
	}],"basic":[{
	"name":"권총 속사",
	"content":`패스트 로딩 용 잔탄 수가 0이 될 시, 적 1인에게 공격력 <em>211%</em> 대미지`
	}],"enhance":[{
	"name":"전술 시야 확장",
	"content":`일반 공격 사거리 <em>300</em>, 치명 대미지 <em>11.2%</em> 증가`
	}],"sub":[{
	"name":"제압 사격",
	"content":`모든 공격이 적의 방어력을 <em>60%</em> 무시
공격력 <em>7.4%</em> 증가
EX 스킬 및 기본 스킬 사용 시 즉시 재장전 후, 최초의 일반 공격은 부채꼴 범위 내의 적에게 공격력 <em>79%</em> 대미지`
	}]},
	"tags":["범위딜", "페로로질라"],
},{
"name":"스나오오카미 시로코(라이딩)",
"school":"아비도스 종합고등학교", "club":"아비도스 학생회",
"role":"딜러", "position":"MIDDLE","atk_type":"신비", "dfn_type":"중장갑", "field":"S/B/D", "fes":false,
"weapon":"AR", "equipments":["장갑", "배지", "손목시계"], "matterials":["파에스토스 원반", "안티키테라 장치"],
"signature":{
	"name":"WHITE FANG 465",
	"summary":`시로코가 애용하는 돌격소총.
야외에서의 장거리 이동에도 문제가 없도록 다양한 정비와 개조가 이루어져 있다.
`},
"uniqueItem":{"name":"",
"summary":`
`},
"skills":{
	"ex":[{
	"name":"라이딩 그레네이드", "cost":4,
	"content":`원형 범위 내의 적에게 공격력 <em>431%</em> 대미지
공격력 <em>38.4%</em> 감소 (<em>10초</em>간`
	}],"basic":[{
	"name":"집중 사격",
	"content":`<em>40초</em>마다 직선 범위 내의 적에게 공격력 <em>194%</em> 대미지`
	}],"enhance":[{
	"name":"속사",
	"content":`공격속도 <em>14%</em> 증가`
	}],"sub":[{
	"name":"간파 사격",
	"content":`해로운 효과가 있는 적 공격 시 공격력 <em>3.8%</em> 추가 대미지`
	}]},
	"tags":["범위딜", "공격력 감소", "호크마"],
},{
"name":"스나오오카미 시로코*테러",
"school":"아비도스 종합고등학교", "club":"아비도스 학생회",
"role":"딜러", "position":"MIDDLE","atk_type":"신비", "dfn_type":"특수장갑", "field":"D/S/A", "fes":true,
"weapon":"AR", "equipments":["모자", "배지", "손목시계"], "matterials":["로마 12면체", "토템폴"],
"signature":{
	"name":"BLACK FANG 465",
	"summary":`시로코가 애용하는 돌격소총.
오랫동안 사용해 온 듯 군데군데 수리된 흔적들이 남아있지만, 꼼꼼하게 정비해 왔기 때문에 사용하는 데는 아무런 문제가 없다.
`},
"uniqueItem":{"name":"",
"summary":`
`},
"skills":{
	"ex":[{
	"name":"화력 강화", "cost":3,
	"content":`드론 소환 (<em>40초</em>간)
드론이 유지되는 동안 일반 공격이 공격력 <em>120%</em> 대미지를 주도록 변경
치명 수치 <em>42%</em>, 침여 대미지 <em>71%</em> 증가 (<em>40초</em>)간)
자신에게 최대 체력의 <em>20%</em> 만큼 대미지 (해당 스킬로 시로코*테러는 퇴각하지 않습니다.)`
	}],"basic":[{
	"name":"수류탄 투척 · 개(改)",
	"content":`<em>40초</em>마다 적 1인에게 공격력 <em>370%</em> 대미지
EX 스킬 사용 시 드론 소환 : 교차 사격으로 스킬이 변경됩니다.
`
	},{
	"name":"드론 소환 : 교차 사격",
	"content":`
EX 스킬 사용 시 적 1인에게 공격력 <em>474%</em> 대미지
EX 스킬의 드론이 사라지면 수류탄 투척 · 개(改)로 스킬이 변경됩니다.
`
	}],"enhance":[{
	"name":"정밀한 조준",
	"content":`공격력 <em>14%</em> 증가`
	}],"sub":[{
	"name":"침착한 호흡",
	"content":`신비 특효 <em>25.92%</em> 가산
시로코*테러의 현재 체력이 <em>1%</em> 이하 시 <em>15초</em> 동안 퇴각 유예 적용 (쿨타임 <em>90초</em>)
퇴각 유예 동안 체력을 전부 회복하지 못하면 즉시 퇴각`
	}]},
	"tags":["연타", "메인딜"],
},{
"name":"타카나시 호시노(수영복)",
"school":"아비도스 종합고등학교", "club":"아비도스 학생회",
"role":"서포터", "position":"FRONT","atk_type":"폭발", "dfn_type":"특수장갑", "field":"S/A/D", "fes":true,
"weapon":"SG", "equipments":["신발", "가방", "부적"], "matterials":["네브라 디스크", "토템폴"],
"signature":{
	"name":"호루스의 눈",
	"summary":`여름 바다에 맞게끔 조율하여 가져온 호시노의 산탄총.
숲에 길을 열거나 벌레를 쫒는 등, 다양한 용도로 쓰기 좋게 손질되어 있다.
`},
"uniqueItem":{"name":"",
"summary":`
`},
"skills":{
	"ex":[{
	"name":"수상 지원", "cost":6,
	"content":`자신을 중심으로 원형 범위 내에 있는 아군의 공격력 <em>26.5%</em> 증가, 폭발 특효 <em>68.5%</em> 가산 (<em>50초</em>간)`
	}],"basic":[{
	"name":"수상 습격",
	"content":`<em>40초</em>마다 적 1인에게 공격력 <em>283%</em> 대미지
치유력 <em>75%</em> 만큼 자신 회복`
	}],"enhance":[{
	"name":"더위 참기",
	"content":`방어력 <em>11.2%</em>, 공격력 <em>11.2%</em> 증가`
	}],"sub":[{
	"name":"해변의 즐거움",
	"content":`EX 스킬이 지속되는 동안 코스트 회복력 <em>360</em> 증가`
	}]},
	"tags":["공격력 버프", "폭발 특효", "코스트 회복력"],
},{
"name":"스나오오카미 시로코(수영복)",
"school":"아비도스 종합고등학교", "club":"아비도스 학생회",
"role":"딜러", "position":"SPECIAL","atk_type":"신비", "dfn_type":"경장갑", "field":"B/S/A", "fes":false,
"weapon":"AR", "equipments":["모자", "가방", "손목시계"], "matterials":["파에스토스 원반", "로혼치 사본"],
"signature":{
	"name":"BLACK FANG 465",
	"summary":`바다에서도 애용되는 시로코의 돌격소총.
평소보다 신경 쓴 정비 덕에, 물기나 소금기에도 문제없다.
`},
"uniqueItem":{"name":"",
"summary":`
`},
"skills":{
	"ex":[{
	"name":"월척이다", "cost":3,
	"content":`적 1인에게 방어력 <em>18%</em> 감소 (<em>30초</em>간)
추가로 공격력 <em>588%</em> 대미지`
	}],"basic":[{
	"name":"'마침 여기'",
	"content":`전투 시작 시 자신을 제외한 아군 치명 수치 <em>11.5%</em> 증가 (<em>60초</em>간)
EX 스킬 코스트 1 감소 (EX 스킬 사용 <em>1회</em>까지) (전투장 <em>1회</em>)
`
	}],"enhance":[{
	"name":"묘하게 들뜬",
	"content":`공격력 <em>14%</em> 증가`
	}],"sub":[{
	"name":"단련된 체력",
	"content":`아군의 코스트 회복력 <em>10.6%</em> 증가`
	}]},
	"tags":["디버프", "방어력 감소", "코스트 회복"],
}











,{
"name":"츠카츠키 리오(무장)",
"school":"밀레니엄 사이언스 스쿨", "club":"세미나",
"role":"딜러", "position":"MIDDLE","atk_type":"폭발", "dfn_type":"특수장갑", "field":"S/B/D", "fes":false,
"weapon":"HG", "equipments":["모자", "헤어핀", "손목시계"], "matterials":["디스코 콜간테", "보이니치 사본"],
"signature":{
	"name":"입안자",
	"summary":`리오의 호신용 권총.
합리적인 슈트의 보조 덕분에, 보다 정확한 사격이 가능해졌다.
`},
"uniqueItem":{"name":"",
"summary":`
`},
"skills":{
	"ex":[{
	"name":"전뇌의 힘", "cost":4,
	"content":`적 1인에게 공격력 <em>1356%</em> 대미지`
	}],"basic":[{
	"name":"파라미터 조정",
	"content":`<em>35초</em>마다 치명 대미지 <em>21.9%</em> 증가 (<em>30초</em>간)`
	}],"enhance":[{
	"name":"진화 알고리즘",
	"content":`공격력 <em>14%</em>`
	}],"sub":[{
	"name":"메타휴리스틱",
	"content":`방어 타입이 경장갑인 대상 공격 시 <em>20%</em> 확률로 받는 특효 대미지량 <em>6.1%</em> 가산 (<em>13초</em>간) (쿨타임 <em>5초</em>)`
	}]},
	"tags":["메인딜", "예로니무스", "카이텐저 2페"],
}
]
