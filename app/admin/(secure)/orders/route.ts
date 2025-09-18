import { prisma } from '@/lib/prisma';
import { getSession } from '@/lib/auth';

export async function GET() {
  const session = await getSession();
  if (!session || session.role !== 'ADMIN') {
    return new Response('Unauthorized', { status: 401 });
  }

  try {
    const orders = await prisma.order.findMany({
      include: {
        items: {
          include: {
            variant: {
              include: {
                product: true
              }
            }
          }
        }
      },
      orderBy: { createdAt: 'desc' }
    });

    return Response.json(orders);
  } catch (error) {
    return new Response('Internal Server Error', { status: 500 });
  }
}