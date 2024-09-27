import { parse, Parser } from "csv-parse";
import fs from "fs";

import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { Category } from "../../model/Category";

interface IImportCategory {
  name: string;
  description: string;
}

class ImportCategoryUseCase {
  constructor(private categoriesRepository: CategoriesRepository) { }

  loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
    return new Promise((resolve, reject) => {
      const stream: fs.ReadStream = fs.createReadStream(file.path);
      const categories: IImportCategory[] = [];
      const parseFile: Parser = parse();
      stream.pipe(parseFile);
      parseFile.on("data", async (line) => {
        const [name, description] = line;
        categories.push({
          name,
          description,
        });
      })
        .on("end", () => {
          resolve(categories);
        })
        .on("error", (err) => {
          reject(err);
        });
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories: Promise<IImportCategory[]> = await this.loadCategories(file);

    categories.map(async (category) => {
      const { name, description } = category;
      const categoryExists: Category = this.categoriesRepository.findByName(name);
      if (!categoryExists) {
        this.categoriesRepository.create({
          name,
          description,
        });
      }
    });
  }
}

export { ImportCategoryUseCase };
