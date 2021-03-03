/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  const parts = path.split('/').filter(part => part.length !== 0);

  let canonicalPath = '/';

  for(let i = 0; i < parts.length; i++) {
    const part = parts[i];

    if(part.includes('.') && part.length === 1) {
      continue;
    } else if (part.includes('.') && part.length === 2) {
      canonicalPath = canonicalPath.length !== 1 ? canonicalPath.substr(0, canonicalPath.lastIndexOf('/')) : canonicalPath;
    } else {
      canonicalPath += canonicalPath[canonicalPath.length - 1] === '/' ? part : '/' + part;
    }
  }
  return canonicalPath.length === 0 ? '/' : canonicalPath;
};

const path1 = "/a/./b//../../c/";
const path2 = "/.../home/";
const path3 = "/../";
const path4 = "/home//foo/";
const path5 = "/a//b////c/d//././/..";
const path6 = "/abc/...";
const path7 = "/home";
const path8 = "/home/../../..";
console.log('path ', simplifyPath(path8));