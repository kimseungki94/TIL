/**
 * MyMap 생성자로 사용될 함수를 구현
 */
function MyMap() {
}
MyMap.prototype.put = function (id, value) {
    map[id]=value;  
}
MyMap.prototype.size = function () {
    return Object.keys(map).length;
}
MyMap.prototype.get = function (id) {
    return map[id];
}
MyMap.prototype.remove = function (id) {
    delete map[id];
}
MyMap.prototype.clear = function () {
    map = new MyMap();
}
