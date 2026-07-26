export default function projectDetail(pathname: string) {
  return /^\/projects\/[^/]+$/.test(pathname ?? "");
}
