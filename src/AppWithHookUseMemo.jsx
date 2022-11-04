// При первом рендере компонента вызывается функция () => planets.filter, запоминается ее результат и возвращается как результат работы хука. Если при следующих рендерах зависимости [planets, query] не меняются, то хук не вызывает функцию, а просто возвращает сохраненный результат ее работы. Если любая из зависимостей изменилась, то хук вызывает функцию заново, запоминает новое значение и возвращает его.


import { useState, useMemo } from "react";

const AppWithHookUseMemo = ({ someProp }) => {
  const [planets, setPlanets] = useState(["Earth", "Mars", "Jupiter", "Venus"]);
  const [query, setQuery] = useState("");
  const [clicks, setClicks] = useState(0);

    
  const filteredPlanets = useMemo(
      () => planets.filter(planet => {
          console.log("useMemo is here");
          return planet.includes(query);
      }),
    [planets, query]
  );

  return (
    <div>
      <div>Some prop: {someProp}</div>
      <button onClick={() => setClicks(clicks + 1)}>
        Number of clicks: {clicks}
          </button>
      <button onClick={() => setPlanets([...planets, "Saturn"])}>
        Add planet Saturn
      </button>
      <div>
        {filteredPlanets.map(planet => (
          <div key={planet}>{planet}</div>
        ))}
      </div>
    </div>
  );
};


export default AppWithHookUseMemo;