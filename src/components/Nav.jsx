import React from 'react';
import { Link } from 'react-router-dom';

export function Nav () {
    return (
        <>
        <div className="container-presentationCard">
            <article className="presentationCard black-solid-boder">
                <header className="presentationCard-header hide-for-responsive">
                    <img className="presentationCard-header-img hide-for-responsive"
                    src="https://unavatar.io/github/R4BEL" 
                    alt="Un avatar" />
                    <aside className="presentationCard-header-title hide-for-responsive">
                        <h3>Abel Emanuel Ramello</h3>
                        <h5>Sr. Consultant Dynamics 365</h5>
                    </aside>
                </header>
                <nav className="presentationCard-nav delete-margin-w-1000">
                    <ul>
                        <Link  className='color-inerith' to="/aboutme"><li className=''><span className="material-icons icon-nav-left">account_circle</span><span className='hide-for-responsive color-inerith'>ABOUT ME</span></li></Link>
                        <Link  className='color-inerith' to="/myprojects"><li><span className="material-icons icon-nav-left">topic  </span><span className='hide-for-responsive color-inerith'>MY PROYECTS</span></li></Link>
                        <a href="https://github.com/R4BEL" target="_blank" className='color-inerith'><li><span className="material-icons icon-nav-left">build</span><span className='hide-for-responsive'>MY GITHUB</span></li></a>
                    </ul>
                </nav>
                <footer className="presentationCard-footer hide-for-responsive">
                    @RABEL 2024
                </footer>
            </article>
        </div>
        </>
    )
}