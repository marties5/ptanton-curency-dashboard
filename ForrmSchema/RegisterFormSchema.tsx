import { z } from "zod";
const usersData = [
  { username: "john_doe", email: "john@example.com" },
  { username: "jane_smith", email: "jane@example.com" },
  { username: "user123", email: "user123@example.com" },
];

export const RegisterSchema = z
  .object({
    fullName: z
      .string()
      .min(2, { message: "Nama lengkap minimal 2 karakter." }),
    username: z
      .string()
      .min(3, { message: "Username minimal 3 karakter." })
      .refine(
        (username) => !usersData.some((user) => user.username === username),
        {
          message: "Username sudah digunakan.",
        }
      ),
    email: z
      .string()
      .email({ message: "Email tidak valid." })
      .refine((email) => !usersData.some((user) => user.email === email), {
        message: "Email sudah digunakan.",
      }),
    password: z.string().min(8, { message: "Password minimal 8 karakter." }),
    confirmPassword: z
      .string()
      .min(8, { message: "Konfirmasi password minimal 8 karakter." }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password dan konfirmasi password tidak cocok.",
    path: ["confirmPassword"],
  });
