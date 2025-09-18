import { prisma } from '@/lib/prisma';
import { getSession } from '@/lib/auth';

export async function GET() {
  const session = await getSession();
  if (!session || session.role !== 'ADMIN') {
    return new Response('Unauthorized', { status: 401 });
  }

  try {
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const [
      totalRevenue,
      totalOrders,
      totalCustomers,
      conversionRate,
      topProducts
    ] = await Promise.all([
      prisma.order.aggregate({
        _sum: { total: true },
        where: {
          createdAt: { gte: thirtyDaysAgo },
          status: { in: ['PAID', 'SHIPPED', 'DELIVERED'] }
        }
      }),
      prisma.order.count({
        where: { createdAt: { gte: thirtyDaysAgo } }
      }),
      prisma.user.count({
        where: { 
          role: 'CUSTOMER',
          createdAt: { gte: thirtyDaysAgo }
        }
      }),
      // Mock conversion rate calculation
      Promise.resolve(2.8),
      prisma.orderItem.groupBy({
        by: ['title'],
        _sum: { qty: true, price: true },
        orderBy: { _sum: { price: 'desc' } },
        take: 5
      })
    ]);

    return Response.json({
      revenue: totalRevenue._sum.total || 0,
      orders: totalOrders,
      customers: totalCustomers,
      conversionRate,
      topProducts: topProducts.map(p => ({
        name: p.title,
        sales: p._sum.qty || 0,
        revenue: p._sum.price || 0
      }))
    });
  } catch (error) {
    return new Response('Internal Server Error', { status: 500 });
  }
}