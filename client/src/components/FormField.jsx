import PropTypes from 'prop-types';
function FormField({ LableName, type, name, placeholder, value, handleChange, isSurpriseMe, handleSurpriseMe }) {
  return (
    <div>
    
 
      <div className="flex items-center gap-2 mb-2">
        <label htmlFor={name} className="block text-sm font-medium text-gray-900">
          {LableName}
        </label>
 
        {isSurpriseMe && (
          <button type="button" onClick={handleSurpriseMe} className="font-semibold  text-xs bg-[#ECECF1] py-1 px-2 rounded-[5px] text-black">Surprise me</button>
        )

        }
      </div>

      <div>
        <input
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          required
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block w-full p-3 "
        />



      </div>


    </div>
  )
}

export default FormField;


FormField.propTypes = {
  LableName: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  isSurpriseMe: PropTypes.bool,
  handleSurpriseMe: PropTypes.func,
};