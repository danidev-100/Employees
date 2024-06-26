import { Module } from '@nestjs/common';
import {Employee} from "./employee/employee.module"
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [Employee, AuthModule],
})
export class AppModule {}
