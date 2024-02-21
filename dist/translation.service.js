"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TranslationService = void 0;
const common_1 = require("@nestjs/common");
const google_translate_api_1 = require("@vitalets/google-translate-api");
const api_version_const_1 = require("./api-version.const");
let TranslationService = class TranslationService {
    async getTranslation(params) {
        const options = { to: params.to };
        if (params.from) {
            options.from = params.from;
        }
        const res = await (0, google_translate_api_1.translate)(params.text, options);
        const result = {
            original: params.text,
            translation: res.text,
            all: res,
            apiVersion: api_version_const_1.apiVersionConst
        };
        if (res?.raw?.confidence)
            result.confidence = res.raw.confidence;
        return result;
    }
};
exports.TranslationService = TranslationService;
exports.TranslationService = TranslationService = __decorate([
    (0, common_1.Injectable)()
], TranslationService);
//# sourceMappingURL=translation.service.js.map