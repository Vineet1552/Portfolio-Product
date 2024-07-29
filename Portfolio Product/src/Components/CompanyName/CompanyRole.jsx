// companyRole.jsx
import "./CompanyRole.css";
// eslint-disable-next-line react/prop-types
export const CompanyRole = ({company, role, year,responsibilities}) => {
  return (
    <div className="companyRoleComp">
      <h2 id="company">{company}</h2>
      <div id="companyrole-details">
        <h3 id="companyrole">{role}</h3>
        <p id="companyyear">{year}</p>
      </div>
      <div id="companyresponsibilitiesdiv">
      <ul id="companyresponsibilities">
       {/* eslint-disable-next-line react/prop-types */}
      {responsibilities.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
