import { Suspense } from "react";
import Loading from "./loading";
export default function ProductLayout({ children }) {
  return <Suspense fallback={<Loading />}>{children}</Suspense>;
}
