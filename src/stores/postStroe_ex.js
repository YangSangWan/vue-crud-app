import { defineStore } from 'pinia';
import axios from 'axios';

export const usePageStore = defineStore('pageStore', {
  state: () => ({
    posts: [], // 게시글 데이터
  }),
  actions: {
    // 비동기: 데이터 가져오기
    async fetchPosts() {
      try {
        const response = await axios.get('/api/posts'); // API 호출
        this.posts = response.data; // 가져온 데이터 저장
      } catch (error) {
        console.error('Failed to fetch posts:', error);
      }
    },
    // 비동기: 데이터 추가
    async addPost(newPost) {
      try {
        const response = await axios.post('/api/posts', newPost); // API 호출
        this.posts.push(response.data); // 새로 추가된 데이터 저장
      } catch (error) {
        console.error('Failed to add post:', error);
      }
    },
    // 비동기: 데이터 삭제
    async deletePost(postId) {
      try {
        await axios.delete(`/api/posts/${postId}`); // API 호출
        this.posts = this.posts.filter((post) => post.id !== postId); // 로컬 상태 업데이트
      } catch (error) {
        console.error('Failed to delete post:', error);
      }
    },
  },
});
