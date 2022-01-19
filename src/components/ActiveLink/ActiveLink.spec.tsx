import { render } from '@testing-library/react';

import { ActiveLink } from '.';

test('active link should render correctly', () => {
  const { debug } = render(
    <ActiveLink href="/" activeClassName="active">
      <a>Link</a>
    </ActiveLink>,
  );

  debug();
});
