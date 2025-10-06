import type { NextAuthOptions, User as NextAuthUser } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { USE_MOCK_DATA } from "@/config/constants";

// Mock user data (simulated database)
const mockUsers = [
  {
    id: "1",
    email: "demo@nafaa.gov.lr",
    password: "demo123", // In production, this would be hashed
    name: "John Doe",
    role: "user",
    avatar: "👨‍🦰",
  },
  {
    id: "2",
    email: "admin@nafaa.gov.lr",
    password: "admin123",
    name: "Jane Admin",
    role: "admin",
    avatar: "👩‍💼",
  },
];

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Missing credentials");
        }

        if (USE_MOCK_DATA) {
          // Mock authentication
          const user = mockUsers.find(
            (u) =>
              u.email === credentials.email &&
              u.password === credentials.password
          );

          if (!user) {
            throw new Error("Invalid credentials");
          }

          return {
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role,
            avatar: user.avatar,
          };
        } else {
          // Real API call (when backend is ready)
          try {
            const response = await fetch(
              `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/login`,
              {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  email: credentials.email,
                  password: credentials.password,
                }),
              }
            );

            if (!response.ok) {
              throw new Error("Invalid credentials");
            }

            const user = await response.json();
            return user;
          } catch (error) {
            console.error("Auth error:", error);
            throw new Error("Authentication failed");
          }
        }
      },
    }),
  ],
  pages: {
    signIn: "/portal",
    error: "/portal",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = (user as any).role;
        token.avatar = (user as any).avatar;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).id = token.id;
        (session.user as any).role = token.role;
        (session.user as any).avatar = token.avatar;
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  secret: process.env.NEXTAUTH_SECRET,
};

// Helper function to get mock users (for development)
export const getMockUsers = () => mockUsers;
