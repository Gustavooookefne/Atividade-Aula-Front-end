function PalavraPalindrome(palavra){
    return palavra === palavra.split("").reverse().join("");
}

console.log(PalavraPalindrome(ovo))
console.log(PalavraPalindrome(pato))
console.log(PalavraPalindrome(radar))