import { PartialType } from '@nestjs/mapped-types';
import { CreateSpatialDto } from './create-spatial.dto';

export class UpdateSpatialDto extends PartialType(CreateSpatialDto) {}
