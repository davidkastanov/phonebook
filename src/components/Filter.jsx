import PropTypes from 'prop-types';

export const Filter = ({ value, onChange }) => (
  <label style={{ display: 'block', marginBottom: '15px' }}>
    Find contacts by name
    <input
      type="text"
      value={value}
      onChange={onChange}
      style={{ display: 'block', marginTop: '5px' }}
    />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};