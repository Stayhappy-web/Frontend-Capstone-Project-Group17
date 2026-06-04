import "./FactsTable.css";

function FactsTable() {
  return (
    <section className="facts-section">
      <h2>Planetary Facts at a Glance</h2>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Mass</th>
            <th>Diameter</th>
            <th>Density</th>
            <th>Gravity</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Earth</td>
            <td>5.97</td>
            <td>12,756 km</td>
            <td>5.51</td>
            <td>9.8</td>
          </tr>

          <tr>
            <td>Mars</td>
            <td>0.642</td>
            <td>6,792 km</td>
            <td>3.93</td>
            <td>3.7</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
export default FactsTable;
