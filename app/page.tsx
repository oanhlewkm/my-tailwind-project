export default function Home() {
  return (
    <main>
      <div
        className="flex flex-column"
        style={{
          height: 1000000,
        }}
      >
        <div
          className="bg-red-700"
          style={{
            height: 100,
          }}
        ></div>
        <div
          className="bg-blue-700"
          style={{
            height: 200,
          }}
        ></div>
      </div>
    </main>
  );
}
