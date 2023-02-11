import PropTypes from 'prop-types';

const DataCard = (props) => {
    const{name,data}=props
    return (
      <div className="flex justify-between px-4 py-4">
        <span>{name} :</span>
        <span>
          {data}
          <i className="fa-solid fa-circle-arrow-right pl-2" />
        </span>
      </div>
    )
  }

  DataCard.propTypes = {
    name: PropTypes.string.isRequired,
    data: PropTypes.oneOfType([PropTypes.object]).isRequired,
  };
  
  export default DataCard;