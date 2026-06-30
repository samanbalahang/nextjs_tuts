import Image from "next/image";
export default function Home() {
    return(
        <main className="w-1/2 mx-auto">
            <h1>
                My first Next.js app !.
            </h1>
            <p>
                Welcome to my first Next.js application.
            </p>
            <Image src="/next.svg" alt="some thing" width={100} height={20} />
        </main>
    );

      
}
