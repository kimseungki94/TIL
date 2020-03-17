var map = new MyMap();
map.put("id", "ssafy");
map.put("name", "싸피");
console.log(map.size()); // 2
console.log(map.get("id")); // ssafy
console.log(map.get("name")); // 싸피
map.remove("id");
console.log(map.get("id")); // undefined
map.clear();
console.log(map.size()); // 0