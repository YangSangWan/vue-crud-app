<template>
  <div v-if="post">
    <h1>{{ post.title }}</h1>
    <p>{{ post.content }}</p>
    <router-link to="/">← 목록으로</router-link>
    <br>
    <router-link :to="`/post/new?id=${post.id}&mode=update`">← 수정</router-link>
    <button @click="deletePost">삭제하기</button>
  </div>
  <p v-else>게시글을 찾을 수 없습니다.</p>
</template>

<script>
import { usePostStore } from '../stores/postStore';
import { useRoute, useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    const postStore = usePostStore();
    const postId = Number(route.params.id);
    const post = postStore.posts.find((p) => p.id === postId);

    if (!post) {
      router.push('/'); // 잘못된 ID로 접근 시 홈으로 이동
    }

    const deletePost = () =>{
      if (confirm('정말 삭제하시겠습니까?')) {
        postStore.deletePost(postId);
        router.push('/'); // 홈으로 이동
      }
    }

    return { post, deletePost};
  },
};
</script>
