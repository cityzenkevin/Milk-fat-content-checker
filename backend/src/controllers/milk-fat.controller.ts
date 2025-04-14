import catchAsync from '../utils/catchAsync';
import prisma from '../client';

const getCOntents = catchAsync(async (req, res) => {
  const fatContent = await prisma.fatContent.findMany({
    select: {
      id: true,
      density: true,
      inflared: true,
      color: true,
      createdAt: true
    }
  });
  res.send(fatContent);
});

export default {
  getCOntents
};
