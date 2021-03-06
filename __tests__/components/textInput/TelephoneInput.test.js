
'use strict';

import React              from 'react';
import TelephoneInput     from '../../../src/app/components/textInput/TelephoneInput';
import renderer           from 'react-test-renderer';

describe('TelephoneInput component', () => {
  const mockProps = {
    label:    'test',
    id:       1,
    value:    '',
    onChange: () => (true)
  };

  it('renders as expected', () => {
    const component = renderer.create(
      <div>
        <TelephoneInput {...mockProps}/>
      </div>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
