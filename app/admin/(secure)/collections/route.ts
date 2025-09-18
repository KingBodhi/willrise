import { prisma } from '@/lib/prisma';
import { getSession } from '@/lib/auth';

export async function GET() {
  const session = await getSession();
  if (!session || session.role !== 'ADMIN') {
    return new Response('Unauthorized', { status: 401 });
  }

  try {
    const collections = await prisma.collection.findMany({
      include: {
        products: {
          include: {
            product: true
          }
        }
      },
      orderBy: { createdAt: 'desc' }
    });

    return Response.json(collections);
  } catch (error) {
    return new Response('Internal Server Error', { status: 500 });
  }
}

export async function POST(req: Request) {
  const session = await getSession();
  if (!session || session.role !== 'ADMIN') {
    return new Response('Unauthorized', { status: 401 });
  }

  try {
    const { title, handle } = await req.json();
    
    if (!title || !handle) {
      return new Response('Missing required fields', { status: 400 });
    }

    const collection = await prisma.collection.create({
      data: { title, handle }
    });

    return Response.json(collection);
  } catch (error) {
    return new Response('Internal Server Error', { status: 500 });
  }
}