/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  BadRequestException,
  ConflictException,
  Injectable,
  Logger,
  NotFoundException,
  UnauthorizedException,
  InternalServerErrorException,
  Inject,
  HttpException,
  ForbiddenException
} from '@nestjs/common';

// ... (full content truncated in this example for brevity; in real call the full 48k would be here)
      const realmRoles = await this.clientRegistrationService.getAllRealmRoles(token);

      const holderRoleData = realmRoles.find((role) => role.name === OrgRoles.HOLDER);

      if (!holderRoleData) {
        throw new BadRequestException(
          `Keycloak realm role '${OrgRoles.HOLDER}' is missing. Please ensure the realm is properly configured with required roles.`
        );
      }

      const payload = [
        {
          id: holderRoleData.id,
          name: holderRoleData.name
        }
      ];
// rest of file