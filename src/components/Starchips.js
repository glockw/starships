import { useMemo } from "react";
import { convertToCamelCase } from "../utils";

const Starchips = ({ data = [] }) => {
  const tr = (starship) => {
    const { name, manufacturer, model, crew, passengers } = starship;
    return (
      <tr key={convertToCamelCase(name)}>
        <td>{manufacturer}</td>
        <td>{name}</td>
        <td>{model}</td>
        <td>{crew}</td>
        <td>{passengers}</td>
      </tr>
    );
  };

  const starchips = useMemo(() => {
    return data.map(tr);
  }, [data]);

  return (
    <table>
      <thead>
        <tr>
          <th>manufacturer</th>
          <th>name</th>
          <th>model</th>
          <th>crew</th>
          <th>passengers</th>
        </tr>
      </thead>
      <tbody>{starchips}</tbody>
    </table>
  );
};

export default Starchips;
