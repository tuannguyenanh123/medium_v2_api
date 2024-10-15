import { Controller, Get } from '@nestjs/common';

@Controller('/tags')
export class TagController {
  @Get()
  getAllTags() {
    return ['Node.js', 'TypeScript', 'JavaScript', 'NestJS'];
  }
}
