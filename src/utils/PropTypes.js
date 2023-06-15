import PropTypes from 'prop-types';

const location = PropTypes.shape({
    state: PropTypes.shape({
        key: PropTypes.string,
    }),
});

const propTypes = {
    ...PropTypes,
    location,
};

export default propTypes;
