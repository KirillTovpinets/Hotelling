import bcrypt from 'bcrypt';
export async function hashPassword(password: string) {
  return await bcrypt.hash(password, 5).then((hash) => hash);
}

export async function isTheSame(password: string, hashedPassword: string) {
  return bcrypt.compare(password, hashedPassword).then((theSame) => theSame);
}
