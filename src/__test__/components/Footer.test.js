import React from 'react';
import { shallow, mount } from 'enzyme';
import Footer from '../../components/Footer';
import { create } from 'react-test-renderer';
describe('<Footer>', () => {
  const footer = mount(<Footer />);

  test('render del componente footer', () => {
    expect(footer.length).toEqual(1);
  });

  test('render del titulo', () => {
    expect(footer.find('.Footer-title').text()).toEqual('Platzi Store');
  });
});

describe('Footer Snapshot', () => {
  test('Comprobar ui del componente', () => {
    const footer = create(<Footer />);
    expect(footer.toJSON()).toMatchSnapshot();
  });
});
