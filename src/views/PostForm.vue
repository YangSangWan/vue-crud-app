<template>
  <div>
    <h1>{{ pageTitle }}</h1> <!-- 동적 제목 표시 -->
    <form @submit.prevent="submitPost">
      <div>
        <label for="title">제목</label>
        <input
          id="title"
          v-model="form.title"
          placeholder="제목 없음"
          required
        />
      </div>
      <div>
        <label for="content">내용</label>
        <textarea
          id="content"
          v-model="form.content"
          placeholder="내용 없음"
          required
        ></textarea>
      </div>
      <button type="submit">저장</button>
    </form>
    <router-link to="/">← 목록으로</router-link>
  </div>
</template>

<script>
import { usePostStore } from '../stores/postStore';
import { useRouter } from 'vue-router';
import { useRoute } from 'vue-router';
import { reactive } from 'vue';

export default {
  setup() {
    const postStore = usePostStore();
    const router = useRouter();
    const route = useRoute(); // 현재 라우트 정보
    const mode = route.query.mode; // 동작 모드
    // 동적 제목 설정
    const pageTitle = mode === 'create' ? '새 게시글 작성' : '게시글 수정';

    const postId = mode === 'update' ? Number(route.query.id) : null;
    // post 데이터 가져오기
    const post = mode === 'update' && postId
      ? postStore.getPostById(postId)
      : { title: '', content: '' }; // 기본값

    // form을 post를 기반으로 reactive로 초기화
    const form = reactive({
      title: post.title,
      content: post.content,
    });
    

    const submitPost = () => {
      if (mode === 'create') {
        const newPost = { id: Date.now(), ...form };
        console.log(newPost)
        postStore.addPost(newPost);
        router.push('/');
      }else if(mode === 'update'){
        // 쿼리 값 가져오기
        const updatePost = { id: postId, ...form };
        postStore.updatePost(updatePost);
        router.push('/');
      }
    };


    

    return { form, submitPost, pageTitle, post };
  },
};
</script>
