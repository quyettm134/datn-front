import React from 'react';
import { shallow } from 'enzyme';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/user/userActions';
import { toast } from 'react-toastify';
import LoginSignup from './LoginSignup';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

jest.mock('react-toastify', () => ({
  toast: {
    error: jest.fn(),
  },
}));

jest.mock('../../redux/user/userActions', () => ({
  loginUser: jest.fn(),
}));

describe('LoginSignup', () => {
  let wrapper;
  const dispatchMock = jest.fn();
  useDispatch.mockReturnValue(dispatchMock);

  beforeEach(() => {
    wrapper = shallow(<LoginSignup />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should handle sign in', async () => {
    const loginUserMock = jest.fn();
    loginUser.mockResolvedValue({ payload: true });
    useDispatch.mockReturnValue(loginUserMock);

    const event = {
      preventDefault: jest.fn(),
    };

    wrapper.find('input[type="text"]').simulate('change', {
      target: { value: 'testuser' },
    });
    wrapper.find('input[type="password"]').simulate('change', {
      target: { value: 'testpassword' },
    });

    await wrapper.find('input[type="submit"]').simulate('click', event);

    expect(event.preventDefault).toHaveBeenCalled();
    expect(loginUserMock).toHaveBeenCalledWith({
      username: 'testuser',
      password: 'testpassword',
    });
    expect(wrapper.find('ToastContainer').prop('toast').error).not.toHaveBeenCalled();
    expect(wrapper.find('useNavigate').prop('navigate')).toHaveBeenCalledWith('/profile');
  });

  it('should handle sign in failure', async () => {
    const loginUserMock = jest.fn();
    loginUser.mockResolvedValue({ payload: false });
    useDispatch.mockReturnValue(loginUserMock);

    const event = {
      preventDefault: jest.fn(),
    };

    wrapper.find('input[type="text"]').simulate('change', {
      target: { value: 'testuser' },
    });
    wrapper.find('input[type="password"]').simulate('change', {
      target: { value: 'testpassword' },
    });

    await wrapper.find('input[type="submit"]').simulate('click', event);

    expect(event.preventDefault).toHaveBeenCalled();
    expect(loginUserMock).toHaveBeenCalledWith({
      username: 'testuser',
      password: 'testpassword',
    });
    expect(wrapper.find('ToastContainer').prop('toast').error).toHaveBeenCalled();
    expect(wrapper.find('useNavigate').prop('navigate')).not.toHaveBeenCalled();
  });
});
