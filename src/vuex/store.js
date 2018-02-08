import * as TYPES from './mutation-types.js'

const state = {
    leftBarState: null
};

const mutations = {
    [TYPES.SET_LEFTBARSTATE]:(state,leftBarState)=>{ state.leftBarState = leftBarState },
    
};

const getters = {
    [TYPES.leftBarState]: ({ leftBarState }) => leftBarState
    
};

const actions = {
    [TYPES.changeleftBarState]: ({
        commit,
        getters
    }, leftBarState) => {
        commit(TYPES.SET_LEFTBARSTATE, leftBarState);
    },
};

export default {
	state,
	mutations,
	getters,
	actions,
};