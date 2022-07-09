var pathname = "/home/user/dir/file.txt";

const path = (pathname) => {
    return pathname.split("/").pop()
};

console.log(path(pathname))