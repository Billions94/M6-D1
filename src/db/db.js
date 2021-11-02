import fs from 'fs-extra';
import { fileURLToPath } from 'url'
import { dirname, join, } from 'path'

const { readFile, writeFile} = fs 

export const dataFolderPath = join(dirname(fileURLToPath(import.meta.url)), '../data')
console.log(dataFolderPath)

const tablesSQLPath = join(dataFolderPath, 'tables.sql')
console.log(tablesSQLPath)


export const getTables = () => readFile(tablesSQLPath)
export const writeTables = content => writeFile(tablesSQLPath, content)


