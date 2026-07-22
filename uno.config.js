import { defineConfig } from 'unocss'

import {
  presetIcons,
  presetUno,
  extractorSplit,
  presetTypography
} from "unocss";
import extractorPug from "@unocss/extractor-pug";

export default defineConfig(
  {
    transformers: [],
    presets: [
      presetIcons({
        cdn: 'https://esm.sh/',
        scale: 1.2,
        extraProperties: {
          "vertical-align": "middle",
        },
      }),
      presetUno(),
      presetTypography(),
    ],
    extractors: [extractorSplit, extractorPug()],
  })