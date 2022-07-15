import axios from "axios";

const transpose = (matrix) =>
  matrix.reduce(
    (result, row) => row.map((_, i) => [...(result[i] || []), row[i]]),
    []
  );

async function loader() {
  let response = null;

  const myMap = new Map();
  try {
    response = await axios.get("https://jsonplaceholder.typicode.com/todos");
  } catch (error) {
    console.log(error);
  }

  for (const it of response.data) {
    const completed = it.completed ? 1 : 0;

    if (myMap.has(it.userId)) {
      const [todoCount, completeCount] = myMap.get(it.userId);
      myMap.set(it.userId, [todoCount + 1, completeCount + completed]);
    } else {
      myMap.set(it.userId, [1, completed]);
    }
  }
  return transpose(Array.from(myMap).map(([k, v]) => [k, ...v]));
}

const data = await loader();
console.log(data);
