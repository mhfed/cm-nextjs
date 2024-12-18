export async function POST(req: Request) {
  const body = await req.json();
  console.log(body);
  return new Response('OK', { status: 200 });
}

export async function GET(req: Request) {
  console.log('🚀 ~ GET ~ req:', req);
  return new Response('OK', { status: 200 });
}
