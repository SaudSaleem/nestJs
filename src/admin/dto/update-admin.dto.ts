import { PartialType } from '@nestjs/mapped-types';
import { CreateAdminDto } from './create-admin.dto';

export class UpdateAdminDto extends PartialType(CreateAdminDto) {
  admin_first_name: string;
  admin_last_name: string;
  admin_email: string;
  admin_address: string;
  admin_phone_no: string;
}
