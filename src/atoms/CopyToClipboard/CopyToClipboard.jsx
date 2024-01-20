import { useEffect, useState } from 'react';
import styles from './CopyToClipboard.module.css';
import CheckIcon from './../icons/CheckIcon';
import ClippyIcon from './../icons/ClippyIcon';

const CopyToClipboard = ({ copyText }) => {
    const [ copied, setCopied ] = useState(false);
    useEffect(() => {
        const timeout = setTimeout(() => {
            if (copied) setCopied(false);
        }, 1000);

        return () => clearTimeout(timeout);
    }, [copied]);


    const handleClick = () => {
        setCopied(true);
        navigator.clipboard.writeText(copyText);
    }
 
    return(
        <button
            onClick={ handleClick }
            className={ styles.button_ctcb }
        >
            <div className={ styles.button_ctcb_content }>
                {
                    !copied ?<ClippyIcon props={{
                        color: 'white',
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        left: 0,
                        strokeDasharray: 50,
                        strokeDashoffset: copied ? -50 : 0,
                        transition: "all 300ms ease-in-out"
                    }} />
                    : null
                }
                {
                    copied ? <CheckIcon props={ {
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        color: "#33FF00",
                        strokeDasharray: 50,
                        strokeDashoffset: copied ? 0 : -50,
                        transition: "all 300ms ease-in-out"
                    } } />
                    : null
                }

            </div>
        </button>
    );
}

export default CopyToClipboard;
