import { Server } from 'http';
import app from './app';
import prisma from './client';
import config from './config/config';

import { SerialPort, ReadlineParser } from 'serialport';

let server: Server;
prisma.$connect().then(() => {
  console.log('Connected to  Database');
  server = app.listen(config.port, () => {
    console.log(`Listening to port ${config.port}`);
  });
});

const serialPort = new SerialPort({ path: 'COM7', baudRate: 9600 });
const parser = serialPort.pipe(new ReadlineParser({ delimiter: '\n' }));

parser.on('open', () => {
  console.log('Connection is opened');
});

parser.on('data', async (data: any) => {
  const measurement = data.split(':')[0];
  // console.log('data', data);
  // console.log('measurement', measurement);
  if (measurement === 'Density') {
    const value = parseFloat(data.split(':')[1]);
    await prisma.fatContent.create({
      data: {
        density: value
      }
    });
  }
  if (measurement == 'IR Value') {
    const value = parseFloat(data.split(':')[1]);
    await prisma.fatContent.create({
      data: {
        inflared: value
      }
    });
  }
  if (measurement == 'Color RGB') {
    const value = data.split(':');
    const length = value.length;
    const color = data
      .split(':')
      .slice(1, length)
      .join('')
      .replace(/\s+/g, '')
      .replace(/[RGB]/gi, '');

    await prisma.fatContent.create({
      data: {
        color
      }
    });
  }
});
