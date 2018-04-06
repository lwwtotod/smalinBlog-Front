import * as TYPES from './mutation-types.js'

const state = {
    leftBarState: null,
    editArticle: false,
    getArticleId: 0,
};

const mutations = {
    [TYPES.SET_LEFTBARSTATE]:(state,leftBarState)=>{ state.leftBarState = leftBarState },
    [TYPES.SET_EDITARTICLE]:(state,editArticle)=>{ state.editArticle = editArticle },
    [TYPES.SET_GETARTICLEID]:(state,getArticleId)=>{ state.getArticleId = getArticleId },
};

const getters = {
    [TYPES.leftBarState]: ({ leftBarState }) => leftBarState,
    [TYPES.editArticle]: ({ editArticle }) => editArticle,
    [TYPES.getArticleId]: ({ getArticleId }) => getArticleId
    
};

const actions = {
    [TYPES.changeleftBarState]: ({
        commit,
        getters
    }, leftBarState) => {
        commit(TYPES.SET_LEFTBARSTATE, leftBarState);
    },
    [TYPES.changeeditArticle]: ({
        commit,
        getters
    }, editArticle) => {
        commit(TYPES.SET_EDITARTICLE, editArticle);
    },
    [TYPES.changegetArticleId]: ({
        commit,
        getters
    }, getArticleId) => {
        commit(TYPES.SET_GETARTICLEID, getArticleId);
    },
};

export default {
	state,
	mutations,
	getters,
	actions,
};