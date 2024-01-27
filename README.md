
# **Final**
<img src="https://github.com/ChoiGYoung/code.camp_Backend/assets/110095557/6836966a-518f-4e6e-be9d-a4bc0f507205" width="250" height="400"/>
<img src="https://github.com/ChoiGYoung/code.camp_Backend/assets/110095557/3ce20029-67c2-443c-b2a4-4f5fd50532da" width="250" height="400"/>
<img src="https://github.com/ChoiGYoung/code.camp_Backend/assets/110095557/2335d0ef-47c2-4aae-bbf5-0bc5eb4ea91b" width="250" height="400"/>



### **HTML / CSS 요구사항**

- CSS는 Flex 사용
- 인증번호전송, 인증확인, 가입하기 버튼은 이전 로직의  완료 전까지 비활성화
- 지역은 서울, 경기, 인천만 선택 가능 단, 최초 ‘지역을 선택하세요’가 선택되어 있어야 하며, 유저는 해당 옵션을 선택할 수 없음
- 성별은 둘 중 하나만 선택 가능
- 이외 CSS Figma 참조

### **Javascript 요구사항**

- 휴대전화 칸은 3자리-4자리-4자리, 앞칸이 모두 채워지면 다음 칸으로 커서가 이동
- 휴대전화를 모두 입력하면 인증번호전송 버튼이 활성화되고, 버튼을 누르면 토큰을 화면에 생성, 3분타이머도 동작 (0:00 형식 유지)
- 3분 이내에 버튼을 누르면 ‘인증이 완료되었습니다’라는 알림창 표시, 3분이 지나면 토큰정보, 타이머, 버튼 초기화
- 가입하기 버튼을 누르면 각 입력칸에 대해 검증하고 (빈칸 확인, 이메일 형식 확인, 비밀번호 확인 등) , 빈칸 아래에는 경고창 표시
- 검증이 완료되면 ‘가입을 축하합니다’ 라는 알림창 표시
