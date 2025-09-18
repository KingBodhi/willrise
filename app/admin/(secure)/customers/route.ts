import { prisma } from '@/lib/prisma';
import { getSession } from '@/lib/auth';

export async function GET() {
  const session = await getSession();
  if (!session || session.role !== 'ADMIN') {
    return new Response('Unauthorized', { status: 401 });
  }

  try {
    const customers = await prisma.user.findMany({
      where: { role: 'CUSTOMER' },
      select: {
        id: true,
        email: true,
        name: true,
        createdAt: true
      },
      orderBy: { createdAt: 'desc' }
    });

    return Response.json(customers);
  } catch (error) {
    return new Response('Internal Server Error', { status: 500 });
  }
}