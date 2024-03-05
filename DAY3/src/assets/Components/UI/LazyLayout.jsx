import { Suspense } from "react";
import PropTypes from 'prop-types';
import loadingGif from '/src/assets/Images/gif4.gif'; // Replace with the correct path to your loading GIF

const LazyLayout = ({ component: Component, ...rest }) => {
    return (
        <Suspense fallback={
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh', // Adjust the height as needed
            }}>
                <img
                    src={loadingGif}
                    alt="Loading..."
                    style={{
                        maxWidth: '100px',
                        maxHeight: '100px', 
                    }}
                />
            </div>
        }>
            <Component {...rest} />
        </Suspense>
    );
}

LazyLayout.propTypes = {
    component: PropTypes.elementType.isRequired
}

export default LazyLayout;
