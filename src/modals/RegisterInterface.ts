export interface registerInterface {
  username: string;
  email: string;
  password: string;
  confirm?: string;
}
export interface LoginInterface {
  email: string;
  password: string;
}

export interface adminInterface {
  username: string;
  email: string;
  password: string;
  confirm?: string;
  roles?: string | string[];
}
