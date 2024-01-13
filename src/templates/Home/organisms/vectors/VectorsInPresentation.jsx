import Cube from '../../../../atoms/vectors/Cube';
import DotsSquare from '../../../../atoms/vectors/DotsSquare';
import styles from './VectorsInPresentation.module.css';

const VectorsInPresentation = () => {
    return(
        <div>
            <div className={ styles.cube_v_presentation }>
                <Cube />
            </div>
            <div className={ styles.dots_square_v_presentation }>
                <DotsSquare />
            </div>
        </div>
    );
}

export default VectorsInPresentation;
