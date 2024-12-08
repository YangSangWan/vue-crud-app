import { mount } from '@vue/test-utils';
import PostList from '../src/views/PostList.vue';
import { createTestingPinia } from '@pinia/testing';

test('renders a list of posts', () => {
  const wrapper = mount(PostList, {
    global: {
      plugins: [
        createTestingPinia({
          initialState: {
            postStore: {
              posts: [
                { id: 1, title: '첫 번째 게시글', content: '이것은 첫 번째 게시글입니다.' },
                { id: 2, title: '두 번째 게시글', content: '이것은 두 번째 게시글입니다.' },
              ],
            },
          },
        }),
      ],
      stubs: {
        'router-link': true, // router-link를 모킹 처리
      },
    },
  });

  // 게시글이 렌더링되는지 확인
  const listItems = wrapper.findAll('li'); // li 태그를 기준으로 찾기
  expect(listItems).toHaveLength(2);
  // expect(listItems[0].text()).toContain('첫 번째 게시글');
  // expect(listItems[1].text()).toContain('두 번째 게시글');
});
