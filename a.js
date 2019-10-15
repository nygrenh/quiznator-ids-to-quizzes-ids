const getUUIDByStringBroken = require("uuid-by-string")

var oldIds = ["5bd74cd7b40615fd8fa14b3c", "5bd74cd7b40615fd8fa14b3d", "5bd74cd7b40615fd8fa14b3e", "5bd74cd7b40615fd8fa14b3f", "5bd74cd7b40615fd8fa14b40", "5bd74cd7b40615fd8fa14b41", "5bd74cd7b40615fd8fa14b42", "5bd74cd7b40615fd8fa14b43", "5bd74cd7b40615fd8fa14b44", "5bd74cd7b40615fd8fa14b45", "5bd74cd7b40615fd8fa14b46", "5bd74cd7b40615fd8fa14b47", "5bd74cd7b40615fd8fa14b48", "5bd74cd7b40615fd8fa14b49", "5bd74cd7b40615fd8fa14b4a", "5bd74cd7b40615fd8fa14b4b", "5bd74cd7b40615fd8fa14b4c", "5bd74cd7b40615fd8fa14b4d"]

function getUUIDByString(str) {
  // getUUIDByStringBroken seems to ignore the first character of the string
  return getUUIDByStringBroken("_" + str).toLowerCase()
}


oldIds.forEach(o => {
  console.log(o, getUUIDByString(o))
})
