import {
    SET_BLOG_DATA,
    SET_BLOG_LOADING,
    SET_FEATURED_BLOGS,
    SET_SEARCH_BLOGS,
    SET_PROJECT_DATA,
    SET_PROJECT_LOADING,
    SET_TEAM_DATA,
    SET_TEAM_LOADING,
    SET_INSIGHTS_BLOGS,
    SET_FEATURED_PROJECT,
} from '../types';

const reducer = (state, action) => {
    switch (action.type) {
        case SET_FEATURED_PROJECT:
            return {
                ...state,
                featuredProject: action.payload,
            };
        case SET_INSIGHTS_BLOGS:
            return {
                ...state,
                insightsBlogs: action.payload,
            };
        case SET_BLOG_LOADING:
            return {
                ...state,
                blogLoaded: action.payload,
            };
        case SET_BLOG_DATA:
            return {
                ...state,
                blogData: action.payload,
            };
        case SET_FEATURED_BLOGS:
            return {
                ...state,
                featuredBlogs: action.payload,
            };
        case SET_SEARCH_BLOGS:
            return {
                ...state,
                searchBlogs: action.payload,
            };
        case SET_PROJECT_DATA:
            return {
                ...state,
                projectData: action.payload,
            };
        case SET_PROJECT_LOADING:
            return {
                ...state,
                projectLoaded: action.payload,
            };
        case SET_TEAM_DATA:
            return {
                ...state,
                teamData: action.payload,
            };
        case SET_TEAM_LOADING:
            return {
                ...state,
                teamLoaded: action.payload,
            };
        default:
            return {
                ...state,
            };
    }
};

export default reducer;
