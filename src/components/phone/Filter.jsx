import PropTypes from 'prop-types';
import './phoneStyles.css'
//className={style.filter}
const Filter = ({ value, onChange }) => (
  <div >
    <p>Find contacts by name</p>
    <input type="name" value={value} onChange={onChange} />
  </div>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;