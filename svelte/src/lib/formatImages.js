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
      sharp(`${inputDirectory}/${file}`)
        .toFormat('webp')
        .resize(wideResizeObject)
        .webp({ quality: 100 })
        .toFile(`${outputDirectory}/${file.replace(/\.[a-zA-Z]*$/,'.webp')}`)
        .catch(error => console.error(error))
      sharp(`${inputDirectory}/${file}`)
        .toFormat('webp')
        .resize(mediumResizeObject)
        .toFile(`${outputDirectory}/${file.replace(/\.[a-zA-Z]*$/,'-medium.webp')}`)
        .catch(error => console.error(error))
      sharp(`${inputDirectory}/${file}`)
        .toFormat('webp')
        .resize(narrowResizedObject)
        .toFile(`${outputDirectory}/${file.replace(/\.[a-zA-Z]*$/,'-narrow.webp')}`)
        .catch(error => console.error(error))
      sharp(`${inputDirectory}/${file}`)
        .toFormat('webp')
        .resize(wideResizeObject)
        .webp({ quality: 1 })
        .toFile(`${outputDirectory}/${file.replace(/\.[a-zA-Z]*$/,'-placeholder.webp')}`)
        .catch(error => console.error(error))
    }
  } catch (err) {
    console.error(err);
  }
}

resizeImages('heroes')
resizeImages('originals')