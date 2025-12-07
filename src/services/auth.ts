import { api } from '@/utils/http';

// Define Types
type LoginPayload = {
  email: string;
  pass: string;
};

type UserProfile = {
  id: number;
  name: string;
  email: string;
  role: string;
};

type LoginResponse = {
  token: string;
  user: UserProfile;
};

// API Methods
export const authApi = {
  login: (payload: LoginPayload) => {
    return api.post<LoginResponse>('/auth/login', payload);
  },

  getProfile: () => {
    return api.get<UserProfile>('/auth/me');
  },
};
