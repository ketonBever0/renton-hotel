"use client"
// import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-600">
      <div className="">
        <button
          onClick={async () => {
            console.log("asd");
          }}
        >Test API</button>
      </div>

    </div>
  );
}
