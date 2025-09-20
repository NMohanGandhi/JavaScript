/*
2.Create an object with multiple layers of nested 
objects and arrays. Write a function that takes a key 
string as a parameter and returns the value associated 
with that key in the nested object.
*/

const nestedData = {
  user: {
    name: 'Alice',
    contact: {
      email: 'alice@example.com',
      phones: ['123-456', '789-012']
    },
    addresses: [
      {
        type: 'home',
        city: 'New York'
      },
      {
        type: 'work',
        city: 'Los Angeles'
      }
    ]
  },
  settings: {
    theme: 'dark',
    notifications: {
      email: true,
      sms: false
    }
  }
};
function findValueByKey(obj, targetKey) {
  if (typeof obj !== 'object' || obj === null) return undefined;

  if (obj.hasOwnProperty(targetKey)) {
    return obj[targetKey];
  }

  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      const result = findValueByKey(obj[key], targetKey);
      if (result !== undefined) {
        return result;
      }
    }
  }

  return undefined;
}
console.log(findValueByKey(nestedData, 'theme')); // "dark"
console.log(findValueByKey(nestedData, 'city'));  // "New York" (returns first match)
console.log(findValueByKey(nestedData, 'email')); // "alice@example.com"
