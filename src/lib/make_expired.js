export default function makeExpired() {
  const now = new Date();
  const expiredAt = new Date(now.getTime() + 15 * 60 * 1000);
  return expiredAt;
}
