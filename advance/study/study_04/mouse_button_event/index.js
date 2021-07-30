/** 
 * [마우스 버튼 이벤트]
 * 
 * > MouseEvent.button
 * 0: 마우스 왼쪽 버튼
 * 1: 마우스 휠
 * 2: 마우스 오른쪽 버튼
 * 
 * > MouseEvent.type
 * click: 마우스 왼쪽 버튼을 눌렀을 때
 * contextmenu: 마우스 오른쪽 버튼을 눌렀을 때
 * dblclick: 동일한 위치에서 빠르게 두번 click할 때
 * mousedown: 마우스 버튼을 누른 순간
 * mouseup: 마우스 버튼을 눌렀다 뗀 순간
 * 
 * 하나의 동작에서도 여러 이벤트가 발생할 수 있음
 * 사용자가 마우스 왼쪽 버튼을 한 번만 클리갷도
 * 마우스를 눌렀다 뗀 동작이기 때문에
 * mousedown, mouseup, click까지 총 3개의 이벤트가 발생함
 * 
 * 더블클릭의 경우 클릭 2번 하고 더블클릭 이벤트가 발생하는거라 7개의 이벤트 발생
 * 
 * 마우스 오른쪽 버튼을 누를 때는 운영체제별로 순서가 다를 수도 있음
 * 윈도우 운영체제는 mousedown mouseup conetextmenu
 * mac mousedown contextmenu mouseup 이렇게 발생한다고 함
 * 
 * preventDefault 메소드로 오른쪽 버튼을 클릭했을 때
 * 메뉴창이 뜨지 않도록 만들었는데 mac의 경우 mouseup 이벤트도 발생 안함
 */