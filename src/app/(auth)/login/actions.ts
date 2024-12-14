import jwt from "jsonwebtoken";
import type { NextApiRequest, NextApiResponse } from "next";

const users = [
  { email: "admin@example.com", password: "admin123", role: "admin" },
  { email: "user@example.com", password: "user123", role: "user" },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { email, password } = req.body;

  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    return res.status(401).json({
      success: false,
      message: "Invalid email or password!",
    });
  }

  try {
    const token = jwt.sign(
      { email: user.email, role: user.role },
      process.env.JWT_SECRET1 || "default_secret_key",
      { expiresIn: "1h" }
    );

    res.setHeader("Authorization", `Bearer ${token}`);
    return res.status(200).json({
      success: true,
      token,
      message: "Login successful",
    });
  } catch (error) {
    console.error("Error generating token:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}
