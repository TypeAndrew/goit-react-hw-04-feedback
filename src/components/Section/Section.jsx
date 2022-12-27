import PropTypes from 'prop-types';

export function Section(props) {

        const { title,children } = props; 
        
        return (
            <section>{title}
                {children}
            </section>
        )  
    
}

Section.propTypes = {
  title: PropTypes.string,
  
};