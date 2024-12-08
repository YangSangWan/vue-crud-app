import { createRouter, createWebHistory } from 'vue-router';
import PostList from '../views/PostList.vue';
import PostDetail from '../views/PostDetail.vue';
import PostForm from '../views/PostForm.vue';
import AboutPage from '../views/aboutPage.vue';

const routes = [
  { path: '/', name: 'PostList', component: PostList }, // 게시글 목록
  { path: '/post/:id', name: 'PostDetail', component: PostDetail }, // 게시글 상세
  { path: '/post/new', name: 'PostForm', component: PostForm }, // 새 게시글 작성
  { path: '/about', name: 'aboutPage', component: AboutPage }, // 새 게시글 작성
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
