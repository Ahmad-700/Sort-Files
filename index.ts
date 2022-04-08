/**
 */


const config: Config = {
   path: `C:\\Users\\Ahmed\\Desktop\\Tests Folder\\test`,
   ignoreNotDigitalize: false,
   ignoreDuplicate: false,
   ignoreJumping: false,
   sleepAfterDisplay: 3000
}

//Do NOT Touch Below
import * as fileSystem from 'fs'
const fs = fileSystem.promises;
async function main() {
   var totalFiles = 0;

   if (config.path)
      var dir = await fs.opendir(config.path);

   for await (const f of dir) {
      if (f.isDirectory())
         throw new Error(`There is a Directory named: ${f.name}. In the path provided! ${config.path}`);
      totalFiles++;
   }

   var myFiles: MyFile[] = (await fs.readdir(config.path)).map((v, i, arr): MyFile => {
      let f = v.substring(0, v.lastIndexOf('.'));
      let regEx = f.match(/(\d+)/g);
      return regEx ? { name: v, number: Number(regEx[0]) }
         : { name: v, number: null };
   }).sort((a, b) => a.number > b.number ? 1 : (a.number < b.number ? -1 : 0))

   checkValidConfig(myFiles)

   myFiles = myFiles.filter((a) => { if (a.number) return a });
   console.table(myFiles)
   await new Promise((resolve) => {
      setTimeout(async() => {
         console.log('done')


         for (let file of myFiles) {
            await fs.rename(config.path + '\\' + file.name,
               `${config.path}\\${file.number}- ${file.name}`);
         }


         resolve('')
      }, config.sleepAfterDisplay)
   });
}







function checkValidConfig(files: MyFile[]) {
   var e = 'Configuration Violation in';
   var v = `Invalid Configuration!`
   if (config.sleepAfterDisplay < 0)
      throw new Error(`${v} sleepAfterDisplay should be 0 or more. Found ${config.sleepAfterDisplay}`)
if (typeof config.ignoreDuplicate !== 'boolean')
      throw new Error(`${v} ignoreDuplicate should be true or false. Found ${config.ignoreDuplicate}`)
if (typeof config.ignoreJumping !== 'boolean')
      throw new Error(`${v} ignoreJumping should be true or false. Found ${config.ignoreJumping}`)
if (typeof config.ignoreNotDigitalize !== 'boolean')
      throw new Error(`${v} ignoreNotDigitalize should be true or false. Found ${config.ignoreNotDigitalize}`)

   //checking
   if (config.ignoreNotDigitalize === false && files.map(a => a.number).includes(null))
      throw new Error(`${e} ignoreNotDigitalize; file '${JSON.stringify(files[files.map(a => a.number).indexOf(null)])}' dose not contain a number.`)


   if (config.ignoreDuplicate === false)
      files.map(a => a.number).forEach((v, i, arr) => {
         if (arr[i + 1] && v == arr[i + 1])
            throw new Error(`${e} ignoreDuplicate; two files have the same number '${JSON.stringify(files[i])}' and '${JSON.stringify(files[i + 1])}'`)
      })



   if (config.ignoreJumping == false) {
      let toSort = [...files.map(f => f.number)];
      toSort.sort((a, b) => a > b ? 1 : (a < b ? -1 : 0));
      toSort.forEach((v, i, arr) => {
         if (arr[i] && arr[i + 1])
            if (arr[i] != arr[i + 1])
               if (arr[i] != arr[i + 1] - 1)
                  throw new Error(`${e} ignoreJumping; there is incorrect increment in numbers for file '${JSON.stringify(files[files.map(f => f.number).indexOf(arr[i])])}' and  '${JSON.stringify(files[files.map(f => f.number).indexOf(arr[i + 1])])}'`)


      })
      console.log('sorted', toSort)
   }


}


/**
 * Restriction or limitation will be checked before any action. 
 * If there a violation, the program will exit and throw an error.
 */
interface Config {
   /**
  * The path of folder that have many files to rename with numbers.
  */
   path: string
   /**
    * File without a number in its name then ignore it.
    */
   ignoreNotDigitalize: boolean
   /**
   * IF files doesn't increment correctly. ex: 1, 2, 5, 6.
   */
   ignoreJumping: boolean,
   /**
    * Tow files contain same number.
    * Note: if true then renaming will be duplicated not ignored ex: '1.mp4', '1a.mp4'  -> '(1) 1.mp4', '(1) 1a.mp4.
    */
   ignoreDuplicate: boolean,
   /**
    * show table of how renaming will be for each file. wait time in ms.
    * So, you can cancel the execution if there is an error by 'ctrl + c'
    */
   sleepAfterDisplay: number
}

interface MyFile {
   name: string
   number: number
}





async function test() {
   var t = 'te36ts';
   console.log(
      t.match(/(\d+)/g)
      , 'stackOverFlow')
   console.log(
      t.match(/[0-9]/g)
      , 'mine')
}



/**
 * make two files as cache files 1-cacheTs.txt 2-cacheJs.txt
 * 1- will save typescript file txt 2- js
 * To prevent saving all files as txt we can hash them to save just 256-bit if file change then hash will change. So, same functionality but less space
 * if all files not found return true and make those files by copy 1-index.ts and 2-index.js
 * if all files exist then:
 *    if cacheTs don't equal to index.ts and cacheJs equal to index.js then user doesn't compile TS return false;
 *    if cacheTs don't equal to index.ts and cacheJs don't equal to index.js then user compile TS save them and return true;
 *    To prevent malicious usage else return false with unknown error;
 * @returns {Boolean|string} string for message error boolean for true.
 */
 import * as crypto from 'crypto'
 async function isTypescriptCompiled(): Promise<string | boolean> {
    var indexTs: string = await fs.readFile('./index.ts', 'utf8');
    var indexJs: string = await fs.readFile('./index.js', 'utf8');
    var cacheTs: string;
    var cacheJs: string;
    try {
       cacheTs = await fs.readFile('./cacheTs.txt', 'utf8');
       cacheJs = await fs.readFile('./cacheJs.txt', 'utf8');
    } catch (e) {
       cacheTs = null;
       cacheJs = null;
    }
    indexTs = crypto
       .createHash('sha256')
       .update(indexTs)
       .digest("hex");//'base64' | 'hex';
    indexJs = crypto
       .createHash('sha256')
       .update(indexJs)
       .digest("hex");//'base64' | 'hex';
 
    if (cacheJs === null && cacheTs === null)
       return true;
    if (typeof cacheJs === 'string' && typeof cacheTs === 'string' &&
       (cacheTs !== indexTs && cacheJs === indexJs)) {
       return false;
    } else {
       await fs.writeFile('./cacheTs.txt', indexTs);
       await fs.writeFile('./cacheJs.txt', indexJs);
       return true;
    }
       // if (cacheTs === indexTs && cacheJs === indexJs ||
       //    (cacheTs !== indexTs && cacheJs !== indexJs)) 
       //    return true;
    // return 'Unknown Error when checking if file compiled.';
 }

const wrapper = (async () => {//to get rid of try catch in main function
   try {
      console.time('process Time');
      let compiled: string | boolean = await isTypescriptCompiled();
      if (typeof compiled !== 'boolean' || compiled === false)
         throw new Error(`Compile TypeScript File Before Run JavaScript! ${compiled || ''}`)
      
      true ?//true main(), false test()
         await main() :
         await test();
      console.timeEnd('process Time');
   } catch (e) { console.log('wrapper catch', e) }
})
wrapper()