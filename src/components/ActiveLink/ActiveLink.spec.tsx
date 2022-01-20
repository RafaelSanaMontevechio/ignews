import { render } from '@testing-library/react';

import { ActiveLink } from '.';

jest.mock('next/router', () => {
  return {
    useRouter: () => {
      return {
        asPath: '/',
      };
    },
  };
});

describe('ActiveLink component', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <ActiveLink href="/" activeClassName="active">
        <a>Link</a>
      </ActiveLink>,
    );

    expect(getByText('Link')).toBeInTheDocument();
  });

  it('adds active class if the link as currently active', () => {
    const { getByText } = render(
      <ActiveLink href="/" activeClassName="active">
        <a>Link</a>
      </ActiveLink>,
    );

    expect(getByText('Link')).toHaveClass('active');
  });
});
