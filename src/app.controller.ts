import { Body, Controller, Post } from "@nestjs/common";
import { TranslationService } from "./translation.service";
import { TranslationRequestInterface } from "./model/translation-request.interface";
import { TranslationResponseInterface } from "./model/translation-response.interface";

const translatePath = 'translate';

@Controller()
export class AppController {
  constructor(private readonly translationService: TranslationService) {}

  @Post(translatePath)
  async translate(@Body() params: TranslationRequestInterface): Promise<TranslationResponseInterface> {
    return await this.translationService.getTranslation(params);
  }
}
