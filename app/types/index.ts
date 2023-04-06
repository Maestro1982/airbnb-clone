import { User } from '@prisma/client';

export type SafeUser = Omit<
  User,
  'createdAt' | 'updatedAt' | 'EmailVerified'
> & {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
};
