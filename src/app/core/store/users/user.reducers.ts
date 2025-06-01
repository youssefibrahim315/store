import { createFeature, createReducer, on } from '@ngrx/store';
import { UserActions } from './user.actions';
import { IUser, PermissionName } from '../../../modules/auth/models/IUser.interface';

// Define the initial state
export interface IUserState extends IUser {}

export const initialState: IUserState = {
  displayName: '',
  email: '',
  id: '',
  firstName: '',
  lastName: '',
  firstArabicName: '',
  lastArabicName: '',
  roles: [
    {
      id: 0,
      permissionName: PermissionName.Admin
    },
  ],
};

export const userFeature = createFeature({
  name: 'userFeature',
  reducer: createReducer(
    initialState,
    on(UserActions.getUserDetails, (state, data) => ({
      ...state,
    })),
    on(UserActions.getUserDetailsSuccess, (state, { data, email }) => ({
      ...state,
      data: data.filter((user: any) => user.email === email),
      loading: false,
    })),
    on(UserActions.getUserDetailsFailure, (state, error) => ({
      ...state,
      error,
    })),

    on(UserActions.login, (state, { data }) => ({
      ...state,
      loading: true,
    })),
    on(UserActions.loginSuccess, (state, { data }) => ({
      ...state,
      data: data,
      loading: false,
    })),
    on(UserActions.loginFailure, (state, { errors }) => ({
      ...state,
      loading: false,
      errors: errors,
    }))
  ),
});

export const {
  name,
  selectDisplayName,
  selectId,
  selectEmail,
  selectFirstArabicName,
  selectFirstName,
  reducer,
} = userFeature;
