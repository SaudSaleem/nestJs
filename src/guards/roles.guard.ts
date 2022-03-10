import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class RoleGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    return validateRequest(request);
  }
}
function validateRequest(request) {
  console.log(request.headers.token);
  //implement logic which check if requested user belongs to admin or not
  //if belong to admin then return true else false
  //HINT use token to check user role
  return true;
}
