const pathname = "/home/user/dir/file.txt"
const getFileNameByPatch = (pathname) =>{
    return  pathname.split('/').pop()
    
}

console.log(getFileNameByPatch(pathname))