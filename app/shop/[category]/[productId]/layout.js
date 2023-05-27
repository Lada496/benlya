import { Suspense } from "react";
export default function ProductLayout({ children }) {
  return (
    <Suspense fallback={<div>Product Page Loading...</div>}>
      {children}
    </Suspense>
  );
}
