import App from './app'

describe('App test', () => {
    it('renders successfully', async () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find('.app')).toHaveLength(1);
    });
  });