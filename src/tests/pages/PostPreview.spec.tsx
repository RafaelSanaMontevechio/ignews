import { render, screen } from '@testing-library/react';

import { mocked } from 'jest-mock';

import { useSession } from 'next-auth/client';
import { useRouter } from 'next/router';

import { getPrismicClient } from '../../services/prismic';

import Post, { getStaticProps } from '../../pages/posts/preview/[slug]';

const post = {
  slug: 'my-new-post',
  title: 'My new post',
  content: '<p>Post content</p>',
  updatedAt: '10 de abril',
};

jest.mock('next-auth/client');
jest.mock('next/router');

jest.mock('../../services/prismic');

describe('Post preview page', () => {
  it('should render the post preview page', () => {
    const useSessionMocked = mocked(useSession);

    useSessionMocked.mockReturnValue([null, false]);

    render(<Post post={post} />);

    expect(screen.getByText('My new post')).toBeInTheDocument();
    expect(screen.getByText('Post content')).toBeInTheDocument();
    expect(screen.getByText('Wanna continue reading?')).toBeInTheDocument();
  });

  it('redirects user tp full post when user is subscribed', async () => {
    const useSessionMocked = mocked(useSession);
    const useRouterMocked = mocked(useRouter);
    const pushMocked = jest.fn();

    useSessionMocked.mockReturnValue([
      {
        activeSubscription: 'fake-subscription',
      },
      false,
    ]);

    useRouterMocked.mockReturnValue({
      push: pushMocked,
    } as any);

    render(<Post post={post} />);

    expect(pushMocked).toHaveBeenCalledWith('/posts/my-new-post');
  });

  it('loads initial data', async () => {
    const getPrismicClientMocked = mocked(getPrismicClient);

    getPrismicClientMocked.mockReturnValueOnce({
      getByUID: jest.fn().mockResolvedValueOnce({
        data: {
          title: [{ type: 'heading', text: 'My new post' }],
          content: [{ type: 'paragraph', text: 'Post content' }],
        },
        last_publication_date: '04-01-2021',
      }),
    } as any);

    const response = await getStaticProps({ params: { slug: 'my-new-post' } });

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          post: {
            slug: 'my-new-post',
            title: 'My new post',
            content: '<p>Post content</p>',
            updatedAt: '01 de abril de 2021',
          },
        },
      }),
    );
  });
});
