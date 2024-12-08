import { defineStore } from 'pinia';

export const usePostStore = defineStore('post', {
  state: () => ({
    posts: [
      { id: 1, title: '첫 번째 게시글', content: '이것은 첫 번째 게시글입니다.' },
      { id: 2, title: '두 번째 게시글', content: '이것은 두 번째 게시글입니다.' },
    ],
  }),
  actions: {
    addPost(post) {
      this.posts.push(post);
    },
    updatePost(updatedPost) {
      const index = this.posts.findIndex((p) => p.id === updatedPost.id);
      if (index !== -1) {
        this.posts[index] = updatedPost;
      }
    },
    getPostById(id) {
      return this.posts.find((post) => post.id === id);
    },
    deletePost(id) {
      this.posts = this.posts.filter((p) => p.id !== id);
    },
  },
});
