import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h2>Welcome</h2>
      <h3>
        {" "}
        <Link href="/products">Products</Link>
      </h3>
    </>
  );
}
