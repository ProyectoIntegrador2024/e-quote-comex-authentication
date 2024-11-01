import { Module } from '@nestjs/common';
import { AppController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [__dirname + '/**/*.entity.{js,ts}'],
      synchronize: false, // No se recomienda en producción. Úsalo solo para desarrollo
      logging: true,
    }),
  ],
  controllers: [AppController],
  providers: [AuthService],
})
export class AppModule {}
