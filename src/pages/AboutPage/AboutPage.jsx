import React from 'react';
import styles from './AboutPage.module.css'


const AboutPage = (props) => {
    return (
        <div className={styles.page}>
            <div className={styles.headerFill}></div>
            <div className={styles.imageFill2}><h1 className={styles.tmm}>LIVE SURD</h1></div>
            <div className={styles.textSection}>
                <h1 className={styles.sectionHeadingL}>OUR STORY</h1>
                <p className={styles.pL}>
                    Many tales have been told of Surdist over the decades, but none are false. Some say it was the
                    propaganda arm of the peasants that ignited the French Revolution and carried on as a dark
                    money organization throughout the next centuries, that’s true. Others have claimed Surdist
                    began as nothing more than a way to clothe the earliest royals of Ancient Egypt and has done
                    so ever since, also true. Perhaps the least convincing theory is that Cody and Sam, the
                    founders, have soundly floundered their way into untold talent for art through hijinx, horseplay,
                    tomfoolery, shithousery, and espionage. This is so false you may think that it’s true.
                    Wherever you think, and however we tell you, is what is to be scrutinized and believed with the
                    zealotry of a llama courting a famed actress over long distance letters. Believe what you won’t.
                    We’re Surdist and we’ve been here since the beginning of time or at least a year.<br/><br/>
                </p>
            </div>
            <div className={styles.imageFill}>
                <h1 className={styles.tmm}>LIVE SURD</h1>
            </div>
            <div className={styles.textSection}>
                <h1 className={styles.sectionHeadingR}>WHAT WE DO</h1>
                <p className={styles.pR}>
                    I ganda, Uganda, we all ganda for propaganda. Surdist is the most powerful lobby for causes
                    nobody should care about. It all started when we got commissioned by Big Whole to create an 
                    advertising campaign disparaging all other milks, but now milk isn't the only thing we don't 
                    care about. We don't care about lots of things, so we put all of those things on shirts so you
                    can or cannot care about lots of things too! As a wise milk man once said, why settle for your 
                    own opinions when we have graciously offered you the opportunity to use ours?<br/><br/>
                </p>
            </div>
            <div className={styles.imageFill3}>
                <h1 className={styles.tmm}>LIVE SURD</h1><h1 className={styles.tmm2}>OR DIE TRYING</h1>
            </div>
        </div>
    )
}

export default AboutPage;