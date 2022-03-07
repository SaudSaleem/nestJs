enum UserRole {
  STUDENT = 'Student',
  TEACHER = 'Teacher',
}
export class CreateUserDto {
  user_first_name: string;
  user_last_name: string;
  user_email: string;
  user_password: string;
  user_address: string;
  user_phone_no: string;
  user_role: UserRole;
  faculty_id: number;
  token: string;
}
