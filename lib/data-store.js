
import fs from "fs";
import path from "path";
const dataDir = path.join(process.cwd(), "data");
function readJson(file){ return JSON.parse(fs.readFileSync(path.join(dataDir,file),"utf-8")); }
function writeJson(file,value){ fs.writeFileSync(path.join(dataDir,file), JSON.stringify(value,null,2), "utf-8"); }
export function getProducts(){ return readJson("products.json"); }
export function saveProducts(products){ writeJson("products.json", products); }
export function getSiteContent(){ return readJson("site-content.json"); }
export function saveSiteContent(site){ writeJson("site-content.json", site); }
