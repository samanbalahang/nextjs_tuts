export default async function Page({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;

  return (
    <div>
      <h1>Documentation</h1>

      <ul>
        {slug.map((item, index) => (
          <li key={index}>{item}</li>
        ))} 
      </ul>
    </div>
  );
}
