# Vue CRUD App

## 프로젝트 소개
Vue.js를 활용하여 제작한 게시판 애플리케이션입니다. 사용자는 게시글을 작성, 수정, 삭제할 수 있으며, Vue Router와 Pinia를 활용하여 상태 관리 및 라우팅을 구현하였습니다.

## 주요 기능
- **게시글 목록**: 등록된 게시글의 목록을 확인할 수 있습니다.
- **게시글 작성**: 새로운 게시글을 작성할 수 있습니다.
- **게시글 수정**: 기존의 게시글을 수정할 수 있습니다.
- **게시글 삭제**: 게시글을 삭제할 수 있습니다.
- **라우팅**: Vue Router를 사용한 페이지 이동 구현.
- **상태 관리**: Pinia로 전역 상태 관리.

## 기술 스택
- **Vue.js 3**: 사용자 인터페이스 개발.
- **Vue Router**: 페이지 라우팅 관리.
- **Pinia**: 상태 관리.
- **JavaScript (ES6+)**: 로직 작성.
- **HTML/CSS**: UI 구성.

## 설치 및 실행

### 1. 저장소 클론
```bash
git clone https://github.com/your-username/vue-crud-app.git
cd vue-crud-app
```

### 2. 의존성 설치
```bash
npm install
```

### 3. 개발 서버 실행
```bash
npm run serve
```
- **로컬 실행 주소**: `http://localhost:8080`

## 사용 예시

### 1. 게시글 작성
- **URL**: `/post/new?mode=create`
- 새로운 게시글을 작성하고 저장하면 목록에 추가됩니다.

### 2. 게시글 수정
- **URL**: `/post/new?id={게시글ID}&mode=update`
- 게시글을 수정한 뒤 저장하면 기존 게시글이 업데이트됩니다.

### 3. 게시글 삭제
- **URL**: `/post/{게시글ID}`
- 상세 페이지에서 삭제 버튼을 클릭하면 게시글이 삭제되고 목록으로 이동합니다.

## 배포
### GitHub Pages 배포
1. **프로젝트 빌드**
   ```bash
   npm run build
   ```

2. **gh-pages 설치**
   ```bash
   npm install gh-pages --save-dev
   ```

3. **배포 실행**
   ```bash
   npm run deploy
   ```

4. 배포 완료 후, `https://your-username.github.io/vue-crud-app/`에서 확인 가능합니다.

## 스크린샷
### 1. 게시글 목록
![게시글 목록 스크린샷](https://via.placeholder.com/800x400?text=게시글+목록)

### 2. 게시글 작성
![게시글 작성 스크린샷](https://via.placeholder.com/800x400?text=게시글+작성)

### 3. 게시글 수정
![게시글 수정 스크린샷](https://via.placeholder.com/800x400?text=게시글+수정)

## 기여 방법
1. 저장소를 포크합니다.
2. 기능을 추가하거나 버그를 수정합니다.
3. PR(Pull Request)을 생성합니다.

## 라이선스
[MIT License](LICENSE)

---

이 프로젝트는 Vue.js 학습 및 CRUD 애플리케이션 제작을 목적으로 개발되었습니다. 궁금한 점이나 피드백이 있다면 언제든지 연락주세요! 😊
