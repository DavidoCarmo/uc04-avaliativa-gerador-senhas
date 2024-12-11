
function getRandomChar(min: number, max: number): string {
    return String.fromCharCode(min + Math.random() * (max - min + 1) | 0);
  }
  
  
  function generatePassword(): string {
    const specialCharacters = ['.', '#', '/', '?', '@'];
    let passwordArray = [
      getRandomChar(97, 122), getRandomChar(97, 122), // 2 letras minúsculas
      getRandomChar(65, 90), getRandomChar(65, 90),  // 2 letras maiúsculas
      getRandomChar(48, 57), getRandomChar(48, 57),  // 2 números
      specialCharacters[Math.floor(Math.random() * specialCharacters.length)] // 1 caractere especial
    ];
  
    return passwordArray.sort(() => Math.random() - 0.5).join(''); // Embaralhar e juntar em uma string
  }
  
  // Gerar 5 senhas como exemplo
  const senhas = Array.from({ length: 5 }, generatePassword);
  console.log(senhas);  