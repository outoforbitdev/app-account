export function isNullOrEmpty(val: any) {
    if (val === null){
        return true;
    }
    if (val === "") {
        return true;
    }
    return false;
}