function solution(nums) {
    const uniquePokemons = new Set(nums);
    const numUniquePokemons = uniquePokemons.size;
    const numPokemonsToSelect = nums.length / 2;

    return Math.min(numUniquePokemons, numPokemonsToSelect);
}