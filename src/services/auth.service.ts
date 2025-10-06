import axiosInstance from "@/lib/axios";
import { USE_MOCK_DATA } from "@/config/constants";

interface LoginCredentials {
  email: string;
  password: string;
}

interface User {
  id: string;
  email: string;
  name: string;
  role: string;
  avatar?: string;
}

interface AuthResponse {
  user: User;
  token: string;
}

export const authService = {
  /**
   * Login user
   */
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    if (USE_MOCK_DATA) {
      // Mock login
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const mockUsers = [
        {
          email: "demo@nafaa.gov.lr",
          password: "demo123",
          user: {
            id: "1",
            email: "demo@nafaa.gov.lr",
            name: "John Doe",
            role: "user",
            avatar: "👨‍🦰",
          },
        },
        {
          email: "admin@nafaa.gov.lr",
          password: "admin123",
          user: {
            id: "2",
            email: "admin@nafaa.gov.lr",
            name: "Jane Admin",
            role: "admin",
            avatar: "👩‍💼",
          },
        },
      ];

      const mockUser = mockUsers.find(
        (u) =>
          u.email === credentials.email && u.password === credentials.password
      );

      if (!mockUser) {
        throw new Error("Invalid credentials");
      }

      return {
        user: mockUser.user,
        token: "mock-jwt-token-" + Date.now(),
      };
    }

    const { data } = await axiosInstance.post<AuthResponse>(
      "/auth/login",
      credentials
    );
    return data;
  },

  /**
   * Register new user
   */
  async register(userData: {
    name: string;
    email: string;
    password: string;
  }): Promise<AuthResponse> {
    if (USE_MOCK_DATA) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return {
        user: {
          id: Date.now().toString(),
          email: userData.email,
          name: userData.name,
          role: "user",
        },
        token: "mock-jwt-token-" + Date.now(),
      };
    }

    const { data } = await axiosInstance.post<AuthResponse>(
      "/auth/register",
      userData
    );
    return data;
  },

  /**
   * Logout user
   */
  async logout(): Promise<void> {
    if (USE_MOCK_DATA) {
      await new Promise((resolve) => setTimeout(resolve, 500));
      return;
    }

    await axiosInstance.post("/auth/logout");
  },

  /**
   * Get current user
   */
  async getCurrentUser(): Promise<User> {
    if (USE_MOCK_DATA) {
      await new Promise((resolve) => setTimeout(resolve, 500));
      return {
        id: "1",
        email: "demo@nafaa.gov.lr",
        name: "John Doe",
        role: "user",
        avatar: "👨‍🦰",
      };
    }

    const { data } = await axiosInstance.get<User>("/auth/me");
    return data;
  },

  /**
   * Refresh auth token
   */
  async refreshToken(): Promise<{ token: string }> {
    if (USE_MOCK_DATA) {
      await new Promise((resolve) => setTimeout(resolve, 500));
      return { token: "mock-jwt-token-" + Date.now() };
    }

    const { data } = await axiosInstance.post<{ token: string }>(
      "/auth/refresh"
    );
    return data;
  },
};
