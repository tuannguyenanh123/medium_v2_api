import { Injectable } from '@nestjs/common';
import { Tag } from '@app/tag/tag.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TagService {
  constructor(
    @InjectRepository(Tag)
    private readonly tagRepository: Repository<Tag>,
  ) {}
  async getAllTags(): Promise<{ tags: Tag[] }> {
    const tags = await this.tagRepository.find();
    return {
      tags: tags.map((tag) => {
        return { id: tag.id, name: tag.name };
      }),
    };
  }
}
