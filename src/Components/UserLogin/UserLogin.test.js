import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import UserLogin from '../UserLogin/UserLogin';
import '@testing-library/jest-dom/extend-expect';
import {MemoryRouter} from 'react-router-dom'


describe(UserLogin, () => {

  const mockChangePassword = jest.fn()
  const mockChangeUserName = jest.fn()
  const mockHandleSubmit = jest.fn()
  fireEvent.change(mockChangePassword, {target: {value: 'Password'}})
  // fireEvent.change(mockChangeUserName, {target: {value: 'Name'}})

  it('renders without crashing', () => {
   const userLogin = render(<MemoryRouter><UserLogin /></MemoryRouter>)
  });

  it('should handle the user input', () => {
    const { getByText } = render(<MemoryRouter><UserLogin /></MemoryRouter>)

    const nameInput = getByPlaceholderText('username')
    fireEvent.change(mockChangeUserName, {target: {value: 'Name'}})

    const passwordInput = getByPlaceholderText('password')
    fireEvent.change(mockChangePassword, {target: {value: 'Password'}})

    const loginBtn = getByPlaceholderText('Submit')

    
  })
})
