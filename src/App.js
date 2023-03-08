import React, { Suspense, lazy } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import GlobalState from './context/global/GlobalState';
import { Layout } from './components/layout';
import { LoadingBlocksWave } from './assets/loading';
import './App.scss';
import './global.scss';

const Home = lazy(() => import('./components/pages/Home'));
const Story = lazy(() => import('./components/pages/Story'));
// const Solution = lazy(() => import('./components/pages/Solution'));
const Portfolio = lazy(() => import('./components/pages/Portfolio'));
const Blog = lazy(() => import('./components/pages/Blog'));
const BlogDetail = lazy(() => import('./components/pages/BlogDetail'));
const Contact = lazy(() => import('./components/pages/Contact'));

function App() {
    return (
        <Router>
            <GoogleReCaptchaProvider reCaptchaKey={process.env.REACT_APP_SITE_KEY} className="z-50">
                <GlobalState>
                    <Suspense
                        fallback={
                            <div className="v-screen h-screen flex justify-center items-center">
                                <LoadingBlocksWave width={48} height={48} />
                            </div>
                        }
                    >
                        <Layout>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="*" element={<Home />} />
                                <Route path="/story" exact element={<Story />} />
                                {/* <Route path="/solution" exact element={<Solution />} /> */}
                                <Route path="/portfolio" element={<Portfolio />} />
                                <Route path="/blog" element={<Blog />} />
                                <Route path="/blog/details/:id" element={<BlogDetail />} />
                                <Route path="/contact" element={<Contact />} />
                            </Routes>
                        </Layout>
                    </Suspense>
                    <Toaster
                        position="top-right"
                        reverseOrder={false}
                        toastOptions={{
                            duration: 5000,
                            style: {
                                position: 'relative',
                                top: '5rem',
                                right: '.5rem',
                                margin: '5px 0',
                                padding: '.7rem 1.5rem',
                                color: '#333333',
                                fontSize: '16px',
                                borderRadius: '8px',
                                background: 'linear-gradient(135deg, #ffffff 0%, #ffffff 100%)',
                            },
                        }}
                    />
                </GlobalState>
            </GoogleReCaptchaProvider>
        </Router>
    );
}

export default App;
