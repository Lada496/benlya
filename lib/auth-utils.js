import { hash, compare } from "bcryptjs";
export async function hashPassword(password) {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
}

export async function verifyPassword(password, hashedPassword) {
  const isValid = await compare(password, hashedPassword);
  return isValid;
}

export async function createUser(email, password) {
  console.log("create user", email);
  console.log("create user", password);
  const resposnse = await fetch("/api/auth/signup", {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await resposnse.json();

  if (!resposnse.ok) {
    throw new Error(data.message || "Something went wrong!");
  }

  return data;
}
