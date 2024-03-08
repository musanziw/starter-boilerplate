export interface User {
  id: number;
  name?: string | null;
  email?: string | null;
  password?: string | null;
  phoneNumber?: string | null;
  address?: string | null;
  isActive?: boolean | null;
  token?: string | null;
  googleImage?: string | null;
  createdAt?: Date | null;
  updatedAt?: Date | null;
  images: Image[];
  roles: Role[];
}

export interface Image {
  id: number;
  thumb: string;
  users: User[];
}

export interface Role {
  id: number;
  name: string;
  isActive: number;
  createdAt: Date;
  updatedAt: Date;
  users: User[];
}
