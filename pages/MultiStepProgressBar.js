import React from "react";
import styles from '@/styles/MultiStepProgressBar.module.css'
import { ProgressBar, Step } from "react-step-progress-bar";

const MultiStepProgressBar = ({ page, onPageNumberClick }) => {
  var stepPercentage = 0;
  if (page === "pageone") {
    stepPercentage = 13.3;
  } else if (page === "pagetwo") {
    stepPercentage = 28.6;
  } else if (page === "pagethree") {
    stepPercentage = 45.9;
  } else if (page === "pagefour") {
    stepPercentage = 62.2;
  } 
  else if(page === 'pagefive'){
    stepPercentage = 81.4;
  }
  else if(page === 'pagesix'){
    stepPercentage = 95.6;

  }
  else if(page === 'pagesaven'){
    stepPercentage = 100;

  }
  else {
    stepPercentage = 0;
  }

  return (
      <div className={styles.progressbar}>
    <ProgressBar percent={stepPercentage}>
      <Step>
        {({ accomplished, index }) => (
          <div
          className={` ${styles.indexedStep} ${accomplished ? `${styles.accomplished}` : null}` }
            onClick={() => onPageNumberClick("1")}
          >
            {index + 1}
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <div
          className={` ${styles.indexedStep} ${accomplished ? `${styles.accomplished}` : null}` }
            onClick={() => onPageNumberClick("2")}
          >
            {index + 1}
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <div
          className={` ${styles.indexedStep} ${accomplished ? `${styles.accomplished}` : null}` }
            onClick={() => onPageNumberClick("3")}
          >
            {index + 1}
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <div
          className={` ${styles.indexedStep} ${accomplished ? `${styles.accomplished}` : null}` }
            onClick={() => onPageNumberClick("4")}
          >
            {index + 1}
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <div
          className={` ${styles.indexedStep} ${accomplished ? `${styles.accomplished}` : null}` }
            onClick={() => onPageNumberClick("5")}
          >
            {index + 1}
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <div
          className={` ${styles.indexedStep} ${accomplished ? `${styles.accomplished}` : null}` }
            onClick={() => onPageNumberClick("6")}
          >
            {index + 1}
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <div
          className={` ${styles.indexedStep} ${accomplished ? `${styles.accomplished}` : null}` }
            onClick={() => onPageNumberClick("7")}
          >
            {index + 1}
          </div>
        )}
      </Step>
    </ProgressBar>
    </div>
  );
};

export default MultiStepProgressBar;