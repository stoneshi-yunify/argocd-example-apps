const fs = require('fs');

// 读取文本文件
const filePath = '/Users/brance/Desktop/node-project/src/test.txt';  // 替换为实际的文件路径
const fileContent = fs.readFileSync(filePath, 'utf-8');

// 正则表达式匹配URL、HTTP方法、请求体和请求头
const urlRegex = /fetch\(["'](.*?)["'],/i;
const methodRegex = /"method":\s*["'](.*?)["']/i;
const bodyRegex = /"body":\s*["'](.*?)["']/i;
const headersRegex = /"headers":\s*({[\s\S]*?})/i;  // Update regex to match headers as JSON string

const urlMatch = urlRegex.exec(fileContent);
const methodMatch = methodRegex.exec(fileContent);
const bodyMatch = bodyRegex.exec(fileContent);
const headersMatch = headersRegex.exec(fileContent);

const url = urlMatch ? urlMatch[1] : null;
const method = methodMatch ? methodMatch[1] : null;
const body = bodyMatch ? bodyMatch[1] : null;
const headers = headersMatch ? JSON.parse(headersMatch[1]) : null;  // Parse headers as JSON

module.exports = {
  url,
  method,
  body,
  headers,
};
