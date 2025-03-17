function processArray(input) {
    if (!Array.isArray(input)) {
        return "Dữ liệu không hợp lệ";
    }
    
    if (input.length === 0) {
        return "Mảng không có phần tử nào";
    }
    
    let result = input.filter(num => typeof num === 'number' && num >= 10);
    
    return result.length > 0 ? result : "Mảng không có phần tử nào";
}
console.log(processArray([1, 22, 10, 9, 8]));
console.log(processArray([]));
console.log(processArray("abc"));