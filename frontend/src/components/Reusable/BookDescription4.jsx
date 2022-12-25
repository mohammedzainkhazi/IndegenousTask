
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FpressBeforeLogin } from '../futurepress/FpressBeforeLogin'
import { UserContext } from '../context/AuthContext';
import { useContext } from 'react';
import "../books_landing/Hover.css"
import Cover_pdf from '../LoginPage/Cover_pdf';
import { Document, Page } from 'react-pdf';

function BookDescription4() {
        let browseclick = 0;
        const [nav, setnav] = useState(0);
        let navigate = useNavigate();
        const onDocumentLoadSuccess = ({ numPages }) => {
                setPage(1);
        };
        const [page, setPage] = useState(1);
        let path = "/readbook";
        useEffect(() => {
                if (nav !== 0) {

                        navigate(path);
                }

        }, [nav])

        const handleClick = () => {
                browseclick = browseclick + 1;
                setnav(browseclick);
        }



        let { readingbook } = useContext(UserContext);
        return (
                <div className='fpress_img' style={{ width: '1086px', height: '520px', display: 'flex', flexDirection: 'row', alignItems: 'flex-start', flex: 'none', order: 1, flexGrow: 0, paddingTop: '8px', gap: '48px', position: 'absolute', marginLeft: '8px' }}>
                        <div style={{ padding: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '519px', height: '503px' }}>
                                <div style={{ width: 'auto', height: '28px', marginTop: '48px', marginLeft: '24px' }}>
                                        <h3 style={{ fontFamily: 'Work Sans', fontSize: '24px', fontWeight: '600', lineHeight: '28.15px', letterSpacing: '-2%', color: '#0E0E2C', margin: 0 }}>
                                                {readingbook.title}
                                        </h3>
                                </div>
                                <div style={{ width: '104px', height: '44px', marginTop: '16px', marginLeft: '24px' }}>
                                        <p style={{ margin: 0, fontFamily: 'Work Sans', fontSize: '16px', fontWeight: '500', lineHeight: '22.4px', letterSpacing: '-2%', color: '#4A4A68' }}>
                                                {/* {readingbook.author[0].first_name} */}
                                                <br />
                                                {readingbook.year}
                                        </p>
                                </div>
                                <div style={{ width: '425px', height: 'auto', marginTop: '16px', marginLeft: '24px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', flex: 'none', order: 2, flexGrow: 0, padding: 0, gap: '16px', fontFamily: 'Work Sans', fontSize: '16px', fontWeight: '500', lineHeight: '22.4px', letterSpacing: '-2%', color: '#4A4A68' }}>
                                        {/* {readingbook.description} */}
                                        Book Description long version..... Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quasi iure illo dolor aut reiciendis cupiditate placeat rerum enim saepe, quae porro expedita quod amet fugiat est quis quidem esse. Sunt dolores, dolor incidunt, alias reprehenderit asperiores harum minima enim consequatur molestiae delectus! Voluptate molestias vero, repellendus ipsum architecto accusantium adipisci alias repellat facere quasi at deserunt eum voluptatibus, praesentium consectetur voluptates, quo dolor! Soluta doloremque at maxime? Dolore sunt ratione excepturi nobis ab deleniti quia sint ut autem amet!
                                </div>
                                <button style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 'none', order: 3, flexGrow: 0, padding: '12px 24px', width: 'auto', height: '48px', background: '#EFEFFD', borderRadius: '8px', marginTop: '16px', marginLeft: '24px', fontFamily: 'Work Sans', fontSize: '16px', fontWeight: '700', lineHeight: '18.77px', letterSpacing: '2%', color: '#428CFB', border: 'none' }}
                                        onClick={handleClick}
                                >
                                        START READING
                                </button>

                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', flex: 'none', order: 1, flexGrow: 1, padding: '12px 24px', width: '519px !important', height: '480px !important', gap: '10px', borderRadius: '8px', marginLeft: '48px', marginTop: '20px' }}>
                                <Document
                                        file={readingbook.url} onLoadSuccess={onDocumentLoadSuccess}>
                                        <div className="container" id="block_container" >
                                                <div >
                                                        <Page
                                                        pageNumber={page}
                                                        />
                                                </div>

                                        </div>
                                </Document>

                        </div>

                        {/* <Cover_pdf/> */}
                </div>
        )
}

export default BookDescription4