import React from 'react'
import styles from '@/styles/Home.module.css'
import { useState } from 'react';
import PageOne from './Professional';
import PageTwo from './Personaldetails';
import PageThree from './Educational'
import PageFour from './Experience';
import PageFive from './Skills';
import PageSix from './Achievements';
import PageSaven  from './project'
import tachyons from "tachyons";
import MultiStepProgressBar from "./MultiStepProgressBar";

const form = () => {
    const  [page,setPage]=useState("pageone");
    const nextPage = (page) => {
        setPage(page);
      };
    const nextPageNumber = (pageNumber) => {
        switch (pageNumber) {
          case "1":
            setPage("pageone");
            break;
          case "2":
            setPage("pagetwo");
            break;
          case "3":
            setPage("pagethree");
            break;
          case "4":
            setPage("pagefour");
            break;
         case "5":
            setPage("pagefive");
            break;
        case "6":
            setPage("pagesix");
            break;
        case "7":
            setPage("pagesaven");
            break;
        default:
            setPage("1");
        }
      };
  return (
    <div>
        <div className={styles.center_section}> 
            <MultiStepProgressBar page={page} onPageNumberClick={nextPageNumber} />
                 {
                    {
                        pageone: <PageOne onButtonClick={nextPage} />,
                        pagetwo: <PageTwo onButtonClick={nextPage} />,
                        pagethree: <PageThree onButtonClick={nextPage} />,
                        pagefour: <PageFour onButtonClick={nextPage} />,
                        pagefive: <PageFive onButtonClick={nextPage} />,
                        pagesix: <PageSix onButtonClick={nextPage} />,
                        pagesaven: <PageSaven />,
                     }[page]
                   }
        </div>
    </div>
  )
}

export default form