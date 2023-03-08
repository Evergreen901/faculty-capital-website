import React, { useReducer } from 'react';
import { fetchWrapper } from '../../helpers/fetch-wrapper';
import GlobalContext from './GlobalContext';
import GlobalReducer from './GlobalReducer';
import {
    SET_BLOG_DATA,
    SET_BLOG_LOADING,
    SET_FEATURED_BLOGS,
    SET_SEARCH_BLOGS,
    SET_PROJECT_DATA,
    SET_PROJECT_LOADING,
    SET_FEATURED_PROJECT,
    SET_TEAM_DATA,
    SET_TEAM_LOADING,
    SET_INSIGHTS_BLOGS,
} from '../types';
import { BLOG_TAG_TYPE, PROJECT_TAG_TYPE } from '../../config/constants';

const GlobalState = ({ children }) => {
    const initialState = {
        blogData: [],
        featuredBlogs: [],
        searchBlogs: [],
        blogLoaded: false,
        projectData: [],
        projectLoaded: false,
        featuredProject: [],
        teamData: [],
        teamLoaded: false,
        insightsBlogs: [],
    };

    const [state, dispatch] = useReducer(GlobalReducer, initialState);

    const {
        blogData,
        featuredBlogs,
        searchBlogs,
        blogLoaded,
        projectData,
        projectLoaded,
        teamData,
        teamLoaded,
        insightsBlogs,
        featuredProject,
    } = state;

    const setFeaturedProject = (value) => {
        dispatch({
            type: SET_FEATURED_PROJECT,
            payload: value,
        });
    };

    const setInsightsBlogs = (value) => {
        dispatch({
            type: SET_INSIGHTS_BLOGS,
            payload: value,
        });
    };

    const setSearchBlogs = (value) => {
        dispatch({
            type: SET_SEARCH_BLOGS,
            payload: value,
        });
    };

    const setFeaturedBlogs = (value) => {
        dispatch({
            type: SET_FEATURED_BLOGS,
            payload: value,
        });
    };

    const setBlogLoaded = (value) => {
        dispatch({
            type: SET_BLOG_LOADING,
            payload: value,
        });
    };

    const setProjectLoaded = (value) => {
        dispatch({
            type: SET_PROJECT_LOADING,
            payload: value,
        });
    };

    const setTeamLoaded = (value) => {
        dispatch({
            type: SET_TEAM_LOADING,
            payload: value,
        });
    };

    const setBlogData = () => {
        fetchWrapper
            .get('/wp-json/wp/v2/posts?_embed=true&categories=9')
            .then((res) => {
                for (let i = 0; i < res.length; i++) {
                    res[i].title.rendered = res[i].title.rendered.replace('#038;', '');
                }

                dispatch({
                    type: SET_BLOG_DATA,
                    payload: res,
                });

                const temp = res.filter((item, index) => {
                    item.blogIndex = index;
                    if (item.tags.includes(BLOG_TAG_TYPE.FEATURED)) return true;
                    return false;
                });

                const insightsData = res.filter((item, index) => {
                    item.blogIndex = index;
                    if (item.tags.includes(BLOG_TAG_TYPE.INSIGHTS)) return true;
                    return false;
                });
                setInsightsBlogs(insightsData);
                setFeaturedBlogs(temp);
                setBlogLoaded(true);
                setSearchBlogs(res);
            })
            .catch((msg) => {
                console.log(msg);
                setBlogLoaded(true);
            });
    };

    const setProjectData = () => {
        fetchWrapper
            .get('/wp-json/wp/v2/projects?_embed=true&per_page=30')
            .then((res) => {
                dispatch({
                    type: SET_PROJECT_DATA,
                    payload: res,
                });
                const temp = res.filter((item) => {
                    if (item.tags.includes(PROJECT_TAG_TYPE.FEATURED)) return true;
                    return false;
                });
                setFeaturedProject(temp);
                setProjectLoaded(true);
            })
            .catch((msg) => {
                console.log(msg);
                setProjectLoaded(true);
            });
    };

    const setTeamData = () => {
        fetchWrapper
            .get('/wp-json/wp/v2/team?_embed=true')
            .then((res) => {
                dispatch({
                    type: SET_TEAM_DATA,
                    payload: res,
                });
                setTeamLoaded(true);
            })
            .catch((msg) => {
                console.log(msg);
                setTeamLoaded(true);
            });
    };

    return (
        <GlobalContext.Provider
            value={{
                blogData,
                blogLoaded,
                featuredBlogs,
                searchBlogs,
                projectData,
                featuredProject,
                projectLoaded,
                teamData,
                teamLoaded,
                insightsBlogs,
                setBlogData,
                setBlogLoaded,
                setFeaturedBlogs,
                setSearchBlogs,
                setProjectData,
                setFeaturedProject,
                setProjectLoaded,
                setTeamData,
                setTeamLoaded,
                setInsightsBlogs,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalState;
