const fs = require('fs');

// Obtenha o valor da variável de ambiente do sistema
const apiUrl = process.env['API_URL'] || 'API_URL';
console.log(apiUrl)

// Leia o arquivo de template
const template = fs.readFileSync('src/environments/environment.template.ts', 'utf-8');

// Substitua o valor da variável de ambiente
const updatedTemplate = template.replace('${API_URL}', apiUrl);

// Escreva o novo arquivo environment.ts
fs.writeFileSync('src/environments/environment.prod.ts', updatedTemplate);
fs.writeFileSync('src/environments/environment.ts', updatedTemplate);
