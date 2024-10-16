import { Controller, Get } from '@nestjs/common';
import { TagService } from '@app/tag/tag.service';
import { Tag } from './tag.entity';

@Controller('/tags')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @Get()
  getAllTags(): Promise<{ tags: Tag[] }> {
    return this.tagService.getAllTags();
  }
}
