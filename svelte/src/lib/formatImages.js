import path from 'path';
import sharp from 'sharp';
import { readdir } from 'fs/promises';
import { existsSync, mkdirSync, statSync } from 'fs';

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

  const squareResizeObject = {
    width: 300,
    height: 300
  }

  try {
    const files = await readdir(path.resolve(inputDirectory));
    const processImage = async (file) => {
      if (file.endsWith('.svg')) return
      const stats = statSync(`${inputDirectory}/${file}`)

      // check if it's a folder
      if (stats.isDirectory()) {
        // create folder if it doesn't exist
        const outputFolder = `${outputDirectory}/${file}`
        if (!existsSync(outputFolder)) {
          mkdirSync(outputFolder, {recursive: true})
        }

        // repeat for files in the directory
        const dirFiles = await readdir(path.resolve(`${inputDirectory}/${file}`));
        for (const dirFile of dirFiles) {
          processImage(`${file}/${dirFile}`)
        }
        return
      }
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
      if (type === "heroes") {
        formatImage(squareResizeObject, 100, "-square");
      }
    }
    for (const file of files) {
      processImage(file)
    }
  } catch (err) {
    console.error(err);
  }
}

resizeImages('heroes')
resizeImages('originals')