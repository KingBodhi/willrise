import { prisma } from '@/lib/prisma';
import { getSession } from '@/lib/auth';

export async function GET() {
  const session = await getSession();
  if (!session || session.role !== 'ADMIN') {
    return new Response('Unauthorized', { status: 401 });
  }

  try {
    const inventory = await prisma.inventoryLevel.findMany({
      include: {
        variant: {
          include: {
            product: {
              include: {
                images: true
              }
            }
          }
        }
      },
      orderBy: { quantity: 'asc' }
    });

    return Response.json(inventory);
  } catch (error) {
    return new Response('Internal Server Error', { status: 500 });
  }
}