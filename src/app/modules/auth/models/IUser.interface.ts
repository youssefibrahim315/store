export interface IUser {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  firstArabicName: string;
  lastArabicName: string;
  displayName: string;
  roles: Role[];
}

export interface Role {
  id: number;
  permissionName: PermissionName;
}

export enum PermissionName {
  Admin = 'Admin',
  User = 'User',
  Moderator = 'Moderator',
}