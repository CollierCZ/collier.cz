import path from 'path';
import sharp from 'sharp';
import { readdir } from 'fs/promises';
import { existsSync, mkdirSync } from 'fs';

const resizeImages = async (type) => {
  const inputDirectory = `src/images/${type}`
  const outputDirectory = `static/formatted-images/${type}`
  if (!existsSync(inputDirectory)) {
    mkdirSync(inputDirectory)
  }
  if (!existsSync(outputDirectory)) {
    mkdirSync(outputDirectory, {recursive: true})
  }

  const wideResizeObject = type === "heroes" ? {
    width: 800,
    height: 264,
  } : {
    width: 800
  }

  const mediumResizeObject = type === "heroes" ? {
    width: 500,
    height: 264,
  } : {
    width: 500
  }

  const narrowResizedObject = type === "heroes" ? {
    width: 300,
    height: 132,
  } : {
    width: 300
  }

  try {
    const files = await readdir(path.resolve(inputDirectory));
    for (const file of files) {
      const formatImage = (dimensionsObject, quality = 80, suffix = '') => {
        sharp(`${inputDirectory}/${file}`)
          .toFormat('webp')
          .resize(dimensionsObject)
          .webp({ quality: quality })
          .toFile(`${outputDirectory}/${file.replace(/\.[a-zA-Z]*$/,`${suffix}.webp`)}`)
          .catch(error => console.error(error))
      }
      formatImage(wideResizeObject, 100);
      formatImage(mediumResizeObject, 80, "-medium");
      formatImage(narrowResizedObject, 80, "-narrow");
      formatImage(wideResizeObject, 100, "-placeholder");
    }
  } catch (err) {
    console.error(err);
  }
}

resizeImages('heroes')
resizeImages('originals')