function solution(my_string, queries) {
  for (const [start, end] of queries) {
    my_string = my_string.slice(0, start) + my_string.slice(start, end + 1).split("").reverse().join("") + my_string.slice(end + 1);
  }
  return my_string;
}