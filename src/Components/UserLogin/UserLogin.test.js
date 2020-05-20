import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import UserLogin from '../UserLogin/UserLogin';
import '@testing-library/jest-dom/extend-expect';
import {MemoryRouter} from 'react-router-dom'

import UserStayType from '../UserStayType/UserStayType'

describe(UserLogin, () => {

  const mockSetPassword = jest.fn()
  const mockSetUser = jest.fn()

  it('renders without crashing', () => {
   const userLogin = render(<MemoryRouter><UserLogin /></MemoryRouter>)
  });

  it('should handle the user input', () => {
    const { getByText, getByPlaceholderText } = render(<MemoryRouter><UserLogin setUserName={mockSetUser} setPassword={mockSetPassword}/></MemoryRouter>)

    const nameInput = getByPlaceholderText('username')
    fireEvent.change(nameInput, {target: {value: 'Name'}})

    const passwordInput = getByPlaceholderText('password')
    fireEvent.change(passwordInput, {target: {value: 'Password'}})

    expect(mockSetUser).toBeCalledWith('Name')
    expect(mockSetPassword).toBeCalledWith('Password')
  })
  
})
