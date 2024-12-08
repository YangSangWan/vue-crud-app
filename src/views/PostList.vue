<template>
  <div>
    <h1>게시글 목록</h1>
    <router-link :to="`/post/new?mode=create`">+ 새 게시글</router-link>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <router-link :to="`/post/${post.id}`">{{ post.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { usePostStore } from '../stores/postStore';
export default {
  setup() {
    const postStore = usePostStore();
    return {
      posts: postStore.posts, // 상태 관리에서 게시글 목록 가져오기
    };
  },
};
</script>
