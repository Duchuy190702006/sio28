function filterLongStrings(input) {
    if (!Array.isArray(input)) {
        return "Dữ liệu không hợp lệ";
    }
    
    if (input.length === 0) {
        return "Mảng không có phần tử nào";
    }
    
    let result = input.filter((str) => str.length > 5);
    return result.length > 0 ? result : "Mảng không có phần tử nào";
}
console.log(filterLongStrings(["apple", "banana", "cat", "elephant", "dog"]));
console.log(filterLongStrings([]));
console.log(filterLongStrings("abc"));