import { Module, MutationTree, ActionTree, GetterTree } from 'vuex';
import { StateInterface } from '../index';

const enum MutationTypes {
  toggleCardStatus = 'toggleCardStatus',
}

const enum ActionTypes {
  toggleCardStatus = 'toggleCardStatus',
}

export interface CardStateInterface {
  selectedCard: {
    isFreezed: boolean;
  };
}

function state(): CardStateInterface {
  return {
    selectedCard: {
      isFreezed: false,
    },
  };
}

const mutations: MutationTree<CardStateInterface> = {
  [MutationTypes.toggleCardStatus](state: CardStateInterface) {
    state.selectedCard.isFreezed = !state.selectedCard.isFreezed;
  },
};

const actions: ActionTree<CardStateInterface, StateInterface> = {
  [ActionTypes.toggleCardStatus](context) {
    context.commit('toggleCardStatus');
  },
};

const getters: GetterTree<CardStateInterface, StateInterface> = {};

const appModule: Module<CardStateInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state,
};

export default appModule;
