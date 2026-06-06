import "./FactsTable.css";

function FactsTable() {
  return (
    <section id="facts-table" className="facts-table-section align_container">
      <div className="page">
        <div className="header">
          <h1>Planetary Facts at a Glance</h1>
          <p>
            Below is a comparative table of major planets in our solar system.
            The data highlights key physical properties used by astronomers and
            researchers worldwide.
          </p>
        </div>

        <p className="caption">
          Data about the planets of our solar system (Planetary facts taken from NASA)
        </p>

        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th colSpan="2"></th>
                <th>Name</th>
                <th>Mass (10²⁴ kg)</th>
                <th>Diameter (km)</th>
                <th>Density (kg/m³)</th>
                <th>Gravity (m/s²)</th>
              </tr>
            </thead>
            <tbody>

              {/* Terrestrial Planets */}
              <tr>
                <td className="group-cell" rowSpan="4" colSpan="2">
                  Terrestrial<br />Planets
                </td>
                <td className="planet-name">Mercury</td>
                <td>0.330</td>
                <td>4,879</td>
                <td>5,427</td>
                <td>3.7</td>
              </tr>
              <tr>
                <td className="planet-name">Venus</td>
                <td>0.330</td>
                <td>4,879</td>
                <td>5,427</td>
                <td>3.7</td>
              </tr>
              <tr>
                <td className="planet-name">Earth</td>
                <td>0.330</td>
                <td>4,879</td>
                <td>5,427</td>
                <td>3.7</td>
              </tr>
              <tr>
                <td className="planet-name">Mars</td>
                <td>0.330</td>
                <td>4,879</td>
                <td>5,427</td>
                <td>3.7</td>
              </tr>

              {/* Jovian → Gas Giants */}
              <tr>
                <td className="group-cell" rowSpan="4">
                  Jovian<br />Planets
                </td>
                <td className="subgroup-cell" rowSpan="2">
                  Gas<br />Giants
                </td>
                <td className="planet-name">Jupiter</td>
                <td>0.330</td>
                <td>4,879</td>
                <td>5,427</td>
                <td>3.7</td>
              </tr>
              <tr>
                <td className="planet-name">Saturn</td>
                <td>0.330</td>
                <td>4,879</td>
                <td>5,427</td>
                <td>3.7</td>
              </tr>

              {/* Jovian → Ice Giants */}
              <tr>
                <td className="subgroup-cell" rowSpan="2">
                  Ice<br />Giants
                </td>
                <td className="planet-name">Uranus</td>
                <td>0.330</td>
                <td>4,879</td>
                <td>5,427</td>
                <td>3.7</td>
              </tr>
              <tr>
                <td className="planet-name">Neptune</td>
                <td>0.330</td>
                <td>4,879</td>
                <td>5,427</td>
                <td>3.7</td>
              </tr>

              {/* Dwarf Planets */}
              <tr>
                <td className="group-cell" colSpan="2">Dwarf Planets</td>
                <td className="planet-name">Pluto</td>
                <td>0.330</td>
                <td>4,879</td>
                <td>5,427</td>
                <td>3.7</td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default FactsTable;