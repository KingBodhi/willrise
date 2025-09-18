import { prisma } from '@/lib/prisma';
import { getSession } from '@/lib/auth';

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const session = await getSession();
  if (!session || session.role !== 'ADMIN') {
    return new Response('Unauthorized', { status: 401 });
  }

  try {
    const product = await prisma.product.findUnique({
      where: { id: params.id },
      include: {
        images: true,
        variants: {
          include: {
            inventory: true
          }
        }
      }
    });

    if (!product) {
      return new Response('Product not found', { status: 404 });
    }

    return Response.json(product);
  } catch (error) {
    return new Response('Internal Server Error', { status: 500 });
  }
}

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  const session = await getSession();
  if (!session || session.role !== 'ADMIN') {
    return new Response('Unauthorized', { status: 401 });
  }

  try {
    const updates = await req.json();
    
    const product = await prisma.product.update({
      where: { id: params.id },
      data: updates,
      include: {
        images: true,
        variants: {
          include: {
            inventory: true
          }
        }
      }
    });

    return Response.json(product);
  } catch (error) {
    return new Response('Internal Server Error', { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const session = await getSession();
  if (!session || session.role !== 'ADMIN') {
    return new Response('Unauthorized', { status: 401 });
  }

  try {
    await prisma.product.delete({
      where: { id: params.id }
    });

    return Response.json({ success: true });
  } catch (error) {
    return new Response('Internal Server Error', { status: 500 });
  }
}